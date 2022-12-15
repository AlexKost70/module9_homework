const widthNode = document.getElementById("width");
const heightNode = document.getElementById("height");
const btnNode = document.getElementById("btn");
const hiddenNode = document.querySelector(".hidden");
const imgBlock = document.querySelector(".img");

let width;
let height;



widthNode.addEventListener("change", (event) => {
    width = event.target.value;
});

heightNode.addEventListener("change", (event) => {
    height = event.target.value;
});

btnNode.addEventListener("click", getPicture);



function getPicture() {
    if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
        hiddenNode.classList.add("hidden");
        fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => { return response })
        .then((data) => { renderPicture(data.url) })
        .catch((error) => { console.log("Error:", error) }); 
    } else {
        hiddenNode.classList.remove("hidden");
    }

}

renderPicture = (url) => imgBlock.innerHTML = `<img src="${url}">`;