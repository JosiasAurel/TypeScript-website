// change body title
var title = document.createElement("title");
// set title innerText
title.innerText = "TypeScript Only Website";
var head = document.head;
console.log(document.head);
head.appendChild(title);
// document body
var body = document.getElementsByTagName("body")[0];
// console.log(body);
// create the website header
var header = document.createElement("header");
header.innerText = "Hello world";
body.appendChild(header);
