# 📚 Gradebook App

A simple and elegant web application for calculating and displaying intern performance scores with automatic grade assignment.

## 🌟 Features

- **Automatic Average Calculation**: Calculates average scores for each intern based on multiple tasks
- **Grade Assignment**: Automatically assigns letter grades (A-F) based on performance
- **Beautiful UI**: Modern gradient design with smooth animations
- **Console Output**: Detailed results displayed in the browser console
- **Responsive Design**: Works seamlessly on all device sizes

## 📋 Project Structure

```
gradebook-app/
│
├── index.html          # Main HTML structure
├── index.css           # Styling and animations
└── index.js            # Core logic and calculations
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No additional installations required!

### Installation

1. Download or clone all three files (index.html, index.css, index.js)
2. Place them in the same folder
3. Open `index.html` in your web browser

## 💻 How to Use

1. **Open the Application**: Double-click on `index.html` to open it in your browser
2. **View Results**: Open the browser console to see the calculated results
   - **Windows/Linux**: Press `F12` or `Ctrl + Shift + J`
   - **Mac**: Press `Cmd + Option + J`
3. **Check Grades**: The console displays each intern's average score and assigned grade

## 📊 Grading System

| Score Range | Grade | Description |
|-------------|-------|-------------|
| 70% - 100% | A ⭐ | Excellent |
| 60% - 69% | B 👍 | Very Good |
| 50% - 59% | C ✓ | Good |
| 40% - 49% | D | Pass |
| 0% - 39% | F 🥸 | Fail |

## 👥 Sample Data

The application includes 5 interns with pre-populated scores:

- **Okorie Chigozie** (INT001)
- **Emma Johnson** (INT002)
- **Ayomide Balogun** (INT003)
- **Diana Prince** (INT004)
- **Eunice Smith** (INT005)

## 🔧 Customization

### Adding New Interns

Edit the `interns` array in `index.js`:

```javascript
{
  name: "Your Name",
  id: "INT006",
  scores: [85, 90, 88, 92, 87]
}
```

### Modifying Grading Criteria

Update the `getGrade()` function in `index.js` to change grade thresholds.

### Changing Colors

Modify the gradient colors in `index.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

