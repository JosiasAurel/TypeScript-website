
// change body title
let title: HTMLTitleElement = document.createElement("title");

// set title innerText
title.innerText = "TypeScript Only Website";
let head: HTMLHeadElement = document.head;
console.log(document.head)
head.appendChild(title);

// document body
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
// console.log(body);


// create the website header

const header: HTMLElement = document.createElement("header");
header.innerText = "Hello world";

body.appendChild(header)

