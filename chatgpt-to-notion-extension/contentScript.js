// Function to extract the chat content
function extractChatContent() {
    // Replace the following line with the appropriate DOM selection method for the chat content on openai.com
    const chatContent = document.querySelector('#chatContentSelector');
  
    if (chatContent) {
      return chatContent.innerHTML;
    } else {
      return null;
    }
  }
  
  // Listener for messages from the popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'saveConversation') {
      const chatContent = extractChatContent();
  
      if (chatContent) {
        // Send chat content to the background script
        chrome.runtime.sendMessage({ action: 'saveConversation', data: chatContent });
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false, message: 'Failed to extract chat content.' });
      }
    }
  });
  