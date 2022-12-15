const btn = document.getElementById("submit");
const error = document.querySelector("p");
const imagesDiv = document.querySelector(".images");

btn.addEventListener("click", () => useRequest());

function useRequest() {
    const limit = document.querySelector("input").value;

    if (limit < 1 || limit > 10) {
        error.classList.remove("hidden");
    } else {
        imagesDiv.innerHTML = "";
        error.classList.add("hidden");

        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
            console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`);
            renderImages(xhr.response);
        };
    
        xhr.onerror = function() {
            console.log('Ошибка запроса');
          };
    
        xhr.open("get", `https://picsum.photos/v2/list?limit=${limit}`, true);
    
        xhr.send();

    }
};

const renderImages = (response) => {
    const images = JSON.parse(response);

    let imagesBlock = "";
    images.forEach(element => {
        imagesBlock += `
            <img src=${element["download_url"]}>
        `;
    });

    imagesDiv.innerHTML = imagesBlock;
};


