!function(){"use strict";document.addEventListener("DOMContentLoaded",(()=>{console.log("its working"),document.getElementById("economicsButton").addEventListener("click",(function(){!function(){const t=["econ.EM","econ.GN","econ.TH"];let e=[];t.forEach((function(o){fetch(`https://export.arxiv.org/api/query?search_query=cat:${o}&start=0&max_results=1`).then((function(t){return t.text()})).then((function(o){const n=(new DOMParser).parseFromString(o,"text/xml").getElementsByTagName("opensearch:totalResults")[0],r=parseInt(n.textContent);e.push(r),console.log(e),e.length===t.length&&function(t,e){const o=[{x:t,y:e,type:"bar",marker:{color:"orange",line:{color:"black",width:1}}}];Plotly.newPlot("econChartContainer",o,{title:"Number of Articles Published per Subcategory",xaxis:{title:{text:"Subcategory",font:{family:"Arial, sans-serif",size:18,color:"black"}}},yaxis:{title:{text:"Article Count",font:{family:"Arial, sans-serif",size:18,color:"black"}}},plot_bgcolor:"white",paper_bgcolor:"skyblue"})}(t,e)})).catch((function(t){console.log("Error:",t)}))}))}()}))}))}();
//# sourceMappingURL=main.js.map