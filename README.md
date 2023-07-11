# Persistent Connection App

This application creates a persistent connection to LLM APIs that often need 30s of a window opening to retrieve all of the streamed data. It uses WebSockets for persistent connections and acts as a bridge between the client and the LLM APIs.

## Installation

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `node app.js` to start the server.

## Usage

Open `index.html` in a web browser. Enter a URL in the form and submit it. The application will send a GET request to this URL and display the response in the page.