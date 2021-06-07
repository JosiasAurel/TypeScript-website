

let body: HTMLBodyElement;

function initializeApp(): void {
        // change body title
    let title: HTMLTitleElement = document.createElement("title");

    // set title innerText
    title.innerText = "TypeScript Only Website";
    let head: HTMLHeadElement = document.head;
    console.log(document.head)
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

const header: HTMLElement = document.createElement("header");

// children of header element

// website title
let headerH2: HTMLHeadingElement = document.createElement("h2");
headerH2.innerText = "TypeScript Website";

// create nav links of the site
let nav: HTMLElement = document.createElement("nav");

// nav children
let homeAnchor: HTMLAnchorElement = document.createElement("a");
homeAnchor.innerText = "Home";
homeAnchor.style.textDecoration = "underline";
homeAnchor.style.color = "white";
let aboutAnchor: HTMLAnchorElement = document.createElement("a");
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

let mainSection: HTMLElement = document.createElement("section");
mainSection.style.display = "flex";
mainSection.style.flexDirection = "column";
mainSection.style.justifyContent = "center";
mainSection.style.alignItems = "center";

// main presentation on the body

let main: HTMLElement = document.createElement("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "space-evenly";
main.style.alignItems = "center";
main.style.margin = "4em 0 0 0";
main.style.maxWidth = "600px";

// main children


let mainH1: HTMLHeadingElement = document.createElement("h1");
mainH1.innerText = "TypeScript Rocks!!";
mainH1.style.textAlign = "center";

let mainP: HTMLParagraphElement = document.createElement("p");
mainP.innerText = "This website is written entirely in TypeScript and compiled to JavaScript."
mainP.style.fontSize = "2em";
mainP.style.textAlign = "center";

let mainH2: HTMLHeadingElement = document.createElement("h2");

main.appendChild(mainH1);
main.appendChild(mainP);

// add main element to mainSection
mainSection.appendChild(main);

// adding the created elements as children of body or so
body.appendChild(header);
body.appendChild(mainSection);


