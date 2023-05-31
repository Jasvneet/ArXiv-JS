function fetchMath() {
    
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
        createMathBarChart(mathCategories, totalResults);
        } 
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            
function createMathBarChart(categories, totalResults) {

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