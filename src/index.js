var body;
function initializeApp() {
    // change body title
    var title = document.createElement("title");
    // set title innerText
    title.innerText = "TypeScript Only Website";
    var head = document.head;
    console.log(document.head);
    head.appendChild(title);
    // document body
    body = document.getElementsByTagName("body")[0];
    // console.log(body);
    // initialization styles
    body.style.fontFamily = "monospace";
    body.style.margin = "0";
}
initializeApp();
// create the website header
var header = document.createElement("header");
// children of header element
// website title
var headerH2 = document.createElement("h2");
headerH2.innerText = "TypeScript Website";
// create nav links of the site
var nav = document.createElement("nav");
// nav children
var homeAnchor = document.createElement("a");
homeAnchor.innerText = "Home";
homeAnchor.style.textDecoration = "underline";
homeAnchor.style.color = "white";
var aboutAnchor = document.createElement("a");
aboutAnchor.innerText = "About";
aboutAnchor.style.textDecoration = "underline";
aboutAnchor.style.color = "white";
// add nav children
nav.appendChild(homeAnchor);
nav.appendChild(aboutAnchor);
// nav styles
headerH2.style.marginLeft = "1em";
nav.style.marginRight = "1em";
// add children of header element
header.appendChild(headerH2);
header.appendChild(nav);
// header styles
header.style.color = "white";
header.style.backgroundColor = "black";
header.style.display = "flex";
header.style.flexDirection = "row";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
// adding the created elements as children of body or so
body.appendChild(header);
/* import { createAndSetStyles } from "./utils";

console.log(createAndSetStyles(undefined, `hello world, it works`)) */ 
