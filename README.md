
# Personal Bookshelf

## Overview

Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage. Users can search for books, add them to their bookshelf, and view their saved books.

## Features

- **Book Search**: Search for books by title using the Open Library API.
- **Add to Bookshelf**: Save books to your personal bookshelf using localStorage.
- **View Bookshelf**: View the list of books saved in your personal bookshelf.
- **Responsive Design**: The application is responsive and works on various devices.

## Tech Stack

- React
- React Router DOM
- Axios
- Vite

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/personal-bookshelf.git
   cd personal-bookshelf
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
src/
  components/
    BookCard.jsx
    BookSearch.jsx
    Bookshelf.jsx
  pages/
    BookSearchPage.jsx
    BookshelfPage.jsx
  App.jsx
  main.jsx
  App.css
  index.css
public/
  index.html
```

### Components

- **BookCard.jsx**: Displays individual book details and allows adding a book to the bookshelf.
- **BookSearch.jsx**: Handles the book search functionality and displays search results.
- **Bookshelf.jsx**: Displays the books saved in the personal bookshelf.

### Pages

- **BookSearchPage.jsx**: Contains the book search input and displays search results.
- **BookshelfPage.jsx**: Displays the user's personal bookshelf.

### Main Files

- **App.jsx**: Main component that sets up routing and manages state for the bookshelf.
- **main.jsx**: Entry point of the application that renders the App component.

## Deployment

The application can be deployed on any hosting platform that supports static sites. For example, you can use Netlify or Vercel for deployment.

### Deploying on Netlify

1. Go to the Netlify website and log in.
2. Click on "New site from Git".
3. Select your repository.
4. Follow the instructions to deploy your site.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Open Library API](https://openlibrary.org/developers/api) for providing book data.
- [Create React App](https://create-react-app.dev/) for bootstrapping the React application.
- [Vite](https://vitejs.dev/) for the fast development server and build tool.
