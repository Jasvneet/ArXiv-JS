

export function createBarChart( category, categories, totalResults, totalArticleCount, fullCategoryNames) {
  
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
      }, 
      text: fullCategoryNames, // Display full category names inside the bar
      hovertemplate: '%{text}<br>Article Count: %{y}',
      
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
      paper_bgcolor: 'rgb(38, 48, 90)' 
    };
    const chartContainer = document.getElementById('chartContainer');
    chartContainer.innerHTML = '';

    const loadingIndicator = createLoadingIndicator();
    chartContainer.appendChild(loadingIndicator);

  
    

    const totalArticleCountDiv = document.createElement('total-article-count');
    totalArticleCountDiv.id = 'total-article-count'
    totalArticleCountDiv.innerHTML = '';
    const totalArticleCountButton = document.createElement('button');
    totalArticleCountButton.textContent = `${category} Total: ${totalArticleCount} articles`;
    totalArticleCountButton.classList.add('total-article-count-button');

  document.body.appendChild(totalArticleCountDiv)
  totalArticleCountDiv .appendChild(totalArticleCountButton);

    
  Plotly.newPlot('chartContainer', data, layout);
  chartContainer.removeChild(loadingIndicator);
    
  }         

  function createLoadingIndicator() {
    const loadingText = document.createElement('div');
    loadingText.classList.add('loading-text');
    loadingText.textContent = 'Loading';
  
    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading-indicator');
  
    const loadingSymbol = document.createElement('div');
    loadingSymbol.classList.add('loading-symbol');
  
    loadingIndicator.appendChild(loadingText);
    loadingIndicator.appendChild(loadingSymbol);
  
    return loadingIndicator;
  }