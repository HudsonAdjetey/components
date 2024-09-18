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

// perform font family selection
/* 
FEATURES

- User can select font family from dropdown

- When a font family is selected, it will change the font of the selected text in the document

- The font family will be applied to the currently selected text

- If no text is selected, an alert will be displayed asking the user to select text

- The font family will be applied to the entire document

- The font family will be applied using the execCommand API



*/
/* const fontFamilySelect = function () {
  getFontFamilySelect.addEventListener("change", function (event) {
    const selectedFont = event.target.value;
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (!selectedText) {
      alert("Please select text to apply font family");
      return;
    }
    formatDoc("fontName", selectedFont);
    console.log(`Font family changed to ${selectedFont}`);
    // Apply font family to the entire document
    formatDoc("fontName", selectedFont, document.body);
    console.log(
      `Font family changed to ${selectedFont} for the entire document`
    );
  });
};

fontFamilySelect();
 */

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

    console.log(`Font family changed to ${getFontFamilySelect.value}`);
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
