import { createBarChart } from "./barChart";


export function fetchElectricalEngineering() {
    
    const eeCategories = ["eess.AS", "eess.IV", "eess.SP", "eess.SY"]; 
    let totalResults = [];
    
    // Fetch total results for each category
    eeCategories.forEach(function(category) {
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
        if (totalResults.length === eeCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = ["Audio and Speech Processing",
            "Image and Video Processing",
            "Signal Processing",
            "Systems and Control"]
            createBarChart(eeCategories, totalResults, totalArticleCount, fullCategoryNames);
        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            

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