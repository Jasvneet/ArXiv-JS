// function fetchQuantBio() {
    
//     const qBioCategories = [categories = [
            // "q-bio.BM",
            // "q-bio.CB",
            // "q-bio.GN",
            // "q-bio.MN",
            // "q-bio.NC",
            // "q-bio.O",
            // "q-bio.PE",
            // "q-bio.QM",
            // "q-bio.SC",
            // "q-bio.TO"]; 
//     let totalSum = 0;
    
//     // Fetch total results for each category
//     qBioCategories.forEach(function(category) {
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