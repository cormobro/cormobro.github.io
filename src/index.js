import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Create a custom cursor element
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
document.body.appendChild(customCursor);

// Update cursor position on mousemove
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});

// Toggle custom cursor visibility
const toggleCursorVisibility = (show) => {
  customCursor.style.display = show ? 'block' : 'none';
};

// Hide custom cursor when focusing or hovering over arrow elements
const updateArrowCursorListeners = () => {
  document.querySelectorAll('.arrow').forEach((arrow) => {
    arrow.addEventListener('mouseenter', () => toggleCursorVisibility(false));
    arrow.addEventListener('mouseleave', () => toggleCursorVisibility(true));
    arrow.addEventListener('focus', () => toggleCursorVisibility(false));
    arrow.addEventListener('blur', () => toggleCursorVisibility(true));
  });
};

updateArrowCursorListeners();
