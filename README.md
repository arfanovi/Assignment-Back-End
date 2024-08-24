# Overview
    This project is a simple Node.js application using the Express.js framework to handle HTTP requests and perform file operations. It serves as a practical demonstration of basic routing and file handling in a web server environment.



# Code Explanation
* Main Application File (src/index.js)

    Sets up the Express server and imports route handlers from separate files.

# Route Handlers
    Home Route (src/routes/home.js): Handles requests to the root URL (/).
    About Route (src/routes/about.js): Handles requests to the /about URL.
    Contact Route (src/routes/contact.js): Handles requests to the /contact URL.
    File Write Route (src/routes/fileWrite.js): Handles requests to the /file-write URL and writes "File write finished" to demo.txt.



# Routes
    Home Page: GET / - Returns "This is the Home Page".
    About Page: GET /about - Returns "This is the About Page".
    Contact Page: GET /contact - Returns "This is the Contact Page".
    File Write: GET /file-write - Creates a file named demo.txt with "Write file has been created".