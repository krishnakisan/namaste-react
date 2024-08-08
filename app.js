// const header = React.createElement("h1",{className : "heading", id : "abc"}, "Hello React");
// console.log(header);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// Create Nested elements
/*
<div id = "parent">
    <div id = "child">
        <h1>Hello React</h1>
        <h2>Hello React1</h1>
    </div>
</div>
*/
const parent = 
React.createElement("div", {id : "parent"},
React.createElement("div", {id : "child"},
[
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h2", {}, "Hello React1"),
]

)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

