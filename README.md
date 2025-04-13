# Focused - Website Blocker

## Overview

**Focused** is a Chrome extension designed to help users stay productive by blocking distracting websites. The extension allows users to manually add websites to a blocklist, quickly block popular social media sites, and even schedule specific times during which distractions are blocked. When a user attempts to visit a blocked website, they are greeted with a motivational message and a visually appealing "Focus Mode" page to encourage them to stay on tra…rse, showcasing my understanding of web development, JavaScript, and Chrome extension APIs.

The goal of this project is to provide a simple yet effective tool for improving productivity, while also demonstrating my ability to design and implement a functional and user-friendly application. The extension is built using HTML, CSS, and JavaScript, and leverages Chrome's `storage` and `content_scripts` APIs to manage user data and dynamically modify web pages.

---

## Files and Their Functionality



## Files and Their Functionality

### 1. `popup.html`
This file defines the user interface for the extension's popup window, which appears when the user clicks on the extension icon in the Chrome toolbar. The popup includes the following sections:
- **Header**: Displays the extension's name ("Focused") and a motivational tagline ("Stay productive, block distractions").
- **Add Site Section**: Contains an input field and a button for adding websites to the blocklist.
- **Blocked Websites Section**: Displays a list of websites currently on the blocklist, with an option to remove them.
- **Quick Add Section**: Provides a list of popular social media websites that can be quickly added to the blocklist with a single click.

The file also includes inline CSS for styling the popup, ensuring a clean and modern design. The layout is responsive and optimized for the small dimensions of a Chrome extension popup.

---

### 2. `popup.js`
This JavaScript file handles the functionality of the popup interface. It includes the following features:
- **Blocklist Management**: Allows users to add websites to the blocklist, remove websites from it, and dynamically updates the UI to reflect these changes.
- **Quick Add Functionality**: Displays a list of popular social media websites and allows users to add them to the blocklist with a single click.
- **Schedule Management**: Enables users to set specific time intervals during which distractions are blocked. The schedule is stored in Chrome's local storage and displayed in the popup.

The file uses Chrome's `storage.sync` API to persist the blocklist across browser sessions and `storage.local` for managing the schedule. It also ensures that the UI updates in real-time, providing a seamless user experience.

---

### 3. `Content.js`
This file is a content script that runs on all web pages. Its primary purpose is to check if the current website is on the blocklist and, if so, replace the page content with a custom "Focus Mode" page. Key features include:
- **Motivational Quotes**: Displays a random motivational quote to inspire the user to stay focused.
- **Custom HTML and CSS**: Dynamically generates and injects a visually appealing "Focus Mode" page, complete with animations and a "Go Back" button.
- **Blocklist Integration**: Fetches the blocklist from Chrome's `storage.sync` and checks if the current website matches any of the entries.

This file demonstrates my ability to manipulate the DOM and dynamically inject content into web pages, as well as my understanding of Chrome's content script capabilities.

---

### 4. `manifest.json`
This file is the configuration file for the Chrome extension. It specifies the extension's metadata, permissions, and behavior. Key elements include:
- **Manifest Version**: Uses version 3, the latest version of the Chrome Extensions API.
- **Permissions**: Requests access to `storage` and `activeTab` to manage user data and interact with web pages.
- **Action**: Defines the popup (`popup.html`) and the default icon for the extension.
- **Content Scripts**: Specifies that `Content.js` should run on all URLs.

The `manifest.json` file is essential for defining the structure and functionality of the extension.

---

## Design Choices

### 1. **User Interface**
I chose a clean and minimalistic design for the popup interface to ensure ease of use. The use of modern CSS variables and responsive design principles ensures that the interface is visually appealing and functional across different screen sizes.

### 2. **Motivational Focus Mode**
Instead of simply blocking websites with a generic error message, I decided to create a motivational "Focus Mode" page. This decision was driven by the desire to provide a positive and encouraging experience for users, rather than a punitive one.

### 3. **Storage APIs**
I opted to use Chrome's `storage.sync` API for the blocklist to ensure that the user's data is synchronized across devices. For the schedule, I used `storage.local` since it is specific to the user's current device and does not need to be shared.

### 4. **Popular Sites Quick Add**
To make the extension more user-friendly, I included a "Quick Add" feature for popular social media websites. This decision was based on the observation that many users are likely to block these sites, and providing a shortcut improves the overall user experience.

---

## How to Run the Codebase Locally

To run this Chrome extension on your local computer, follow these steps:

1. **Clone or Download the Repository**:
   - Clone the repository using Git:
     ```bash
     git clone https://github.com/divinepatrick/CS50x-final-project.git
     ```
   - Alternatively, download the repository as a ZIP file and extract it to a folder on your computer.

2. **Open Chrome Extensions Page**:
   - Open Google Chrome and navigate to `chrome://extensions/`.

3. **Enable Developer Mode**:
   - In the top-right corner of the Extensions page, toggle the "Developer mode" switch to enable it.

4. **Load the Extension**:
   - Click on the "Load unpacked" button.
   - Select the folder containing the extension files (e.g., `blocksite-ext`).

5. **Test the Extension**:
   - The extension icon should now appear in the Chrome toolbar.
   - Click on the icon to open the popup and start using the extension.

6. **Modify and Reload**:
   - If you make changes to the code, return to the Extensions page and click the "Reload" button for the extension to apply the updates.

---

## Challenges and Future Improvements

One of the challenges I faced was ensuring that the extension works seamlessly across different websites and edge cases. Testing and debugging the content script required careful attention to detail. In the future, I plan to add the following features:
- **Customizable Focus Mode Page**: Allow users to personalize the motivational messages and design.
- **Advanced Scheduling**: Enable users to set recurring schedules (e.g., block distractions every weekday from 9 AM to 5 PM).
- **Analytics**: Provide insights into how often users attempt to visit blocked websites, helping them understand their habits.

---
## Conclusion

Focused is a practical and user-friendly Chrome extension that helps users stay productive by blocking distractions. This project demonstrates my ability to design and implement a complete application, from the user interface to the underlying functionality. I am proud of the work I have done and look forward to building upon this foundation in the future.
