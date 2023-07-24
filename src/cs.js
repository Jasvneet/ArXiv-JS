import { createBarChart } from "./barChart";


export function fetchComputerScience() {
    
    const csCategories = ['cs.AI', 'cs.AR', 'cs.CC', 'cs.CE', 'cs.CG',
        'cs.CL', 'cs.CR', 'cs.CV', 'cs.CY', 'cs.DB',
        'cs.DC', 'cs.DL', 'cs.DM', 'cs.DS', 'cs.ET',
        'cs.FL', 'cs.GL', 'cs.GR', 'cs.GT', 'cs.HC',
        'cs.IR', 'cs.IT', 'cs.LG', 'cs.LO', 'cs.MA',
        'cs.MM', 'cs.MS', 'cs.NA', 'cs.NE', 'cs.NI',
        'cs.OH', 'cs.OS', 'cs.PF', 'cs.PL', 'cs.RO',
        'cs.SC', 'cs.SD', 'cs.SE', 'cs.SI', 'cs.SY']; 
    let totalResults = [];
    
  
    csCategories.forEach(function(category) {
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
            // console.log(totalResults)
      

        if (totalResults.length === csCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = [
                "Artificial Intelligence",
                "Hardware Architecture",
                "Computational Complexity",
                "Computational Engineering, Finance, and Science",
                "Computational Geometry",
                "Computation and Language",
                "Cryptography and Security",
                "Computer Vision and Pattern Recognition",
                "Computers and Society",
                "Databases",
                "Distributed, Parallel, and Cluster Computing",
                "Digital Libraries",
                "Discrete Mathematics",
                "Data Structures and Algorithms",
                "Emerging Technologies",
                "Formal Languages and Automata Theory",
                "General Literature",
                "Graphics",
                "Computer Science and Game Theory",
                "Human-Computer Interaction",
                "Information Retrieval",
                "Information Theory",
                "Machine Learning",
                "Logic in Computer Science",
                "Multiagent Systems",
                "Multimedia",
                "Mathematical Software",
                "Numerical Analysis",
                "Neural and Evolutionary Computing",
                "Networking and Internet Architecture",
                "Other Computer Science",
                "Operating Systems",
                "Performance",
                "Programming Languages",
                "Robotics",
                "Symbolic Computation",
                "Sound",
                "Software Engineering",
                "Social and Information Networks",
                "Systems and Control"]
            createBarChart(csCategories, totalResults, totalArticleCount, fullCategoryNames);
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