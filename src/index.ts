

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

function HomePage(): void {
    

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
aboutAnchor.innerText = "ShowImage";
aboutAnchor.style.textDecoration = "underline";
aboutAnchor.style.color = "white";
aboutAnchor.style.marginLeft = "1em";

aboutAnchor.addEventListener("click", showCoolImage)

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
mainH2.innerText = "This is really nice !!";
mainH2.style.fontSize = "5em";
mainH2.style.textAlign = "center";

main.appendChild(mainH1);
main.appendChild(mainP);
main.appendChild(mainH2);

// add main element to mainSection
mainSection.appendChild(main);

let techSectionContainer: HTMLDivElement = document.createElement("div");
techSectionContainer.style.display = "flex";
techSectionContainer.style.justifyContent = "center";
techSectionContainer.style.alignItems = "center";

let techSection: HTMLElement = document.createElement("section");
techSection.style.display = "grid";
techSection.style.gridTemplateColumns = "1fr 1fr";
techSection.style.gridTemplateRows = "1fr 1fr";

// i want to make 4 tech cards listing the tech i used

// first tech card
let techCard: HTMLDivElement = document.createElement("div");

// children of techCard
let span: HTMLSpanElement = document.createElement("span");
// spanChild
let spanH2: HTMLHeadingElement = document.createElement("h2");
spanH2.innerText = "TS"
let techP: HTMLParagraphElement = document.createElement("p");
techP.innerText = "TypeScript";
techP.style.margin = "0 0 0 1em";

span.appendChild(spanH2);
techCard.appendChild(span);

techCard.appendChild(techP);

// second tech card
let techCard2: HTMLDivElement = document.createElement("div");

// children of techCard2
let span_: HTMLSpanElement = document.createElement("span");
// spanChild
let spanH2_: HTMLHeadingElement = document.createElement("h2");
spanH2_.innerText = "NodeJS"
let techP_: HTMLParagraphElement = document.createElement("p");
techP_.innerText = "NodeJS";
techP_.style.margin = "0 0 0 1em";

span_.appendChild(spanH2_);
techCard2.appendChild(span_);

techCard2.appendChild(techP_);

// third tech card
let techCard3: HTMLDivElement = document.createElement("div");

// children of techCard3
let span__: HTMLSpanElement = document.createElement("span");
// spanChild
let spanH2__: HTMLHeadingElement = document.createElement("h2");
spanH2__.innerText = "HTML"
let techP__: HTMLParagraphElement = document.createElement("p");
techP__.innerText = "HTML";
techP__.style.margin = "0 0 0 1em";

span__.appendChild(spanH2__);
techCard3.appendChild(span__);

techCard3.appendChild(techP__);

// fourth tech card
let techCard4: HTMLDivElement = document.createElement("div");

// children of techCard4
let span___: HTMLSpanElement = document.createElement("span");
// spanChild
let spanH2___: HTMLHeadingElement = document.createElement("h2");
spanH2___.innerText = "JS"
let techP___: HTMLParagraphElement = document.createElement("p");
techP___.innerText = "JavaScript";
techP___.style.margin = "0 0 0 1em";

span___.appendChild(spanH2___);
techCard4.appendChild(span___);

techCard4.appendChild(techP___);

// children of tech section
techSection.appendChild(techCard);
techSection.appendChild(techCard2);
techSection.appendChild(techCard3);
techSection.appendChild(techCard4);

let techCards = [techCard, techCard2, techCard3, techCard4];
techCards.forEach(tc => {
    tc.style.margin = "2em";
    tc.style.padding = "1em";
    tc.style.display = "flex";
    tc.style.alignItems = "center";
    tc.style.backgroundColor = "#9319d86e";
    tc.style.borderRadius = "6px";
    tc.style.maxWidth = "250px";
});

[span, span_, span__, span___].forEach(sp => {
    sp.style.padding = "1em";
    sp.style.backgroundColor = "#452af1b0";
    sp.style.borderRadius = "6px";
    sp.style.width = "50px";
    sp.style.height = "50px";
    sp.style.display = "flex";
    sp.style.alignItems = "center";
    sp.style.justifyContent = "center";
})

techSectionContainer.appendChild(techSection);

// I want to tell you Happy monday/tuesday... depending on the day

const daysMap: any = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

const monthsMap: any = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

let currentDay: number = new Date().getDay();
let currentYear: number = new Date().getFullYear();
let currentDate: number = new Date().getDate();
let currentMonth: number = new Date().getMonth();

let footer: HTMLElement = document.createElement("footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";

// footer children
let copy: HTMLParagraphElement = document.createElement("p");
copy.innerHTML = `Welcome buddy, no strings attached. Happy ${daysMap[currentDay]}, ${currentDate} ${monthsMap[currentMonth]} ${currentYear}. <br /> Josias Aurel.`;
copy.style.textAlign = "center";
footer.appendChild(copy);

// adding the created elements as children of body or so
body.appendChild(header);
body.appendChild(mainSection);
body.appendChild(techSectionContainer);
body.appendChild(footer);


}



// some other page function to replace body children with a large image

function showCoolImage(): void {

    let newBody: HTMLDivElement = document.createElement("div");
    newBody.style.width = "100vw";
    newBody.style.height = "100vh";
    newBody.style.zIndex = "20";
    newBody.style.position = "fixed";
    newBody.style.top = "0";

    // the image container
    let image: HTMLImageElement = document.createElement("img");
    image.src = "./assets/plant.jpeg";
    image.style.maxWidth = "300px";
    
    newBody.appendChild(image);
    body.appendChild(newBody);
}

HomePage();