//const add = (a, b) => a+b;
//console.log(add(5, 6));

//const square = a => a*a;
//console.log(square(5));

//const hello = () => console.log("hello!");
//hello();

//const helloSpecific = userName => console.log("Hello "+userName+"!");
//helloSpecific("aidan");

/* Not okay to change a constant ie:
const myName = "Aidan";
myName = "Smith"; */

/*const helloFullName = (firstName, LastName) => {
    console.log("Hello "+firstName+" "+LastName);
    console.log("you're awesome");
};
helloFullName("aidan", "macklen");*/

const animate = () => {
    document.getElementById("square").classList.add("move-square");
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " +firstName+"!");
}

window.onload = () => {
    document.getElementById("button-click").onclick = animate;
    document.getElementById("button-show-name").onclick = displayName;
}
