# ToDo-Node-API

This is a front-end agnostic RESTful API I built in Node to serve as a starting-off point for future APIs I plan on building.

Any modern front-end (even many ancient) technologies should be able to connect to this API and do what it needs to do.

Utilizes a free mongodb service via mlab.

## Installation

1. cd into the cloned directory.
2. npm install
3. nodemon

If you don't have nodemon installed: "npm install -g nodemon"

## Usage

This app runs on localhost:3000

'/api/todos/:uname' - GET - returns object of all todos with given username

'/api/todo/:id' - GET - returns a single todo object.

'/api/todo/' - POST - saves a todo object.  If object exists, it updates the todo.

'/api/todo' - DELETE - deletes a given todo by its id.

