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
aboutAnchor.style.marginLeft = "1em";
// add nav children
nav.appendChild(homeAnchor);
nav.appendChild(aboutAnchor);
// nav styles
headerH2.style.marginLeft = "1em";
nav.style.padding = "0 2em 0 2em";
nav.style.marginRight = "1em";
nav.style.display = "flex";
nav.style.flexDirection = "row";
nav.style.justifyContent = "space-evenly";
nav.style.alignItems = "center";
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
var mainSection = document.createElement("section");
mainSection.style.display = "flex";
mainSection.style.flexDirection = "column";
mainSection.style.justifyContent = "center";
mainSection.style.alignItems = "center";
// main presentation on the body
var main = document.createElement("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "space-evenly";
main.style.alignItems = "center";
main.style.margin = "4em 0 0 0";
main.style.maxWidth = "600px";
// main children
var mainH1 = document.createElement("h1");
mainH1.innerText = "TypeScript Rocks!!";
mainH1.style.textAlign = "center";
var mainP = document.createElement("p");
mainP.innerText = "This website is written entirely in TypeScript and compiled to JavaScript.";
mainP.style.fontSize = "2em";
mainP.style.textAlign = "center";
var mainH2 = document.createElement("h2");
mainH2.innerText = "This is really nice !!";
mainH2.style.fontSize = "5em";
mainH2.style.textAlign = "center";
main.appendChild(mainH1);
main.appendChild(mainP);
main.appendChild(mainH2);
// add main element to mainSection
mainSection.appendChild(main);
var techSectionContainer = document.createElement("div");
techSectionContainer.style.display = "flex";
techSectionContainer.style.justifyContent = "center";
techSectionContainer.style.alignItems = "center";
var techSection = document.createElement("section");
techSection.style.display = "grid";
techSection.style.gridTemplateColumns = "1fr 1fr";
techSection.style.gridTemplateRows = "1fr 1fr";
// i want to make 4 tech cards listing the tech i used
// first tech card
var techCard = document.createElement("div");
techCard.style.display = "flex";
techCard.style.alignItems = "center";
techCard.style.backgroundColor = "#9319d86e";
techCard.style.borderRadius = "6px";
techCard.style.maxWidth = "250px";
// children of techCard
var span = document.createElement("span");
// spanChild
var spanH2 = document.createElement("h2");
spanH2.innerText = "TS";
var techP = document.createElement("p");
techP.innerText = "TypeScript";
techP.style.margin = "0 0 0 1em";
span.appendChild(spanH2);
techCard.appendChild(span);
techCard.appendChild(techP);
// second tech card
var techCard2 = document.createElement("div");
techCard2.style.display = "flex";
techCard2.style.alignItems = "center";
techCard2.style.backgroundColor = "#9319d86e";
techCard2.style.borderRadius = "6px";
techCard2.style.maxWidth = "250px";
// children of techCard2
var span = document.createElement("span");
// spanChild
var spanH2 = document.createElement("h2");
spanH2.innerText = "NodeJS";
var techP = document.createElement("p");
techP.innerText = "NodeJS";
techP.style.margin = "0 0 0 1em";
span.appendChild(spanH2);
techCard2.appendChild(span);
techCard2.appendChild(techP);
// third tech card
var techCard3 = document.createElement("div");
techCard3.style.display = "flex";
techCard3.style.alignItems = "center";
techCard3.style.backgroundColor = "#9319d86e";
techCard3.style.borderRadius = "6px";
techCard3.style.maxWidth = "250px";
// children of techCard3
var span = document.createElement("span");
// spanChild
var spanH2 = document.createElement("h2");
spanH2.innerText = "HTML";
var techP = document.createElement("p");
techP.innerText = "HTML";
techP.style.margin = "0 0 0 1em";
span.appendChild(spanH2);
techCard3.appendChild(span);
techCard3.appendChild(techP);
// fourth tech card
var techCard4 = document.createElement("div");
techCard4.style.display = "flex";
techCard4.style.alignItems = "center";
techCard4.style.backgroundColor = "#9319d86e";
techCard4.style.borderRadius = "6px";
techCard4.style.maxWidth = "250px";
// children of techCard4
var span = document.createElement("span");
// spanChild
var spanH2 = document.createElement("h2");
spanH2.innerText = "JS";
var techP = document.createElement("p");
techP.innerText = "JavaScript";
techP.style.margin = "0 0 0 1em";
span.appendChild(spanH2);
techCard4.appendChild(span);
techCard4.appendChild(techP);
// children of tech section
techSection.appendChild(techCard);
techSection.appendChild(techCard2);
techSection.appendChild(techCard3);
techSection.appendChild(techCard4);
[techCard, techCard2, techCard3, techCard4].forEach(function (tc) {
    tc.style.margin = "2em";
    tc.style.padding = "1em";
});
techSectionContainer.appendChild(techSection);
// adding the created elements as children of body or so
body.appendChild(header);
body.appendChild(mainSection);
body.appendChild(techSectionContainer);
