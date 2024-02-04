import './App.css'
import { useState, useEffect } from 'react' 

import  {supabase}  from './supabaseClient.js';


function App() {
  console.log("Bharat")
  const [query, setQuery] = useState("Jammin' in the Big Easy");

  useEffect(() => {
    async function fetchData(input) {
      console.log(supabase);
      const data = { 
      content: input
      }
      await supabase.from('Mock').insert(data);

      console.log(data);  
    }
    
    console.log("call")
    fetchData("Kya kare");
 }, []);

  return (
    <div className="app-main">
       <h1>HELLO</h1>
    </div>
  );
}

export default App;