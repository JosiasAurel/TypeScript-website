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
// add children of header element
header.appendChild(headerH2);
header.appendChild(nav);
// adding the created elements as children of body or so
body.appendChild(header);
