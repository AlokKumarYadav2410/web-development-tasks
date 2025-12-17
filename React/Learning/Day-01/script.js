import parent from "./scripts/parent.js";

let container = document.querySelector(".container");
console.log(React);

let h1 = React.createElement("h1", null, "Created using React");
let h2 = React.createElement("h2", null, "Another Element using React");

let div = React.createElement("div", {className: 'innerDiv'}, [h1, h2, parent()])

let root = ReactDOM.createRoot(container);
root.render(div);