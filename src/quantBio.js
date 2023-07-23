import { createBarChart } from "./barChart";

export function fetchQuantBio() {
    
    const qBioCategories = [
            "q-bio.BM",
            "q-bio.CB",
            "q-bio.GN",
            "q-bio.MN",
            "q-bio.NC",
            "q-bio.O",
            "q-bio.PE",
            "q-bio.QM",
            "q-bio.SC",
            "q-bio.TO"]; 
    let totalResults = [];
    
    // Fetch total results for each category
    qBioCategories.forEach(function(category) {
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
        if (totalResults.length === qBioCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = [ "Biomolecules",
            "Cell Behavior",
            "Genomics",
            "Molecular Networks",
            "Neurons and Cognition",
            "Other Quantitative Biology",
            "Populations and Evolution",
            "Quantitative Methods",
            "Subcellular Processes",
            "Tissues and Organs"];
            createBarChart(qBioCategories, totalResults, totalArticleCount, fullCategoryNames);
        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            





   

