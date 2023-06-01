

export function displayAuthorStats(author) {
  const heatmapContainer = document.getElementById('heatmapContainer');
  heatmapContainer.innerHTML = ''; // Clear previous article details


  const loadingIndicator = document.createElement('div');
  loadingIndicator.classList.add('loading-indicator')
  loadingIndicator.textContent = 'Loading Data...';
  heatmapContainer.appendChild(loadingIndicator);

  fetch(`https://export.arxiv.org/api/query?search_query=au:${author}&max_results=2000`, {
    method: 'GET'
  })
    .then(response => response.text())
    .then(data => {
      // Process the response data
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const entries = xmlDoc.getElementsByTagName('entry');
      const publishedYears = Array.from(entries).map(entry => {
        const publishedDate = entry.getElementsByTagName('published')[0].textContent;
        return new Date(publishedDate).getFullYear();
      });

      const yearsCount = {};
      publishedYears.forEach(year => {
        yearsCount[year] = (yearsCount[year] || 0) + 1;
      });

      const years = Object.keys(yearsCount);
      const counts = Object.values(yearsCount);

      // Prepare data for the heatmap
      const data1 = [
        {
          x: years,
          y: [''],
          z: [counts],
          type: 'heatmap',
          colorscale: 'Viridis',
          showscale: true,
          hovertemplate: `<b>Year: %{x}</b><br>Author: ${author}<br>Articles: %{z}`,
          colorbar: {
            tickfont: {
              color: 'white' // Change the color of the numbers on the gradient scale here
            }
          }
        }
      ];

      // Define layout options for the heatmap
      const layout = {
        title: {
          text: `# of ${author}'s Publications over the Past Years`,
          font: {
            family: 'Arial, sans-serif', // Change this to your desired font family
            size: 18, // Change this to your desired font size
            color: 'white' // Change this to your desired font color
          }
        },
        xaxis: {
          title: {
            text: 'Year',
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
            text: `${author}`,
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
        plot_bgcolor: 'rgb(38, 48, 90)',// Change this color to your desired background color
        paper_bgcolor: 'rgb(38, 48, 90)'
      };

      heatmapContainer.removeChild(loadingIndicator);

      // Plot the heatmap using Plotly
      Plotly.newPlot('heatmapContainer', data1, layout);
      
    })
    .catch(error => {
      console.error('Error:', error);
      loadingIndicator.remove();
    });
}