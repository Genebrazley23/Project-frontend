# Project Frontend - News Search and Display

This project sets up the frontend infrastructure to interact with a third-party API, simulate backend responses, and provide a complete user experience for searching and saving news articles.

## Features

- **Third-Party API Integration**: Interacts with the [News API](https://newsapi.org) to fetch news articles.
- **Error Handling**: Handles API responses and errors gracefully, displaying appropriate messages to the user.
- **Frontend Simulation**: Simulates backend responses to ensure all pages and design elements are accessible for review.
- **Responsive Design**: Displays articles dynamically, adhering to user interaction.

---

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
- **Production Proxy URL**: Uses the following proxy URL in production to bypass API restrictions:
  ```javascript
  const newsApiBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://nomoreparties.co/news/v2/everything"
      : "https://newsapi.org/v2/everything";
  ```

## Deployed Site

The project is deployed on GitHub Pages and can be accessed here:  
[https://Genebrazley23.github.io/Project-frontend/](https://Genebrazley23.github.io/Project-frontend/)

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/Genebrazley23/Project-frontend.git
   ```
