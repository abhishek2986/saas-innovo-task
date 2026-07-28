## 📖 Project Overview

A simple **Dynamic Form Builder** built using **HTML, CSS, and JavaScript**. The application allows users to create form elements dynamically by entering the number of elements and selecting the type of element through prompts. Labels and various input fields are generated dynamically without modifying the HTML.

────────────────────────────────────────────────────────

## ✨ Features

- Create form elements dynamically
- Generate labels
- Generate different input fields
- Support for text, email, password, number, radio, checkbox, and other input types
- Create radio buttons with custom name and value
- Create checkboxes with custom values
- Prevent page reload on form submission

────────────────────────────────────────────────────────

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

────────────────────────────────────────────────────────

## 📂 Project Structure

dynamic-form-builder/
│── index.html
│── README.md
│── script.js
└── style.css

────────────────────────────────────────────────────────

## 🎯 Learning Outcomes

- DOM Manipulation
- Dynamic Element Creation
- Forms and Input Elements
- Event Handling
- User Input using `prompt()`
- Conditional Statements
- HTML Form Handling
- JavaScript Functions

────────────────────────────────────────────────────────

## 📝 Example (for testing)

Number of elements: 23

Element 1: label
Label Text: Name

Element 2: input
Input Type: text

Element 3: label
Label Text: Password

Element 4: input
Input Type: password

Element 5: label
Label Text: Email

Element 6: input
Input Type: email

Element 7: label
Label Text: Age

Element 8: input
Input Type: number

Element 9: label
Label Text: Gender

Element 10: input
Input Type: radio
Name: gender
Value: male

Element 11: input
Input Type: radio
Name: gender
Value: female

Element 12: label
Label Text: Skills

Element 13: input
Input Type: checkbox
Value: HTML

Element 14: input
Input Type: checkbox
Value: CSS

Element 15: label
Label Text: Upload

Element 16: input
Input Type: file

Element 17: label
Label Text: Birthday

Element 18: input
Input Type: date

Element 19: label
Label Text: Favorite Color

Element 20: input
Input Type: color

Element 21: label
Label Text: Progress

Element 22: input
Input Type: range

Element 23: input
Input Type: submit

────────────────────────────────────────────────────────

## ex: we can create this type of form :

<form>
  Name:
  <input type="text">

  Password:
  <input type="password">

  Email:
  <input type="email">

  Age:
  <input type="number">

  Gender:
  <input type="radio" name="gender" value="malef"> Male
  <input type="radio" name="gender" value="female"> Female

  Skills:
  <input type="checkbox" value="HTML"> HTML
  <input type="checkbox" value="CSS"> CSS

  Upload:
  <input type="file">

  Birthday:
  <input type="date">

  Favorite Color:
  <input type="color">

  Progress:
  <input type="range">

  <input type="submit">
</form>

────────────────────────────────────────────────────────