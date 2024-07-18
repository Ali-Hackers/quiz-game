Here's a README file for your HTML and JavaScript Quiz Game:

---

# Quiz Game

This project is a simple quiz game built using HTML, CSS, and JavaScript. It displays a series of questions to the user, one at a time, with a timer for each question. Users can navigate through the questions and select their answers. The score is calculated based on the correctness of the answers.

## Table of Contents
- [Quiz Game](#quiz-game)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [JavaScript Quiz Class](#javascript-quiz-class)
  - [HTML Structure](#html-structure)
  - [License](#license)

## Features
- Timer for each question
- Score calculation based on correct answers
- Navigation between questions
- Display of the final score

## Project Structure
```
quiz-game/
├── index.html
├── src/
│   ├── quiz.css
│   └── quiz.js
└── README.md
```

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/quiz-game.git
    ```

2. Open the `index.html` file in a web browser to start the game.

## JavaScript Quiz Class

The `Quiz` class in `quiz.js` handles the functionality of the quiz game. Here’s a breakdown of the class:

### Constructor
- Initializes the quiz by setting up the initial variables and calling the `Init` method.

### Methods
- `Init()`: Initializes the quiz game, sets up event listeners, and starts the timer.
- `next()`: Moves to the next question.
- `prev()`: Moves to the previous question.
- `chek(e)`: Checks if the selected answer is correct and updates the score.
- `startTimeout()`: Starts the timer for the quiz.
- `stopTimeout()`: Stops the timer for the quiz.

## HTML Structure

The HTML file `index.html` contains the structure of the quiz game. Here's an overview:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Game</title>
    <link rel="stylesheet" href="../src/quiz.css">
</head>
<body>
    <div class="quiz-container">
        <div class="quiz-header">
            <h1>Quiz Game</h1>
            <div class="timer" data-totaltime="1">Time Left: <span class="time-left">00</span> seconds</div>
            <div class="score">Your Score: <span class="score-game">0</span> points</div>
        </div>
        <div class="quiz-game">
            <ul>
                <li class="quiz-option">
                    <div class="questions" data-score="10">What is the capital of France?</div>
                    <div class="options">
                        <div class="option" data-selected="true">Paris</div>
                        <div class="option">London</div>
                        <div class="option">Berlin</div>
                        <div class="option">Madrid</div>
                    </div>
                </li>
                <!-- Additional questions go here -->
            </ul>
        </div>
        <div class="controls">
            <button class="btn-next">Next</button>
            <button class="btn-prev">Previous</button>
        </div>
    </div>
    <script src="../src/quiz.js"></script>
</body>
</html>
```

### HTML Elements
- `quiz-container`: The main container for the quiz.
- `quiz-header`: Contains the quiz title, timer, and score display.
- `quiz-game`: Contains the list of questions and options.
- `controls`: Contains the navigation buttons for moving between questions.

### JavaScript
Include the JavaScript file at the end of the HTML file:

```html
<script src="../src/quiz.js"></script>
```

## License

This project is open-source and available under the MIT License. Feel free to use and modify the code as per your needs.

---

