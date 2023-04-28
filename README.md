# Chrome_Notion_GPT
Extension for Chrome that allows users to save ChatGPT conversations to Notion.
# ChatGPT to Notion Chrome Extension

A simple Chrome extension that saves conversations from ChatGPT (openai.com) directly to your Notion workspace.

## Features

- Record and save ChatGPT conversations
- Automatically create a new page in your Notion workspace
- Easy-to-use browser action button to save chats
- Secure communication with the Notion API

## Installation

1. Clone the repository to your local machine using `git clone [repository URL]`.
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer mode" by toggling the switch in the top-right corner.
4. Click "Load unpacked" and select the folder containing the cloned repository.
5. The extension will be installed and available for use in your browser.

## Usage

1. Open a ChatGPT conversation on openai.com.
2. Click the browser action button to save the conversation.
3. The extension will save the conversation as a new page in your designated Notion workspace.

## Configuration

To set up the extension with your Notion account, you'll need to configure the Notion API key and the target workspace within the extension's code. Follow these steps:

1. Obtain your Notion API key by following the [official documentation](https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration).
2. Replace the placeholder `YOUR_NOTION_API_KEY` in the `background.js` file with your actual Notion API key.
3. Set up the target workspace in Notion and obtain its ID. Replace the placeholder `YOUR_NOTION_WORKSPACE_ID` in the `background.js` file with your workspace ID.

## Contributing

This project is open for contributions. Please follow these steps:

1. Fork the repository and create a new branch for your feature or bugfix.
2. Make the changes in your branch and push it to your fork.
3. Create a pull request to merge your changes into the main branch.
4. After the review, the changes will be merged if they meet the project requirements.

## License

[MIT License](LICENSE)
