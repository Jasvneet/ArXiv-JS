// import searchBar from './src/searchBar.js'
import {fetchPhysics} from './physics.js';
import {fetchEconomics} from './economics.js';
import {fetchMath} from './math.js';
import {fetchComputerScience} from './cs.js';
import {fetchElectricalEngineering} from './electricalengineering.js';
import {fetchStatistics} from './statistics.js';
import {fetchQuantBio} from './quantBio.js';
import {fetchQuantFinance} from './quantFinance.js';

document.addEventListener("DOMContentLoaded", () => {
    console.log("its working");

    document.getElementById('economicsButton').addEventListener('click', function() {
      fetchEconomics();
    });

    document.getElementById('mathButton').addEventListener('click', function() {
      fetchMath();
    });

    document.getElementById('csButton').addEventListener('click', function() {
      fetchComputerScience();
    });

    document.getElementById('physicsButton').addEventListener('click', function() {
      fetchPhysics();
    });

    document.getElementById('eeButton').addEventListener('click', function() {
      fetchElectricalEngineering();
    });

    document.getElementById('statsButton').addEventListener('click', function() {
      fetchStatistics();
    });

    document.getElementById('quantBioButton').addEventListener('click', function() {
      fetchQuantBio();
    });
  
    document.getElementById('quantFinanceButton').addEventListener('click', function() {
      fetchQuantFinance();
    });
    
    
  
  });

 


  