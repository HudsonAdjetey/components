/**
 *
 * @param {string} s
 */
function longestString(s) {
  let left = 0;
  let right = 0;
  let charSet = new Set();
  let maxLength = 0;
  let maxSubstring = "";
  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      right++;
      if (right - left > maxLength) {
        maxLength = right - left;
        maxSubstring = s.substring(left, right);
      }
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }

  return maxSubstring;
}

// console.log(longestString("abcabcbb"));

/**
 * Weather application that fetches the weather data for three different cities
 * Fetch weather data for each day
 * If any of the data fetch operation fail handle the error gracefully
 * Once all the data is fetched display the results
 * Otherwise
 * @param {String}
 *  @param {String} city
 * @argument
 */

const fetchWeather = function (city) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const weatherData = {
        city: city,
        temperature: Math.floor(Math.random() * 100) + 1,
        humidity: Math.floor(Math.random() * 100) + 1,
        windSpeed: Math.floor(Math.random() * 10) + 1,
      };
      if (weatherData.city) {
        resolve(weatherData);
      } else {
        reject(new Error(`Failed to fetch weather data for ${city}`));
      }
    }, 1000);
  });
};

const cities = ["London", "New York", "Tokyo"];

Promise.allSettled(cities.map(fetchWeather)).then((weatherInfo) => {
  weatherInfo.forEach((data) => {
    if (data.status === "fulfilled") {
      console.log(`Weather data for ${data.value.city}:`);
      console.log(`Temperature: ${data.value.temperature}°C`);
      console.log(`Humidity: ${data.value.humidity}%`);
      console.log(`Wind Speed: ${data.value.windSpeed} km/h`);
    } else {
      console.error(data.reason.message);
    }
  });
});

function fetchProductFromStore(api) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const product = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: "Product " + Math.floor(Math.random() * 1000) + 1,
        price: Math.floor(Math.random() * 100) + 1,
      };
      if (api && typeof api === "string") {
        resolve(product);
      } else {
        console.log(api);
        reject(new Error("Failed to fetch product data"));
      }
    }, 1000);
  });
}

const apis = ["https://api1.com", undefined, "https://api2.com"];
let validApis = [];
for (let i = 0; i < apis.length; i++) {
  if (apis[i] && typeof apis[i] === "string") {
    validApis.push(apis[i]);
  }
}

/* Promise.allSettled(validApis.map(fetchProductFromStore))
  .then((product) => {
    product.forEach((pro) => {
      if (pro.status === "fulfilled") {
        console.log(`Product data:`);
        console.log(`ID: ${pro.value.id}`);
        console.log(`Name: ${pro.value.name}`);
        console.log(`Price: ${pro.value.price} $`);
      } else {
        console.error(pro.reason.message);
      }
    });
  })
 
 */

const listUsersId = [
  "user1",
  undefined,
  2332,
  "user2",
  "user3",
  "user4",
  undefined,
];

// rate limiting configuration
let requestCount = 0;
// Initial delay between requests
let timer = 1000;
// Maximum requests
const maxRequests = 3;

/**
 *Rate limiting function
 * @param {string} userId
 * @returns {Promise}
 */

const rateLimitingFn = function (userId) {
  return new Promise((resolve, reject) => {
    // check if the user is does not exist
    if (!userId) {
      reject(new Error("Invalid user ID"));
      return;
    }
    // check if the request count is greater than the rate count
    if (requestCount > maxRequests) {
      reject(new Error("Rate limit exceeded. Please try again later"));
      return;
    }

    // perform an async call
    setTimeout(function () {
      // increment request count
      requestCount++;
      // randomize the user card collector
      const randomCardCollector = Math.floor(
        Math.random() * listUsersId.length
      );
      // if the card has been collected by another user collector
      if (userId === randomCardCollector) {
        // Decrement request count before rejecting
        requestCount--;
        reject(new Error("User has been collected by another collector"));
        return;
      }
      // resolve the promise with the collected user card
      resolve(`User card collected by ${userId}`);

      // decrement the request count after the operation completes
      requestCount--;
      // reset the timer if there are remaining requests
      if (requestCount < maxRequests) {
        timer = 1000;
      }
    }, timer);
  });
};

let validUsers = [];
// validate cards
for (let i = 0; i < listUsersId.length; i++) {
  const personValid = listUsersId[i];
  if (typeof personValid === "string" && personValid) {
    validUsers.push(personValid);
  }
}

// rate limit the requests

// process users IDs with rate limiting
/**
 * Process users -> Alternative method
 *  @param {string[]} validusers - list of users IDs
 *   @returns {string[]} valid users
 */
const processUsers = async (validUsers) => {
  const results = [];
  for (const user of validUsers) {
    try {
      const result = await rateLimitingFn(user);
      results.push(result);
    } catch (error) {
      console.error(error?.message || "Request failed");
      results.push(error?.messsage || "Failed request");
      return;
    }
  }
  return results;
};

processUsers(validUsers).then((result) => {
  result.forEach((res) => {
    console.log(res);
  });
});

Promise.allSettled(validUsers.map(rateLimitingFn)).then((result) => {
  result.forEach((res) => {
    if (res.status === "fulfilled") {
      console.log(res.value);
    } else {
      console.error(res.reason.message);
      return;
    }
  });
});
