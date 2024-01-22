const API_KEY = "b2773ec0f1df4f8abf313a10dc6def39";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer = document.getElementById('cards-container');
    const template = document.getElementById('cards-template');

    cardsContainer.innerHTML='';

    articles.forEach(article => {
        if(!article.urlToImage) return;

        const clone = template.content.cloneNode(true);
        fillData(clone, article);
        cardsContainer.appendChild(clone);
    });
}

function fillData(clone, article){
    const newsImg = clone.querySelector('#news-img');
    const newsHead = clone.querySelector('#news-heading');
    const newsSrc = clone.querySelector('#news-source');
    const newsContent = clone.querySelector('#news-content');
    
    newsImg.src = article.urlToImage;
    newsHead.innerHTML = article.title;
    newsContent.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    })

    newsSrc.innerHTML = `${article.source.name}${date}`;

    clone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, '_blank');
    })
}

let currSelectedNav = null;
function onNavItemClick(query) {
    fetchNews(query);
    const navItem = document.getElementById(query);
    currSelectedNav?.classList.remove('active');
    currSelectedNav = navItem;
    currSelectedNav.classList.add('active');
}

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('news-input');

searchButton.addEventListener('click', () => {
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
    currSelectedNav?.classList.remove('active');
    currSelectedNav = null;
})

function reload(){
    window.location.reload();
}
