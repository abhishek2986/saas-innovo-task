## 📖 Project Overview

📖 Project Overview

A simple **Dynamic Form Builder** built using **HTML, CSS, and JavaScript**. The application allows users to dynamically generate form elements based on their input. Users can choose different field types, add labels, create select options, and generate a custom form without modifying the HTML.

────────────────────────────────────────────────────────

## ✨ Features

- Generate form elements dynamically
- Support for multiple input types:
  - Text
  - Email
  - Password
  - Number
  - Date
  - Checkbox
  - Radio Button
  - Textarea
  - Select Dropdown
  - Button
- Add custom labels for each field
- Create dropdowns with custom options
- Generate forms without editing HTML
- Display a success message when the generated button is clicked
- Simple and interactive user interface

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
- Event Handling
- Form Generation
- JavaScript `switch` Statement
- Loops (`for`)
- Working with User Input using `prompt()`
- Creating Input Fields Dynamically
- Creating Dropdowns and Options
- Handling Button Click Events

────────────────────────────────────────────────────────

## 🧪 Example Test Cases (for testing)

### Test Case 1: Registration Form

**Input**

- Number of Fields: 4
- Field 1: Text → Label: Name
- Field 2: Email → Label: Email
- Field 3: Password → Label: Password
- Field 4: Button → Text: Register

**Generated Output**

Name
[____________________]

Email
[____________________]

Password
[____________________]

[ Register ]

When the **Register** button is clicked, a success message is displayed.

### Test Case 2: Contact Form

**Input**

- Number of Fields: 5
- Field 1: Text → Label: Full Name
- Field 2: Email → Label: Email Address
- Field 3: Number → Label: Mobile Number
- Field 4: Textarea → Label: Message
- Field 5: Button → Text: Send Message

**Generated Output**

Full Name
[____________________]

Email Address
[____________________]

Mobile Number
[____________________]

Message
+-------------------------+
| |
| |
+-------------------------+

[ Send Message ]

### Test Case 3: Feedback Form

**Input**

- Number of Fields: 4
- Field 1: Text → Label: Name
- Field 2: Select → Options: Excellent, Good, Average, Poor
- Field 3: Textarea → Label: Feedback
- Field 4: Button → Text: Submit Feedback

**Generated Output**

Name
[____________________]

Rating
[ Excellent ▼ ]

Feedback
+-------------------------+
| |
| |
+-------------------------+

[ Submit Feedback ]

────────────────────────────────────────────────────────
