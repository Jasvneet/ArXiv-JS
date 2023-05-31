

export function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // const searchTerm = document.getElementById('search-input').value; // Get the search term

  // Send a request to the arXiv API
  // fetch(`https://export.arxiv.org/api/query?search_query=all:${searchTerm}&sortBy=submittedDate&sortOrder=descending&max_results=10`, {
  //   method: 'GET'
  // })
  //   .then(response => response.text())
  //   .then(data => {
  //     // Process the response data
  //     const parser = new DOMParser();
  //     const xmlDoc1 = parser.parseFromString(data, 'text/xml');
  //     const totalResultsElement = xmlDoc1.getElementsByTagName('opensearch:totalResults')[0];
  //     const totalResult = parseInt(totalResultsElement.textContent);
  //     const resultsDiv = document.getElementById('results');
  //     resultsDiv.innerHTML = ''; // Clear previous results

  //     const totalResultsEle = document.createElement('h3');
  //     totalResultsEle.textContent = `Total Articles: ${totalResult}`;
  //     resultsDiv.appendChild(totalResultsEle);

      // const entries = xmlDoc1.getElementsByTagName('entry');
      
      // function displayAuthors(authors, container) {
      //   container.innerHTML = ''; // Clear previous authors

      //   const authorsList = document.createElement('ul');
      //   authors.forEach(author => {
      //     const authorItem = document.createElement('li');
      //     authorItem.textContent = author;
      //     authorsList.appendChild(authorItem);
      //   });

      //   container.appendChild(authorsList);
      // }

      // for (let i = 0; i < entries.length; i++) {
      //   const title = entries[i].getElementsByTagName('title')[0].textContent;
      //   const authors = Array.from(entries[i].getElementsByTagName('author')).map(author => author.getElementsByTagName('name')[0].textContent);

      //   const articleContainer = document.createElement('div');
      //   articleContainer.classList.add('article-container');

      //   const articleTitleButton = document.createElement('button');
      //   articleTitleButton.textContent = title;
      //   articleTitleButton.addEventListener('click', () => displayAuthors(authors, articleContainer));

      //   articleContainer.appendChild(articleTitleButton);
      //   resultsDiv.appendChild(articleContainer);
      // }
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    
    // function displayAuthors(authors, container) {
    //   container.innerHTML = ''; // Clear previous authors

    //   const authorsList = document.createElement('ul');
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
    
    // function displayAuthorStats(author) {
    
    //   fetch(`https://export.arxiv.org/api/query?search_query=au:${(author)}&sortBy=submittedDate&sortOrder=ascending`, {
    //     method: 'GET'
    //   })
    //     .then(response => response.text())
    //     .then(data => {
    //       // Process the response data
    //       const parser = new DOMParser();
    //       const xmlDoc = parser.parseFromString(data, 'text/xml');
    //       const totalResults = xmlDoc.getElementsByTagName('opensearch:totalResults')[0].textContent;
    //       alert(`Author: ${author}\nTotal Articles: ${totalResults}`);
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //     });
    // }
    
}





    
  
    
