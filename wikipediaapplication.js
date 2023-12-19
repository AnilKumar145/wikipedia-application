let searchInputE1 = document.getElementById("searchInput");
let searchresultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createandAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    // 1. Div Container --- result-item
    let resultElementE1 = document.createElement("div");
    resultElementE1.classList.add("result-item");
    searchresultsE1.appendChild(resultElementE1);
    // 2. Anchor Title --- result-title
    let resulttitleE1 = document.createElement("a");
    resulttitleE1.classList.add("result-title");
    resulttitleE1.textContent = title;
    resulttitleE1.href = link;
    resulttitleE1.target = "_blank";
    resultElementE1.appendChild(resulttitleE1);


    // 3. Title break
    let titleBreakE1 = document.createElement("br");
    resultElementE1.appendChild(titleBreakE1);

    // 4. Anchor URL -- result-url

    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href = link;
    urlE1.target = "_blank";
    urlE1.textContent = link;
    resultElementE1.appendChild(urlE1);


    // 5. Line Break 

    let lineBreakE1 = document.createElement("br");
    resultElementE1.appendChild(lineBreakE1);


    // 6. paragraph Description --- line-description

    let descriptionE1 = document.createElement("p");
    descriptionE1.classList.add("link-description");
    descriptionE1.textContent = description;
    resultElementE1.appendChild(descriptionE1);
}

function displayResults(searchResults) {
    spinnerE1.classList.add("d-none");
    for (let result of searchResults) {
        createandAppendSearchResult(result);
    }
    createandAppendSearchResult(result);
}

function searchwikipedia(event) {
    if (event.key === "Enter") {
        spinnerE1.classList.toggle("d-none");
        searchresultsE1.textContent = "";
        let searchInput = searchInputE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }; +
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}
searchInputE1.addEventListener("keydown", searchwikipedia);