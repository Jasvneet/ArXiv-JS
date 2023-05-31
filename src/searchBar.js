function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  const searchTerm = document.getElementById('search-input').value; // Get the search term

  // Send a request to the arXiv API
  fetch(`http://export.arxiv.org/api/query?search_query=all:${searchTerm}&start=0&max_results=10`, {
    method: 'GET'
  })
    .then(response => response.text())
    .then(data => {
      // Process the response data
      console.log(data);
      // TODO: Display the search results on the page
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', function() {
  const sform = document.getElementById('search-form');
  sform.addEventListener('submit', handleSubmit);
});
  
    
    
    
    
    
    
    
    
   
    



    
  
    
