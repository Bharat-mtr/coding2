import React, { useState, useEffect } from 'react';
import './App.css';
import { supabase } from './supabaseClient.js';

function App() {
 console.log("Bharat");
 const [query, setQuery] = useState("Jammin' in the Big Easy");

 useEffect(() => {
    async function fetchData(input) {
      console.log(supabase);
      const data = { 
        content: input
      };
      await supabase.from('Mock').insert(data);
      console.log(data);  
    }
    
    console.log("call");
    fetchData("Kya kare");
 }, []);

 return React.createElement(
    'div',
    { className: 'app-main' },
    React.createElement(
      'h1',
      null,
      'HELLO'
    )
 );
}

export default App;
