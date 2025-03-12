Project Frontend - News Search and Display

Table of Contents
- Project Overview
- Features
- Tasks Overview
- API Interactions
- Deployment Instructions
- Demo Video
- Images
- How to Use
- System Requirements

## Project Overview
This project sets up the frontend infrastructure to interact with a third-party API, simulate backend responses, and provide a complete user experience for searching and saving news articles.

## Features
Third-Party API Integration: Interacts with the News API to fetch news articles.
Error Handling: Handles API responses and errors gracefully, displaying appropriate messages to the user.
Frontend Simulation: Simulates backend responses to ensure all pages and design elements are accessible for review.
Responsive Design: Displays articles dynamically, adhering to user interaction.
Tasks Overview
1. API Interactions
Search Form: The search form validates user input. If no text is entered, it shows an error: "Please enter a keyword."

API Request: Sends a request to the News API at the endpoint: https://newsapi.org/v2/everything with the following parameters:

q: User input from the search bar.
apiKey: Your API key (can be obtained by registering at News API).
from: 7 days before the current date.
to: The current date.
pageSize: Set to 100 articles (maximum for the free version).
Proxy URL: Uses the following proxy URL in production to bypass API restrictions:

javascript
Copy
Edit


This project sets up the frontend infrastructure to interact with a third-party API, simulate backend responses, and provide a complete user experience for searching and saving news articles.


## Tasks Overview

### 1. API Interactions

- When the search form is submitted, it validates user input:
  - If no text is entered, displays the error: _"Please enter a keyword."_
  - Otherwise, sends a request to the News API at the endpoint: `https://newsapi.org/v2/everything`.
- **API Key**: Requires a valid API key, which can be obtained by registering at [News API](https://newsapi.org/register).
- **Parameters**:
  - `q`: User input from the search bar.
  - `apiKey`: Your API key.
  - `from`: 7 days before the current date.
  - `to`: The current date.
  - `pageSize`: Set to 100 articles (maximum for the free version).
- ** Production Proxy URL**: Uses the following proxy URL in production to bypass API restrictions:
  ```javascript
  const newsApiBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://nomoreparties.co/news/v2/everything"
      : "https://newsapi.org/v2/everything";
  ```

  ## Demo :
https://youtu.be/gCRQMgS4l3E


  ## Images: <img width="1222" alt="Screen Shot 2025-03-03 at 2 36 42 PM" src="https://github.com/user-attachments/assets/f56fa062-a25a-47d2-86eb-f5d928abf31e" />
<img width="1263" alt="Screen Shot 2025-03-03 at 2 42 00 PM" src="https://github.com/user-attachments/assets/30a2b5a0-1f08-4f14-8966-fcbe57c41dfb" />

## Deployed Site

The project is deployed on GitHub Pages and can be accessed here:  
[https://Genebrazley23.github.io/Project-frontend/](https://Genebrazley23.github.io/Project-frontend/)

## How to Use


1. Clone the repository:
   ```bash
   git clone https://github.com/Genebrazley23/Project-frontend.git
   ```

   ## System Requirements

Node.js: v14 or later

npm: v6 or later

Browser: Chrome, Firefox, Safari, or Edge (latest versions recommended)

API Key: A valid API key from News API is required for fetching news articles.
