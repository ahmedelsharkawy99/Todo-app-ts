# React TypeScript Todo App with Context API

This project is a simple todo app built using ReactJS, TypeScript, and Context API. It allows users to add and delete tasks in a todo list.

## Getting Started

To run this project on your local machine, you will need to have Node.js and NPM installed. Once you have installed these, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project's dependencies.
4. Run `npm start` to start the development server. This will open the application in your default browser.

## Features

This application has the following features:

- Add task: users can add a new task to the todo list.
- Delete task: users can delete a task from the todo list.

## Technologies Used

The following technologies were used to build this application:

- ReactJS: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Context API: A feature of React that allows for global state management.
- CSS: Used for styling the user interface of the todo app.

## Directory Structure

The project directory is structured as follows:

```
public/
src/
  components/
    NewTodo/
    TodoItem/
    Todos/
  context/
    todos-context.tsx
  models/
    todo.ts
  App.tsx
  index.tsx
README.md
package.json
tsconfig.json
```

- The `public` directory contains the public assets of the application, such as the HTML file and favicon.
- The `src` directory contains the source code of the application.
- The `components` directory contains the React components used in the application.
- The `context` directory contains the context used for global state management.
- The `App.tsx` file is the main component that renders the todo app.
- The `index.tsx` file is the entry point of the application.
- The `models` directory contains the TypeScript types used in the application.
