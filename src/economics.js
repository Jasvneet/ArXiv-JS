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

export function fetchEconomics() {
    storePreviousState()
    document.body.innerHTML = '';
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back to Home';
    backButton.addEventListener('click', restorePreviousState);

    document.body.appendChild(backButton);
 
    const economicsCategories = ['econ.EM', 'econ.GN', 'econ.TH']; 
    let totalResults = [];
    
  
    economicsCategories.forEach(function(category) {
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
      

        if (totalResults.length === economicsCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = ['Econometrics', 'General Economics', 'Theoretical Economics'];
            const chartContainer = document.createElement('div');
            chartContainer.id = 'chartContainer';
            document.body.appendChild(chartContainer);
            chartContainer.innerHTML = ''; 
            createBarChart('Economics', economicsCategories, totalResults, totalArticleCount, fullCategoryNames);
            document.body.appendChild(chartContainer);

         
        } 
       
        })
        .catch(function(error) {
        console.log('Error:', error);
  
        });
    });
}


    



// function createBarChart(categories, totalResults) {
//     const ctx = document.getElementById('econChart').getContext('2d');
    
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: categories,
//         datasets: [{
//           label: 'Total Results',
//           data: totalResults,
//           backgroundColor: 'rgba(75, 192, 192, 0.6)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Total Results'
//             }
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Categories'
//             }
//           }
//         }
//       }
//     });
//   }        
  

            
//             totalSum += totalResults;
            
//             // Handle individual category total results
//             console.log(`Total Results for ${category}:`, totalResults);
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