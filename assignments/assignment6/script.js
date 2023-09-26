const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const displayAge = () => {
    let age1 = parseFloat(document.getElementById("txt-first-age").value);
    let age2 = parseFloat(document.getElementById("txt-second-age").value);
    let age3 = parseFloat(document.getElementById("txt-third-age").value);
    let name1 = document.getElementById("txt-first-name").value;
    let name2 = document.getElementById("txt-second-name").value;
    let name3 = document.getElementById("txt-third-name").value;
    let result1 = document.getElementById("result");

    if (!isNaN(age1) && !isNaN(age2) && !isNaN(age3)) {
        if (age1 >= age2 && age1 >= age3 && age2 >= age3) {
            result1.innerHTML = `Oldest to youngest: ${name1}, ${name2}, ${name3}`;
        } else if (age2 >= age1 && age2 >= age3 && age1 >= age3) {
            result1.innerHTML = `Oldest to youngest: ${name2}, ${name1}, ${name3}`;
        } else if (age3 >= age1 && age3 >= age2 && age1 >= age2) {
            result1.innerHTML = `Oldest to youngest: ${name3}, ${name1}, ${name2}`;
        } else if (age1 >= age2 && age1 >= age3 && age3 >= age2) {
            result1.innerHTML = `Oldest to youngest: ${name1}, ${name3}, ${name2}`;
        } else if (age2 >= age1 && age2 >= age3 && age3 >= age1) {
            result1.innerHTML = `Oldest to youngest: ${name2}, ${name3}, ${name1}`;
        } else if (age3 >= age1 && age3 >= age2 && age2 >= age1) {
            result1.innerHTML = `Oldest to youngest: ${name3}, ${name2}, ${name1}`;
        }
    } else {
        result1.innerHTML = `Please enter valid ages!`;
    }
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-show-data").onclick = displayAge;
};