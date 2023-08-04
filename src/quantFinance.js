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

export function fetchQuantFinance() {
    storePreviousState()
    document.body.innerHTML = '';
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back to Home';
    backButton.addEventListener('click', restorePreviousState);

    document.body.appendChild(backButton);
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
    // const loadingIndicator = createLoadingIndicator();
   
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
            // console.log(totalResults)
      

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

            const chartContainer = document.createElement('div');
            chartContainer.id = 'chartContainer';
            document.body.appendChild(chartContainer);
            chartContainer.innerHTML = ''; 

            createBarChart('Quantitative Finance', qFinanceCategories, totalResults, totalArticleCount, fullCategoryNames);
            document.body.appendChild(chartContainer);
           
        } 

        })
        .catch(function(error) {
        console.log('Error:', error);
  
        });
    });
}

    


            
