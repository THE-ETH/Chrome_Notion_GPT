document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("save-btn");
  
    saveButton.addEventListener("click", () => {
      // Send a message to the content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "saveConversation" });
      });
  
      // Close the popup after the button is clicked
      window.close();
    });
  });
  