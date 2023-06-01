import { createBarChart } from "./barChart";


export function fetchStatistics() {
    
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
            createBarChart(statsCategories, totalResults, totalArticleCount, fullCategoryNames);
        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            
      
