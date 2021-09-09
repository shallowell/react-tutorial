export async function fetchImages(query) {
    const response = await fetch (
        `https://pixabay.com/api/?key=23251795-ed73b570d3112136617308b8f&q=${query}`
    );

    const data = await response.json();
    const pictureUrls = [...data.hits].map(value => value.webformatURL)
    return pictureUrls;
}