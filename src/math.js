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
export function fetchMath() {
  storePreviousState()
  document.body.innerHTML = '';
  const backButton = document.createElement('button');
  backButton.classList.add('back-button');
  backButton.textContent = 'Back to Home';
  backButton.addEventListener('click', restorePreviousState);

  document.body.appendChild(backButton);
    const mathCategories = ["math.AC",
            "math.AG",
            "math.AP",
            "math.AT",
            "math.CA",
            "math.CO",
            "math.CT",
            "math.CV",
            "math.DG",
            "math.DS",
            "math.FA",
            "math.GM",
            "math.GN",
            "math.GR",
            "math.GT",
            "math.H",
            "math.IT",
            "math.KT",
            "math.LO",
            "math.MG",
            "math.MP",
            "math.NA",
            "math.NT",
            "math.OA",
            "math.OC",
            "math.PR",
            "math.QA",
            "math.RA",
            "math.RT",
            "math.S",
            "math.SP",
            "math.ST"]; 
    let totalResults = [];
    

    mathCategories.forEach(function(category) {
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
      

        if (totalResults.length === mathCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = ["Commutative Algebra",
            "Algebraic Geometry",
            "Analysis of PDEs",
            "Algebraic Topology",
            "Classical Analysis and ODEs",
            "Combinatorics",
            "Category Theory",
            "Complex Variables",
            "Differential Geometry",
            "Dynamical Systems",
            "Functional Analysis",
            "General Mathematics",
            "General Topology",
            "Group Theory",
            "Geometric Topology",
            "History and Overview",
            "Information Theory",
            "K-Theory and Homology",
            "Logic",
            "Metric Geometry",
            "Mathematical Physics",
            "Numerical Analysis",
            "Number Theory",
            "Operator Algebras",
            "Optimization and Control",
            "Probability",
            "Quantum Algebra",
            "Rings and Algebras",
            "Representation Theory",
            "Symplectic Geometry",
            "Spectral Theory",
            "Statistics Theory"
          ];

          const chartContainer = document.createElement('div');
          chartContainer.id = 'chartContainer';
          document.body.appendChild(chartContainer);
          chartContainer.innerHTML = ''; 

            createBarChart(mathCategories, totalResults, totalArticleCount, fullCategoryNames);
            document.body.appendChild(chartContainer);

        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            

            
