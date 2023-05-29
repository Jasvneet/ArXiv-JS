// function fetchQuantFinance() {
    
//     const qFinanceCategories = [   "q-fin.CP",
            // "q-fin.EC",
            // "q-fin.GN",
            // "q-fin.MF",
            // "q-fin.PM",
            // "q-fin.PR",
            // "q-fin.RM",
            // "q-fin.ST",
            // "q-fin.TR"]; 
//     let totalSum = 0;
    
//     // Fetch total results for each category
//     qFinanceCategories.forEach(function(category) {
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