// Function to save the chat content to Notion
async function saveToNotion(chatContent) {
    // Replace these placeholders with your actual Notion API key and database ID
    const notionApiKey = 'your_notion_api_key';
    const databaseId = 'your_database_id';
    const notionApiUrl = 'https://api.notion.com/v1/pages';
  
    const payload = {
      parent: {
        database_id: databaseId,
      },
      properties: {
        // Replace 'ChatGPT' and 'rich_text' with the appropriate property name and type for your Notion database
        ChatGPT: {
          rich_text: [
            {
              text: {
                content: chatContent,
              },
            },
          ],
        },
      },
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-06', // Update this value if there's a new Notion API version available
        'Authorization': `Bearer ${notionApiKey}`,
      },
      body: JSON.stringify(payload),
    };
  
    try {
      const response = await fetch(notionApiUrl, requestOptions);
      const data = await response.json();
  
      if (response.ok) {
        console.log('Chat content saved to Notion:', data);
        return true;
      } else {
        console.error('Failed to save chat content to Notion:', data);
        return false;
      }
    } catch (error) {
      console.error('Error saving chat content to Notion:', error);
      return false;
    }
  }
  
  // Listener for messages from the content script
  chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'saveConversation') {
      const success = await saveToNotion(request.data);
      sendResponse({ success });
    }
    return true;
  });
  