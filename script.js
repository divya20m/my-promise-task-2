
function fetchShibeImage(count = 1, urls = true, httpsUrls = true) {
    const apiUrl = `http://shibe.online/api/shibes?count=${count}&urls=${urls}&httpsUrls=${httpsUrls}`;
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}


function displayShibeImages(images) {
    const dataContainer = document.querySelector(".data-container");
    dataContainer.innerHTML = '';

    images.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.classList.add("shibe-image");

        dataContainer.appendChild(imgElement);
    });
}


function fetchNewShibeImages() {
    const count = Math.floor(Math.random() * 100) + 1;
    const urls = true;
    const httpsUrls = true;

    fetchShibeImage(count, urls, httpsUrls)
        .then(images => displayShibeImages(images))
        .catch(error => console.error("Error fetching Shibe images:", error));
}


const fetchButton = document.getElementById("fetch-btn");
fetchButton.addEventListener("click", fetchNewShibeImages);

fetchNewShibeImages();
