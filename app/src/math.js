// function fetchMath() {
    
//     const mathCategories = ["math.AC",
            // "math.AG",
            // "math.AP",
            // "math.AT",
            // "math.CA",
            // "math.CO",
            // "math.CT",
            // "math.CV",
            // "math.DG",
            // "math.DS",
            // "math.FA",
            // "math.GM",
            // "math.GN",
            // "math.GR",
            // "math.GT",
            // "math.H",
            // "math.IT",
            // "math.KT",
            // "math.LO",
            // "math.MG",
            // "math.MP",
            // "math.NA",
            // "math.NT",
            // "math.OA",
            // "math.OC",
            // "math.PR",
            // "math.QA",
            // "math.RA",
            // "math.RT",
            // "math.S",
            // "math.SP",
            // "math.ST"]; 
//     let totalSum = 0;
    
//     // Fetch total results for each category
//     mathCategories.forEach(function(category) {
//         const apiUrl = `http://export.arxiv.org/api/query?search_query=cat:${category}`;
        
//         fetch(apiUrl)
//         .then(function(response) {
//             return response.text();
//         })
//         .then(function(responseText) {
//             const parser = new DOMParser();
//             const xmlDoc = parser.parseFromString(responseText, 'text/xml');
            
//             const totalResultsElement = xmlDoc.getElementsByTagName('opensearch:totalResults')[0];
//             const totalResults = parseInt(totalResultsElement.textContent);
            
//             totalSum += totalResults;
            
//             // Handle individual category total results
//             // console.log(`Total Results for ${category}:`, totalResults);
//         })
//         .catch(function(error) {
//             // Handle error
//             console.log(`Error fetching ${category} results:`, error);
//         });
//     });
    
//     // Handle total sum of all categories
//     setTimeout(function() {
//         console.log('Total Sum of Results:', totalSum);
//     }, 10000);
// }