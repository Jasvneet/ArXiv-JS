import { createBarChart } from "./barChart";

export function fetchQuantFinance() {
    
    const qFinanceCategories = ["q-fin.CP",
            "q-fin.EC",
            "q-fin.GN",
            "q-fin.MF",
            "q-fin.PM",
            "q-fin.PR",
            "q-fin.RM",
            "q-fin.ST",
            "q-fin.TR"]; 
    let totalResults = [];
    
    // Fetch total results for each category
    qFinanceCategories.forEach(function(category) {
      const apiUrl = `https://export.arxiv.org/api/query?search_query=cat:${category}&start=0&max_results=1`;
        
        
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
        if (totalResults.length === qFinanceCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = [ "Computational Finance",
            "Economics",
            "General Finance",
            "Mathematical Finance",
            "Portfolio Management",
            "Pricing of Securities",
            "Risk Management",
            "Statistical Finance",
            "Trading and Market Microstructure"];
            createBarChart(qFinanceCategories, totalResults, totalArticleCount, fullCategoryNames);
        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            


            
