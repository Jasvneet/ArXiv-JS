// function fetchComputerScience() {
    
//     const csCategories = ['cs.AI', 'cs.AR', 'cs.CC', 'cs.CE', 'cs.CG',
//         'cs.CL', 'cs.CR', 'cs.CV', 'cs.CY', 'cs.DB',
//         'cs.DC', 'cs.DL', 'cs.DM', 'cs.DS', 'cs.ET',
//         'cs.FL', 'cs.GL', 'cs.GR', 'cs.GT', 'cs.HC',
//         'cs.IR', 'cs.IT', 'cs.LG', 'cs.LO', 'cs.MA',
//         'cs.MM', 'cs.MS', 'cs.NA', 'cs.NE', 'cs.NI',
//         'cs.OH', 'cs.OS', 'cs.PF', 'cs.PL', 'cs.RO',
//         'cs.SC', 'cs.SD', 'cs.SE', 'cs.SI', 'cs.SY']; 
//     let totalSum = 0;
    
//     // Fetch total results for each category
//     csCategories.forEach(function(category) {
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