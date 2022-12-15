const numNode = document.getElementById("num");
const limitNode = document.getElementById("limit");
const btnNode = document.getElementById("btn");
const errorNode = document.getElementById("error");
const imagesNode = document.querySelector(".images");

let num;
let limit;


numNode.addEventListener("change", () => num = numNode.value);
limitNode.addEventListener("change", () => limit = limitNode.value);

btnNode.addEventListener("click", () => getImages(num, limit));

function getImages(num, limit) {
    if (num < 1 || num > 10) {
        if (limit < 1 || limit > 10) {
            showError(3);
        } else {
            showError(1);
        }
    } else if (limit < 1 || limit > 10) {
        showError(2);
    } else {
        errorNode.style.display = "none";
        console.log("success");
        fetch (`https://picsum.photos/v2/list?page=${num}&limit=${limit}`)
        .then((response => { return response.json(); }))
        .then((data) => { localStorage.setItem("imgArr", JSON.stringify(data)); renderImages(); })
        .catch((error) => { console.log("Error:", error)});
    }
}

const showError = (errorType) => {
    let erorrText;
    switch (errorType) {
        case 1:
            erorrText = "Номер страницы вне диапазона от 1 до 10";
            break;
        case 2:
            erorrText = "Лимит вне диапазона от 1 до 10";
            break;
        case 3:
            erorrText = "Номер страницы и лимит вне диапазона от 1 до 10";
            break;
    }
    errorNode.innerHTML = erorrText;
    errorNode.style.display = "block";
}

const renderImages = () => {
    let imgArr = JSON.parse(localStorage.getItem("imgArr"));
    let imagesHTML = "";

    imgArr.forEach(element => {
        imagesHTML += `<img src="${element.download_url}">`;
    });
    imagesNode.innerHTML = imagesHTML;
}

localStorage.getItem("imgArr") != null ? renderImages() : null;