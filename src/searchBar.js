import { displayAuthorStats } from "./authors";

export function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  const searchTerm = document.getElementById('search-input').value;
  const max = 10 // Get the search term

  // Send a request to the arXiv API
  fetch(`https://export.arxiv.org/api/query?search_query=ti:${searchTerm}&sortBy=submittedDate&sortOrder=descending&max_results=${max}`, {
    method: 'GET'
  })
    .then(response => response.text())
    .then(data => {
      // Process the response data
      const parser = new DOMParser();
      const xmlDoc1 = parser.parseFromString(data, 'text/xml');
      const totalResultsElement = xmlDoc1.getElementsByTagName('opensearch:totalResults')[0];
      const totalResult = parseInt(totalResultsElement.textContent);
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = ''; // Clear previous results

      const totalResultsEle = document.createElement('h3');
      totalResultsEle.textContent = ` Showing only most recent of total: ${totalResult}  articles`;
      resultsDiv.appendChild(totalResultsEle);

      const entries = xmlDoc1.getElementsByTagName('entry');
      
      function displayArticleDetails(authors, summary) {
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
      
        // Clear previous article details
        const existingArticleDetailsContainer = document.querySelector('.article-details-container');
        if (existingArticleDetailsContainer) {
          existingArticleDetailsContainer.remove();
        }
      
        const resultsDiv = document.getElementById('results');
        resultsDiv.appendChild(articleDetailsContainer);
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
      resultsDiv.appendChild(authorsListContainer);
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
    
    
}

// for (let i = 0; i < entries.length; i++) {
  //   const title = entries[i].getElementsByTagName('title')[0].textContent;
  //   const authors = Array.from(entries[i].getElementsByTagName('author')).map(author => author.getElementsByTagName('name')[0].textContent);


  //   const articleTitleItem = document.createElement('li');
  //   const articleTitleButton = document.createElement('button');
  //   articleTitleButton.textContent = title;
  //   articleTitleButton.addEventListener('click', () => displayAuthors(authors, articleTitleItem));

  //   articleTitleItem.appendChild(articleTitleButton);
  //   articlesList.appendChild(articleTitleItem);
    
  // }



    
    // function displayAuthors(authors, container) {
      //   container.innerHTML = ''; // Clear previous authors

      //   const authorsList = document.createElement('ul');
      //   authors.forEach(author => {
      //     const authorItem = document.createElement('li');
      //     authorItem.textContent = author;
      //     authorsList.appendChild(authorItem);
      //   });
    
 // function displayAuthors(authors, container) {
      //   container.innerHTML = ''; // Clear previous authors
  
      //   const authorsList = document.createElement('ul');
      //   authorsList.classList.add('authors-list');
      //   authors.forEach(author => {
      //     const authorItem = document.createElement('li');
      //     const authorButton = document.createElement('button');
      //     authorButton.textContent = author;
      //     authorButton.addEventListener('click', () => displayAuthorStats(author));
  
      //     authorItem.appendChild(authorButton);
      //     authorsList.appendChild(authorItem);
      //   });
  
      //   container.appendChild(authorsList);
      // }
      