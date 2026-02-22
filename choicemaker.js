const list = ["khaled's aztec project", "bobby's ai", "Anouncements"];
let choice = list[Math.floor(Math.random(list) * list.length)];
const heading = document.getElementById("lorem");
heading.textContent = choice;   
console.log(choice);

const links = ["index.html", "/alpha/index.html", "/projects/aztecproject/aztec.html"];

const anchor = document.getElementById("randomlink");

if (choice=="khaled's aztec project"){
  anchor.href=("https://port5.ie/projects/aztecproject/aztec");
}
else if (choice=="bobby's ai"){
  anchor.href=("https://port5.ie/alpha/");
}
else if (choice=="Anouncements"){
  anchor.href=("https://port5.ie/projects/Anouncement");
}