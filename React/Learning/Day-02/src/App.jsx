import './App.css';
let App = () => {
  return <div>
    <h1 className="logo">Hello World!</h1>
    <p>This is my first React App.</p>
    <ul>
      <li>Learning react while comparing with js</li>
      <li>Here we can write JSX code</li>
      <li>JSX allows us to write HTML-like syntax in JavaScript</li>
    </ul>
    <p>Also the above code is transpiled to React.createElement calls.</p>
  </div>;
}

export default App;