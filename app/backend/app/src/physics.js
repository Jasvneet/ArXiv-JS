
function fetchPhysics() {
    const physicsCategories = ['astro-ph.GA', 'astro-ph.HE', 'astro-ph.IM', 'astro-ph.SR', 'cond-mat.dis-nn', 'cond-mat.mes-hall', 'cond-mat.mtrl-sci', 'cond-mat.other', 'cond-mat.quant-gas', 'cond-mat.soft', 'cond-mat.stat-mech','cond-mat.str-el', 'cond-mat.supr-con', 'gr-qc',  'hep-ex', 'hep-lat', 'hep-ph', 'hep-th', 'math-ph', 'nlin.AO', 'nlin.CD', 'nlin.CG', 'nlin.PS', 'nlin.SI', 'nucl-ex', 'nucl-th', 'physics.acc-ph', 'physics.ao-ph', 'physics.app-ph', 'physics.atm-clus', 'physics.atom-ph', 'physics.bio-ph', 'physics.chem-ph', 'physics.class-ph', 'physics.comp-ph', 'physics.data-an', 'physics.ed-ph', 'physics.flu-dyn', 'physics.gen-ph', 'physics.geo-ph', 'physics.hist-ph', 'physics.ins-det', 'physics.med-ph', 'physics.optics', 'physics.plasm-ph', 'physics.pop-ph', 'physics.soc-ph', 'physics.space-ph', 'quant-ph']; // Add your desired categories here
    let totalSum = 0;
    
    // Fetch total results for each category
    physicsCategories.forEach(function(category) {
        const apiUrl = `http://export.arxiv.org/api/query?search_query=cat:${category}`;
        
        fetch(apiUrl)
        .then(function(response) {
            return response.text();
        })
        .then(function(responseText) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(responseText, 'text/xml');
            
            const totalResultsElement = xmlDoc.getElementsByTagName('opensearch:totalResults')[0];
            const totalResults = parseInt(totalResultsElement.textContent);
            
            totalSum += totalResults;
            
            // Handle individual category total results
            console.log(`Total Results for ${category}:`, totalResults);
        })
        .catch(function(error) {
            // Handle error
            console.log(`Error fetching ${category} results:`, error);
        });
    });
    
    // Handle total sum of all categories
    setTimeout(function() {
        console.log('Total Sum of Results:', totalSum);
    }, 15000);
}

totalResults.push(totalResult);
      
// // Call the function to create the bar chart after all categories have been fetched
// if (totalResults.length === categories.length) {
//   createBarChart(categories, totalResults);
// }
// })
// .catch(function(error) {
// console.log('Error:', error);
// });
// });





//   
// fetch('https://export.arxiv.org/api/query?search_query=cat:physics.acc-ph')
//   .then(function(response) {
//     return response.text();
//   })
//   .then(function(responseText) {
//     // Parse the XML response
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(responseText, 'text/xml');
    
//     // Extract the total results
//     const totalResultsElement = xmlDoc.getElementsByTagName('opensearch:totalResults')[0];
//     const totalResults = totalResultsElement.textContent;
    
//     // Handle successful response
//     console.log('Total Results:', totalResults);
//   })
//   .catch(function(error) {
//     // Handle error
//     console.log('Error:', error);
//   });
