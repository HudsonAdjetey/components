// Function to apply formatting commands (bold, italic, etc.)
function formatDoc(cmd, value = null) {
  console.log(cmd);
  if (value) {
    document.execCommand(cmd, false, value);
  } else {
    document.execCommand(cmd, false, null);
  }
}

const getHighlightPen = document.querySelector(".bx-highlight");

const performHighlight = function (isHighlight) {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  if (!selectedText) {
    console.log("No text selected");
    return;
  }

  // Apply or remove highlighting
  if (isHighlight) {
    formatDoc("hiliteColor", "yellow");
  } else {
    // Remove highlight (apply transparent to remove the highlight)
    formatDoc("hiliteColor", "transparent");
  }
};

const highlightText = function () {
  let isHighlightActive = false;

  getHighlightPen.addEventListener("click", function () {
    // Toggle the highlight state
    isHighlightActive = !isHighlightActive;

    if (isHighlightActive) {
      performHighlight(true);
      console.log("Text highlighted");
    } else {
      performHighlight(false);
      console.log("Highlight removed");
    }
  });
};

highlightText();

// font family selection

const getFontFamilySelect = document.querySelector(".select_fonts");

const editor = document.getElementsByClassName("editor");

const familySelect = function () {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  if (selectedText) {
    const range = selection.getRangeAt(0);

    // Create a new span element to wrap the selected text
    const selectedTextFamilySpan = document.createElement("span");
    selectedTextFamilySpan.style.fontFamily = getFontFamilySelect.value;

    // Surround the selected text with the span
    range.surroundContents(selectedTextFamilySpan);

    // Clear the selection
    selection.removeAllRanges();
  } else {
    // Apply the font family to the entire document
    editor[0].style.fontFamily = getFontFamilySelect.value;
    console.log(
      `Font family changed to ${getFontFamilySelect.value} for the entire document`
    );
  }
};

// Attach the event listener
getFontFamilySelect.addEventListener("change", familySelect);

const getUnderlineBtn = document.querySelector(".bx-underline");

const underlineText = function () {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  const textSpan = document.createElement("span");
  textSpan.style.textDecoration = "underline";

  const range = selection.getRangeAt(0);

  // surround the selected text with the span
  range.surroundContents(textSpan);

  selection.removeAllRanges();

  if (!selectedText) {
    console.log("No text selected");
    return;
  }
};

const allBtns = document.querySelectorAll("button");

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Check for the presence of active
    if (btn.classList.contains("active")) {
      // If active, remove the active class and change the text
      btn.classList.remove("active");
    } else {
      // If not active, add the active class and change the text
      btn.classList.add("active");
    }
  });
});

const undoBtn = document.querySelector(".undo");
const redoBtn = document.querySelector(".redo");

const undoStack = [];
const redoStack = [];

const applyUndoRedo = function (operation) {
  // Execute the operation and store the result in the respective stack
  if (operation === "undo") {
    redoStack.push(document.execCommand("undo", false, null));
  } else if (operation === "redo") {
    undoStack.push(document.execCommand("redo", false, null));
  }
};

// create a link

const createLinkBtn = document.querySelector(".bx-link");

const createLink = function () {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  if (!selectedText) {
    console.log("No text selected");
    return;
  }

  const input = prompt("Enter the URL for the link:");

  if (!input) {
    console.log("No URL provided");
    return;
  }

  const link = document.createElement("a");
  link.href = input;
  link.textContent = selectedText;

  const range = selection.getRangeAt(0);

  // surround the selected text with the link
  range.surroundContents(link);

  selection.removeAllRanges();
};

const addLink = function () {
  const url = prompt("Insert url");
  formatDoc("createLink", url);
};

const content = document.querySelector(".editor");

content.addEventListener("mouseenter", function () {
  const a = content.querySelectorAll("a");
  a.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      content.setAttribute("contenteditable", false);
      item.target = "_blank";
    });
    item.addEventListener("mouseleave", function () {
      content.setAttribute("contenteditable", true);
    });
  });
});

const showCode = document.getElementById("show-code");
let active = false;

showCode.addEventListener("click", function () {
  showCode.dataset.active = !active;
  active = !active;
  console.log(showCode.dataset);
  if (active) {
    content.textContent = content.innerHTML;
    content.setAttribute("contenteditable", false);
  } else {
    content.innerHTML = content.textContent;
    content.setAttribute("contenteditable", true);
  }
});
