

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

// add nav children
nav.appendChild(homeAnchor);
nav.appendChild(aboutAnchor);

// add children of header element
header.appendChild(headerH2);
header.appendChild(nav);


// adding the created elements as children of body or so
body.appendChild(header);

