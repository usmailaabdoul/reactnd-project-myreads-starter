# MyReads Project

This is project is the final assessment project for Udacity's React Fundamentals course. The project contains a well defined UI which has 3 main sections called book shelves on the home page for users to view their books, users can view books they are currenty reading, they want to read and the books they have read, they can also search for new books using key terms and add this books to the various shelves. Finally a user is also able to move a book from one shelf to the other.

## To Get Started

* install all project dependencies with `npm install`
* start the development server with `npm start`

## The Updated Directory
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── component # This folder containes the different components used throughout the application.
    │   ├── bookSection.js # This component is used to render the book shelves.
    │   ├── bookCard.js # This component is the individual book rendered in the book shelf.
    │   └── index.js # this file contains the components which are exported.
    ├── utils # This folder contains different usefull elements of the application which are neither components or pages.
    │   └── helpers.js # this file contains some functions which are used to fetch and filter data from the api.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── home.js # This includes the main Home Page the list of Book sections and fetches data for the sections.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── search.js # This is the Search page here you will fine the search bar to search for books.
```