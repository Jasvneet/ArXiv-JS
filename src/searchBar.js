import { displayAuthorStats } from "./authors";

let previousState = null;


function storePreviousState() {
  previousState = document.body.innerHTML;
}


function restorePreviousState() {
  if (previousState) {
    document.body.innerHTML = previousState;
  }
}

export function handleSubmit(event) {
  event.preventDefault(); 

  const searchTerm = document.getElementById('search-input').value;
  const max = 20 


  fetch(`https://export.arxiv.org/api/query?search_query=ti:${searchTerm}&sortBy=submittedDate&sortOrder=descending&max_results=${max}`, {
    method: 'GET'
  })
    .then(response => response.text())
    .then(data => {
   
      const parser = new DOMParser();
      const xmlDoc1 = parser.parseFromString(data, 'text/xml');
      const totalResultsElement = xmlDoc1.getElementsByTagName('opensearch:totalResults')[0];
      const totalResult = parseInt(totalResultsElement.textContent);

      storePreviousState();
      document.body.innerHTML = '';

      const backButton = document.createElement('button');
      backButton.classList.add('back-button');
      backButton.textContent = 'Back to Search';
      backButton.addEventListener('click', restorePreviousState);

      document.body.appendChild(backButton);

      const resultsDiv = document.createElement('div');
      resultsDiv.id = 'results';
      resultsDiv.innerHTML = ''; 



      const totalResultsEle = document.createElement('h3');
      totalResultsEle.classList.add('results-heading')
      totalResultsEle.textContent = ` Most recently published articles of total: ${totalResult} articles`;
      resultsDiv.appendChild(totalResultsEle);

      const entries = xmlDoc1.getElementsByTagName('entry');
      
      function displayArticleDetails(authors, summary) {
        document.body.innerHTML = '';


      const backButton = document.createElement('button');
      backButton.classList.add('back-button');
      backButton.textContent = 'Back to Search';
      backButton.addEventListener('click', restorePreviousState);
      document.body.appendChild(backButton);

        const articleDetailsContainer = document.createElement('div');
        articleDetailsContainer.classList.add('article-details-container');
      
        const authorsList = document.createElement('ul');
        authorsList.classList.add('authors-list');
        authors.forEach(author => {
          const authorItem = document.createElement('li');
          const authorButton = document.createElement('button');
          authorButton.classList.add('author-button');

          authorButton.textContent = author;
          authorButton.addEventListener('click', () => displayAuthorStats(author));
      
          authorItem.appendChild(authorButton);
          authorsList.appendChild(authorItem);
        });
      
        const summaryHeading = document.createElement('h4');
        summaryHeading.textContent = 'Abstract:';

        const summaryElement = document.createElement('p');
        summaryElement.classList.add('summary')
        summaryElement.textContent = summary;

        const authorsHeading = document.createElement('h2');
        authorsHeading.classList.add('authors-heading')

        authorsHeading.textContent = 'Authors';
       
      
        
        articleDetailsContainer.appendChild(summaryHeading);
        articleDetailsContainer.appendChild(summaryElement);
        articleDetailsContainer.appendChild(authorsHeading);
        articleDetailsContainer.appendChild(authorsList);
      
        document.body.appendChild(articleDetailsContainer);
      }

      const articlesList = document.createElement('ul');
      articlesList.classList.add('articles-list');

      const authorsListContainer = document.createElement('div');
      authorsListContainer.classList.add('authors-list-container');

      

      for (let i = 0; i < entries.length; i++) {
        const title = entries[i].getElementsByTagName('title')[0].textContent;
        const authors = Array.from(entries[i].getElementsByTagName('author')).map(author => author.getElementsByTagName('name')[0].textContent);
        const summary = entries[i].getElementsByTagName('summary')[0].textContent;
      
        const articleTitleItem = document.createElement('li');
        const articleTitleButton = document.createElement('button');
        articleTitleButton.classList.add('article-button');

        articleTitleButton.textContent = title;
        articleTitleButton.addEventListener('click', () => displayArticleDetails(authors, summary));
      
        articleTitleItem.appendChild(articleTitleButton);
        articlesList.appendChild(articleTitleItem);
      }
      
      resultsDiv.appendChild(articlesList);
      // resultsDiv.appendChild(authorsListContainer);
      document.body.appendChild(resultsDiv);
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
    
    
}


      