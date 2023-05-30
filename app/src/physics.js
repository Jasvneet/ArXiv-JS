
function fetchPhysics() {
    console.log('Physics')
    const physicsCategories = ['astro-ph.GA', 'astro-ph.HE', 'astro-ph.IM', 'astro-ph.SR', 'cond-mat.dis-nn', 'cond-mat.mes-hall', 'cond-mat.mtrl-sci', 'cond-mat.other', 'cond-mat.quant-gas', 'cond-mat.soft', 'cond-mat.stat-mech','cond-mat.str-el', 'cond-mat.supr-con', 'gr-qc',  'hep-ex', 'hep-lat', 'hep-ph', 'hep-th', 'math-ph', 'nlin.AO', 'nlin.CD', 'nlin.CG', 'nlin.PS', 'nlin.SI', 'nucl-ex', 'nucl-th', 'physics.acc-ph', 'physics.ao-ph', 'physics.app-ph', 'physics.atm-clus', 'physics.atom-ph', 'physics.bio-ph', 'physics.chem-ph', 'physics.class-ph', 'physics.comp-ph', 'physics.data-an', 'physics.ed-ph', 'physics.flu-dyn', 'physics.gen-ph', 'physics.geo-ph', 'physics.hist-ph', 'physics.ins-det', 'physics.med-ph', 'physics.optics', 'physics.plasm-ph', 'physics.pop-ph', 'physics.soc-ph', 'physics.space-ph', 'quant-ph']; 


    let totalResults = [];
    
    // Fetch total results for each category
    physicsCategories.forEach(function(category) {
      const apiUrl = `http://export.arxiv.org/api/query?search_query=cat:${category}&start=0&max_results=1`;

      
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
        if (totalResults.length === physicsCategories.length) {
        createBarPhysChart(physicsCategories, totalResults);
        }
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            
function createBarPhysChart(categories, totalResults) {
  const data = [{
    x: categories,
    y: totalResults,
    type: 'bar',
    marker: {
      color: 'orange', // Change this color to your desired color
      line: {
        color: 'black', // Set the bar border color
        width: 1 // Set the bar border width
      }
    }
  }];
  
  const layout = {
    title: {
      text: 'Number of Articles Published per Subcategory',
      font: {
        family: 'Arial, sans-serif', // Change this to your desired font family
        size: 18, // Change this to your desired font size
        color: 'black' // Change this to your desired font color
      }
    },
    xaxis: {
      title: {
        text: 'Subcategory',
        font: {
          family: 'Arial, sans-serif', // Change this to your desired font family
          size: 18, // Change this to your desired font size
          color: 'black' // Change this to your desired font color
        }
      },
    },
    yaxis: {
      title: {
        text: 'Article Count',
        font: {
          family: 'Arial, sans-serif', // Change this to your desired font family
          size: 18, // Change this to your desired font size
          color: 'black' // Change this to your desired font color
        }
      },
    },
    plot_bgcolor: 'white', // Change this color to your desired background color
    paper_bgcolor: 'skyblue' // Change this color to your desired background color


  };
  
  Plotly.newPlot('econChartContainer', data, layout);
 
}  
  //   const ctx = document.getElementById('econChart').getContext('2d');
    
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: categories,
  //       datasets: [{
  //         label: 'Total Results',
  //         data: totalResults,
  //         backgroundColor: 'rgba(75, 192, 192, 0.6)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           title: {
  //             display: true,
  //             text: 'Total Results'
  //           }
  //         },
  //         x: {
  //           title: {
  //             display: true,
  //             text: 'Categories'
  //           }
  //         }
  //       }
  //     }
  //   });
  // }         













// totalSum += totalResults;
            
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
//     }, 20000);
// }


// for visualizations 






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
