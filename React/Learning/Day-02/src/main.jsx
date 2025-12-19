import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import './index.css';

let root = ReactDOM.createRoot(document.getElementById("root"));

// Earlier we were rendering the App component like this:
// root.render(app());

// Now we render it like this:
root.render(<App />); // Using JSX syntax to render the App component

// Note: In JSX, component names must start with an uppercase letter. Otherwise, React will treat it as a regular HTML tag.