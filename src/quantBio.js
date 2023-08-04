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
export function fetchQuantBio() {
    storePreviousState()
    document.body.innerHTML = '';
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back to Home';
    backButton.addEventListener('click', restorePreviousState);

    document.body.appendChild(backButton);
    
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

            const chartContainer = document.createElement('div');
            chartContainer.id = 'chartContainer';
            document.body.appendChild(chartContainer);
            chartContainer.innerHTML = ''; 
            createBarChart('Quantitative Biology', qBioCategories, totalResults, totalArticleCount, fullCategoryNames);
            document.body.appendChild(chartContainer);
        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            





   

