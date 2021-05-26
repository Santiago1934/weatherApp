import React, { useState } from "react";
import { Route } from "react-router-dom"
import { toast } from "react-toastify"
import "./Nav.css"

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
   
    }}>
      <Route exact path="/">
      <input className="searchBar"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input style={{ marginLeft:"0.5rem"}} type="submit" value="Buscar" />
      </Route>r
    </form>
  );
}
