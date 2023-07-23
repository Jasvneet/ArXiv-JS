import { createBarChart } from "./barChart";

export function fetchPhysics() {
    console.log('Physics')
    const physicsCategories = ['astro-ph.CO', 'astro-ph.EP', 'astro-ph.GA', 'astro-ph.HE', 'astro-ph.IM', 'astro-ph.SR', 'cond-mat.dis-nn', 'cond-mat.mes-hall', 'cond-mat.mtrl-sci', 'cond-mat.other', 'cond-mat.quant-gas', 'cond-mat.soft', 'cond-mat.stat-mech','cond-mat.str-el', 'cond-mat.supr-con', 'gr-qc',  'hep-ex', 'hep-lat', 'hep-ph', 'hep-th', 'math-ph', 'nlin.AO', 'nlin.CD', 'nlin.CG', 'nlin.PS', 'nlin.SI', 'nucl-ex', 'nucl-th', 'physics.acc-ph', 'physics.ao-ph', 'physics.app-ph', 'physics.atm-clus', 'physics.atom-ph', 'physics.bio-ph', 'physics.chem-ph', 'physics.class-ph', 'physics.comp-ph', 'physics.data-an', 'physics.ed-ph', 'physics.flu-dyn', 'physics.gen-ph', 'physics.geo-ph', 'physics.hist-ph', 'physics.ins-det', 'physics.med-ph', 'physics.optics', 'physics.plasm-ph', 'physics.pop-ph', 'physics.soc-ph', 'physics.space-ph', 'quant-ph']; 


    let totalResults = [];
    
    // Fetch total results for each category
    physicsCategories.forEach(function(category) {
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
        if (totalResults.length === physicsCategories.length) {
            const totalArticleCount = totalResults.reduce((acc, curr) => acc + curr, 0);
            const fullCategoryNames = [  "Cosmology and Nongalactic Astrophysics",
            "Earth and Planetary Astrophysics",
            "Astrophysics of Galaxies",
            "High Energy Astrophysical Phenomena",
            "Instrumentation and Methods for Astrophysics",
            "Solar and Stellar Astrophysics",
            "Disordered Systems and Neural Networks",
            "Mesoscale and Nanoscale Physics",
            "Materials Science",
            "Other Condensed Matter",
            "Quantum Gases",
            "Soft Condensed Matter",
            "Statistical Mechanics",
            "Strongly Correlated Electrons",
            "Superconductivity",  
            "General Relativity and Quantum Cosmology",
            "High Energy Physics - Experiment",
            "High Energy Physics - Lattice",
            "High Energy Physics - Phenomenology",
            "High Energy Physics - Theory",
            "Mathematical Physics",
            "Adaptation and Self-Organizing Systems",
            "Chaotic Dynamics",
            "Cellular Automata and Lattice Gases",
            "Pattern Formation and Solitons",
            "Exactly Solvable and Integrable Systems",
            "Nuclear Experiment",
            "Nuclear Theory",
            "Accelerator Physics",
            "Atmospheric and Oceanic Physics",
            "Applied Physics",
            "Atomic and Molecular Clusters",
            "Atomic Physics",
            "Biological Physics",
            "Chemical Physics",
            "Classical Physics",
            "Computational Physics",
            "Data Analysis, Statistics and Probability",
            "Physics Education",
            "Fluid Dynamics",
            "General Physics",
            "Geophysics",
            "History and Philosophy of Physics",
            "Instrumentation and Detectors",
            "Medical Physics",
            "Optics",
            "Plasma Physics",
            "Popular Physics",
            "Physics and Society",
            "Space Physics",
            "Quantum Physics"
            ];
            createBarChart(physicsCategories, totalResults, totalArticleCount, fullCategoryNames);
        }
        })
        .catch(function(error) {
        console.log('Error:', error);
        });
    });
}
            




















