import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
function App(){

    const [input, setInput] =useState("");
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [cache, setCache] = useState({});

    const fetchData = async () =>{
        if(cache[input]){
          console.log("CACHE RETURNED ", input);
            setResults(cache[input]);
            return;
        }

        console.log("API CALL ", input);
        const data = await fetch('https://dummyjson.com/recipes/search?q=' + input);
        const jsonData = await data.json();
        setResults(jsonData.recipes);
        setCache((prev) => ({...prev, [input]: jsonData.recipes}));
    };

    useEffect(() => {
      const timer = setTimeout(fetchData, 500); // Debounce API call by 500ms
      return () =>{

       clearTimeout(timer); // Cleanup the timer on unmount or input change
      };
    }, [input]);

  return (
   <div className="App">
    <h1>Autocomplete Search Bar</h1>
    <input
    type="text" className="search-input"
    placeholder="Search for recipes..."
    value={input} onChange={(e) => setInput(e.target.value)} 
    onFocus={() => setShowResults(true)} 
    onBlur={() => setShowResults(false)}/>

    {showResults && (
      <div className="results-container">
        {results.map((r) => (<span className="result" key={r.id}>{r.name}</span>))}
      </div>
    )}
   </div>
  );
};


export default App;