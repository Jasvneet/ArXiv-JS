import { createBarChart } from "./barChart";

export function fetchMath() {
    
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
    
    // Fetch total results for each category
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
      
// Call the function to create the bar chart after all categories have been fetched
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

            createBarChart(mathCategories, totalResults, totalArticleCount, fullCategoryNames);
        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            

            
