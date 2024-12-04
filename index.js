document.getElementById("header-copy").addEventListener("click", () => {
  // The text to copy
  const textToCopy = "nnamdinwaocha@gmail.com";

  // Use the Clipboard API to write text to the clipboard
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Optionally, provide feedback to the user
      alert("Text copied to clipboard!");
    })
    .catch((err) => {
      // Handle any errors
      console.error("Failed to copy text: ", err);
    });
});

document.getElementById("header-copy2").addEventListener("click", () => {
  // The text to copy
  const textToCopy = "nnamdinwaocha@gmail.com";

  // Use the Clipboard API to write text to the clipboard
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Optionally, provide feedback to the user
      alert("Text copied to clipboard!");
    })
    .catch((err) => {
      // Handle any errors
      console.error("Failed to copy text: ", err);
    });
});
