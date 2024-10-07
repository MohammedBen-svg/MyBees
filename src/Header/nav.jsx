import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css';
export default function Nav({ categorie, setCategorie,searchInpt, setSearchInpt }) {
    const handleCategorie = (e) => {
        let c = e.currentTarget.innerHTML;
        setCategorie(c);
    };
    // update the product when ChearchBtn clicked first by updating searchInpt in app: 
    const HandleChearch = ()=> {
        var val = document.getElementById('searchValue').value;
        setSearchInpt(val);
    }

    return (
        <>
        <header>
            <h1 className="logo-name">Store</h1>
            <div className="search-bar">
                <input type='search' className="search-input" id="searchValue" placeholder="Enter Product Name..."/>
                <button className="search-btn" onClick={HandleChearch} ><span className="material-symbols-outlined">search</span></button>
            </div>
            <div className="user-action">
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined">local_mall</span>
            </div>
        </header>
        <hr />
            <ul className="categorie">
                <li onClick={handleCategorie}>groceries</li>
                <li onClick={handleCategorie}>kitchen-accessories</li>
                <li onClick={handleCategorie}>laptops</li>
                <li onClick={handleCategorie}>mobile-accessories</li>
                <li onClick={handleCategorie}>smartphones</li>
                <li onClick={handleCategorie}>sports-accessories</li>
                <li onClick={handleCategorie}>Furniture</li>
                <li onClick={handleCategorie}>mens-shirts</li>
            </ul>
        </>
    );
}
