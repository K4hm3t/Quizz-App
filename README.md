# React Quiz App

The React Quiz App is a web application that allows users to test their knowledge by answering a series of multiple-choice questions. The app provides an interactive and engaging quiz experience for users to challenge themselves and have fun while learning.

## Features

- Randomized Questions: The app fetches a set of random questions from an external API, ensuring a diverse and unique quiz experience with each playthrough.

- Multiple-Choice Answers: Users are presented with multiple-choice options for each question, making it easy to select their answers.

- Instant Feedback: After submitting their answers, users receive instant feedback on their performance, including the number of correct answers out of the total questions attempted.

- Result Evaluation: The app evaluates the user's performance and provides feedback based on the number of correct answers. The feedback message encourages and motivates users to improve their quiz-solving skills.

- Play Again: Users have the option to play the quiz again by clicking the "Play Again" button. This generates a new set of random questions, allowing for endless quiz enjoyment.

## Technologies Used

- React.js: The app is built using the React.js library, enabling the creation of interactive user interfaces and efficient component-based development.

- Axios: The Axios library is utilized to perform HTTP requests and fetch data from the external API.

- ShuffleArray Function: The app employs the ShuffleArray function to randomize the order of answers, ensuring that correct answers are not always presented first.

## Getting Started

To run the React Quiz App locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install` in the terminal.
4. Start the development server with `npm start`.
5. Open your web browser and visit `http://localhost:3000` to access the app.

## Components
The React Quiz App consists of the following components:

App: The main component that acts as the entry point for the application. It manages the state of the quiz, fetches questions from the API, handles user interactions, and renders other components based on the current state.

Start: This component is responsible for rendering the start screen of the quiz. It displays a welcome message and a "Play The Quiz" button to initiate the quiz.

Questions: This component renders the set of questions fetched from the API. It displays each question, along with multiple-choice answer options. Users can select their answers, which triggers the corresponding state update.

ShuffleArray: A helper function that shuffles the order of items in an array. This is used to randomize the order of answer options for each question, ensuring a varied quiz experience.

Result: This component is displayed after the user submits their answers. It calculates the number of correct answers and displays the result message based on the performance. It also provides a "Play Again" button to generate a new set of questions and restart the quiz.

Feel free to customize and modify the components according to your requirements.

## Contributing

Contributions to the React Quiz App are welcome! If you encounter any issues, have suggestions, or would like to add new features, please submit a pull request.
