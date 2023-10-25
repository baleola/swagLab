# README for Ceros Task

This README provides an overview and instructions for setting up and running this project. For the task that I was given I chose to go with Typescript and Cypress.
Cypress is a popular end-to-end testing framework for web applications, and using TypeScript with Cypress can help enhance the development experience by adding static typing.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- **Node.js**: Yarn relies on Node.js, so make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **Yarn**: If you don't already have Yarn installed, you can install it using npm with the following command:

   ```bash
   npm install -g yarn
   ```

   Or, you can follow the instructions on the [Yarn website](https://classic.yarnpkg.com/en/docs/install/) for installation.

### Setting Up and Running the Project with Yarn

1. **Clone the Repository**: Clone the repository to your local machine.

2. **Install Dependencies**: Navigate to the project directory in your terminal and use Yarn to install project dependencies:

   ```bash
   yarn install
   ```

### Running Scripts with Yarn

- **`cy:test`**: Run Cypress tests in headless mode.

  ```bash
  yarn cy:test
  ```

- **`cytest-headed`**: Run Cypress tests with the browser UI opened.

  ```bash
  yarn cytest-headed
  ```

- **`cy:open`**: Open the Cypress Test Runner.

  ```bash
  yarn cy:open
  ```