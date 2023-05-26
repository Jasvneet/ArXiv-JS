// import searchBar from './src/searchBar.js';
// import api from './src/api.js'

document.addEventListener("DOMContentLoaded", () => {
    console.log("its working");
    const categoryButtonsContainer = document.getElementById('category-buttons');
    const articleListContainer = document.getElementById('article-list');
  
    // Array of categories
    const categories = ['physics', 'mathematics', 'computer science']; // Add your desired categories here
  
    // Create buttons for each category
    categories.forEach(category => {
      const button = document.createElement('button');
      button.innerText = category;
      button.addEventListener('click', () => {
        fetchArticles(category)
        .then(articles => displayArticles(articles));
    });
    categoryButtonsContainer.appendChild(button);
  });

  // Fetch articles for a specific category
  function fetchArticles(category) {
    return fetch(`/articles/${category}`)
      .then(response => response.json())
      .then(data => data.articles)
      .catch(error => {
        console.error(error);
        return [];
      });
  }

  // Display articles in the article list
  function displayArticles(articles) {
    articleListContainer.innerHTML = '';

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');

      const titleElement = document.createElement('h2');
      titleElement.textContent = article.title;

      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${article.author}`;

      const abstractElement = document.createElement('p');
      abstractElement.textContent = `Abstract: ${article.abstract}`;

      articleElement.appendChild(titleElement);
      articleElement.appendChild(authorElement);
      articleElement.appendChild(abstractElement);

      articleListContainer.appendChild(articleElement);
    });
  }
});