//Removed an unimportant comment
const heading2 = React.createElement("h1", {}, "Hello ReactJS");
console.log(heading2); //This is the react element which is an object

const heading3 = React.createElement("h2", {}, "Hello ReactJS2");
// Now we have to put this heading2,3 into a div container

const container = React.createElement("div", {}, [heading2,heading3]); //Creating container div


const root2 = ReactDOM.createRoot(document.getElementById("root"));

// React will override everything inside the div root {Interview question}
root2.render(container);