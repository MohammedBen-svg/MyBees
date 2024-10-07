import React, { useState, useEffect } from "react";
import Nav from './Header/nav'
import './App.css';
import Products from "./Main/Products";
function App() {
    const [data ,setData] = useState([])
    const [searchInpt, setSearchInpt] = useState('');
    const [categorie, setCategorie] = useState("groceries");
    // execute in the first render and  when the component is update exactly the categorie: 
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categorie}`)
        .then(response => response.json())
        .then(res => {
          setData(prev=>({data: res.products}));
        })
    }, [categorie]);
    useEffect(() => {
        if (searchInpt !== '') {
            fetch(`https://dummyjson.com/products/search?q=${searchInpt}`)
            .then(response => response.json())
            .then(res => {
            setData(prev=>({data: res.products}));
            })
        console.log(`https://dummyjson.com/products/search?q=${searchInpt}`)

        }
    }, [searchInpt])
    
    return (
        <>
            <Nav categorie={categorie} setCategorie={setCategorie} searchInpt={searchInpt} setSearchInpt={setSearchInpt} />
            <br/>
            <div className="container">
                <Products products={data.data}/>
            </div>
        </>
    );
}

export default App;
