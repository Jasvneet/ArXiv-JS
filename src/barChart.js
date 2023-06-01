export function createBarChart(categories, totalResults) {
  
    const data = [{
      x: categories,
      y: totalResults,
      type: 'bar',
      marker: {
        color: 'rgb(9, 238, 253)', // Change this color to your desired color
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
          color: 'white' // Change this to your desired font color
        }
      },
      xaxis: {
        title: {
          text: 'Subcategory',
          font: {
            family: 'Arial, sans-serif', // Change this to your desired font family
            size: 18, // Change this to your desired font size
            color: 'white' // Change this to your desired font color
          }
        },
        tickfont: {
          color: 'white'
        },
      },
      yaxis: {
        title: {
          text: 'Article Count',
          font: {
            family: 'Arial, sans-serif', // Change this to your desired font family
            size: 18, // Change this to your desired font size
            color: 'white' // Change this to your desired font color
          }
        },
        tickfont: {
          color: 'white'
        },
      },
      plot_bgcolor: 'rgb(38, 48, 90)', // Change this color to your desired background color
      paper_bgcolor: 'rgb(38, 48, 90)' // Change this color to your desired background color
    };
    
    Plotly.newPlot('chartContainer', data, layout);
    
  }         