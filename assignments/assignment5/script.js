const showSharty = () => {
    document.getElementById("sharty").classList.remove("hide");
}

const hideSharty = () => {
    document.getElementById("sharty").classList.add("hide");
}

const moveCircle = () => {
    document.getElementById("circle").classList.add("move-circle");
}

window.onload = () => {
    document.getElementById("button-show").onclick = showSharty;
    document.getElementById("button-hide").onclick = hideSharty;
    document.getElementById("button-animate").onclick = moveCircle;
}