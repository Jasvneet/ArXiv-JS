import { createBarChart } from "./barChart";
let previousState = null;


function storePreviousState() {
  previousState = document.body.innerHTML;
}


function restorePreviousState() {
  if (previousState) {
    document.body.innerHTML = previousState;
  }
}

export function fetchStatistics() {
    storePreviousState()
    document.body.innerHTML = '';
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back to Home';
    backButton.addEventListener('click', restorePreviousState);

    document.body.appendChild(backButton);
    
    const statsCategories = ['stat.AP', 'stat.CO', 'stat.ME', 'stat.ML', 'stat.OT', 'stat.TH']; 
    let totalResults = [];
    
    // Fetch total results for each category
    statsCategories.forEach(function(category) {
        const apiUrl = `http://export.arxiv.org/api/query?search_query=cat:${category}&start=0&max_results=1`;
        
        fetch(apiUrl)
        .then(function(response) {
            return response.text();
        })
        .then(function(responseText) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(responseText, 'text/xml');
            
            const totalResultsElement = xmlDoc.getElementsByTagName('opensearch:totalResults')[0];
            const totalResult = parseInt(totalResultsElement.textContent);

            totalResults.push(totalResult);
            console.log(totalResults)
      
// Call the function to create the bar chart after all categories have been fetched
        if (totalResults.length === statsCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = [  "Applications",
            "Computation",
            "Methodology",
            "Machine Learning",
            "Other Statistics",
            "Statistics Theory"];

            const chartContainer = document.createElement('div');
            chartContainer.id = 'chartContainer';
            document.body.appendChild(chartContainer);
            chartContainer.innerHTML = ''; 
            
            createBarChart('Statistics', statsCategories, totalResults, totalArticleCount, fullCategoryNames);
            document.body.appendChild(chartContainer);

        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            
      
