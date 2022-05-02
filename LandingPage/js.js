"strict mode";
let hamburger = document.getElementById("nav-hamburger");
let hamburgerMenu = document.getElementById("hamburger-menu");
let navIsClosed = true;
let sectionGifs = document.getElementById("section-gifs");
hamburger.onclick = function () {
  if (navIsClosed) {
    hamburgerMenu.style.display = "none";
    navIsClosed = false;
  } else {
    hamburgerMenu.style.display = "block";
    navIsClosed = true;
  }
};
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
let imageOffset = 0;
let giphyAPIKey = "6Wrq180Mg2AzSNrXAe9bM7eEj1Gl2RGe";
let apiQuery = "cat";
let imagesLimit = 3;
let input = document.getElementById("input-gif").value;

async function buttonNextImagesClick() {
  let giphyAPIUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${apiQuery}&limit=${imagesLimit}&offset=${imageOffset}&rating=g&lang=en`;
  imageOffset += imagesLimit;
  console.log(imageOffset);
  let rawData = await getJsonImages(giphyAPIUrl);
  let itemsResult = dataPrepare(rawData);
  displayItems(itemsResult);
}

async function buttonPreviousImagesClick() {
  imageOffset -= imagesLimit;
  let giphyAPIUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${apiQuery}&limit=${imagesLimit}&offset=${imageOffset}&rating=g&lang=en`;

  console.log(imageOffset);
  let rawData = await getJsonImages(giphyAPIUrl);
  let itemsResult = dataPrepare(rawData);
  displayItems(itemsResult);
}

async function getJsonImages(url) {
  let apiQueryResult = fetch(url);
  let apiQueryResultData = await apiQueryResult.then((data) => data.json());
  return apiQueryResultData.data;
}

function displayItems(data) {
  sectionGifs.innerHTML = "";
  for (i = 0; i < data.size; i++) {
    let img = document.createElement("img");
    let imgDescription = document.createElement("p");
    img.src = data.get(i)[1];
    console.log(img.src);
    imgDescription.innerHTML = data.get(i)[0];
    console.log(imgDescription);
    sectionGifs.appendChild(img);
    sectionGifs.appendChild(imgDescription);
  }
}
function dataPrepare(data) {
  let resultCollection = new Map();
  for (i = 0; i < data.length; i++) {
    let item = data[i];
    let imageTitle = item.title;
    let imgUrl = item.images.fixed_height.url;
    resultCollection.set(i, [imageTitle, imgUrl]);
  }
  return resultCollection;
}
