const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    clearImages();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm }};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data);
    rates(res.data)
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement("img");
            img.src = show.show.image.medium;
            document.body.append(img);
        }
    }
}

const clearImages = () => {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].remove();
    }
};

// const rates = (shows) => {
//     for (let rate of shows) {
//         const rating = document.createElement("div");
//         rating.innerText = rate.show.rating.average;
//         document.body.append(rating);
//     }
// }