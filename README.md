# News Application

## Overview

The News Application is a simple web application built using HTML, CSS, and JavaScript to fetch and display news articles from a news API. It provides various sections such as Entertainment, Sports, Technology, etc., and includes a search functionality to search for news articles by keywords.

![Screenshot 2024-06-16 225721](https://github.com/vinayak-gupta-20/News-Pulse/assets/143531375/54fa9b77-297e-46ce-95c5-1a6013df6d4b)


## Features

- **News Sections**: Browse news articles by different categories such as Entertainment, Sports, Technology, etc.
- **Search Functionality**: Search for news articles based on keywords.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **API Integration**: Fetches news data from a third-party news API.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Getting Started

### Prerequisites

To run this project locally, you need a web browser.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/news-application.git
    cd news-application
    ```

2. Open `index.html` in your web browser.

## Project Structure

- `index.html`: Main HTML file for the application structure.
- `styles.css`: CSS file for styling the application.
- `script.js`: JavaScript file for fetching news data and handling interactions.

## API Integration

The application fetches news data from a third-party news API. Make sure to replace `YOUR_API_KEY` in `script.js` with your actual API key.

```javascript
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
