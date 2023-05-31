function displayAuthors(authors, container) {
    container.innerHTML = ''; // Clear previous authors

    const authorsList = document.createElement('ul');
    authors.forEach(author => {
      const authorItem = document.createElement('li');
      const authorLink = document.createElement('a');
      authorLink.textContent = author;
      authorLink.href = '#';
      authorLink.addEventListener('click', () => displayAuthorStats(author));

      authorItem.appendChild(authorLink);
      authorsList.appendChild(authorItem);
    });

    container.appendChild(authorsList);
  }

  function displayAuthorStats(author) {
    // Send a request to the arXiv API to get author statistics
    fetch(`https://export.arxiv.org/api/query?search_query=au:${encodeURIComponent(author)}&sortBy=submittedDate&sortOrder=ascending`, {
      method: 'GET'
    })
      .then(response => response.text())
      .then(data => {
        // Process the response data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const totalResults = xmlDoc.getElementsByTagName('opensearch:totalResults')[0].textContent;
        alert(`Author: ${author}\nTotal Articles: ${totalResults}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }