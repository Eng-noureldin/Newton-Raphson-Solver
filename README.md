# 🧮 Newton-Raphson Solver

A simple and effective web-based calculator that finds the roots of nonlinear equations using the Newton-Raphson numerical method.

This project was built as a practical application of numerical analysis concepts, focusing on parsing user-input equations (as strings) into computable mathematical functions.

It leverages the powerful **`math.js`** library to parse expressions, symbolically calculate first and second derivatives, and apply the iterative Newton's algorithm step-by-step.

## 📸 Screenshot

![Project Screenshot](screenshot.png)

*(Important: Replace the line above with an actual screenshot of your project!)*

---

## ✨ Key Features

* **Root Finding:** Input any nonlinear equation (e.g., `x^3 - x - 1` or `exp(-x) - x`) and find its root.
* **Smart Iteration (`while` loop):** Uses a `while` loop that automatically stops when the desired precision is met (when the error `diff < 1e-8`).
* **Step-by-Step Table:** Displays each iteration in an organized table, showing the step number (`n`) and the corresponding value (`x`).
* **Automatic Derivatives:** Uses `math.js` to automatically calculate the first derivative ($f'(x)$) and the second derivative ($f''(x)$) with no manual input.
* **Convergence Check:** An extra utility to check the "Condition of Convergence" ($|\frac{f(x)f''(x)}{[f'(x)]^2}| < 1$) to validate the quality of the initial guess.
* **Safe & Robust:** Includes checks for division-by-zero in both the main solver and the convergence checker.

---

## 🛠️ Technologies Used

* **HTML5:** For the page structure.
* **CSS3 (Bootstrap 4):** For styling and responsiveness.
* **JavaScript (ES6+):** For all application logic.
* **`math.js`:** The core math library for expression parsing and symbolic differentiation.

---

## 🚀 How to Use

This project requires no installation or build steps.

1.  Clone or download this repository.
2.  Open the `index.html` file in any modern web browser.
3.  **Enter your equation** (using `x` as the variable, e.g., `x^2 - 4`).
4.  **Enter your Initial Guess** (e.g., `1`).
5.  Click **"submit"** to see the steps and the solution, or click **"Check the initial guess"** to validate your starting point.
