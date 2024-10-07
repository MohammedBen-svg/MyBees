import React, {useState , useEffect} from "react";
import Nav from "../Header/nav";
import 'bootstrap/dist/css/bootstrap.css';
import './Products.css';
import Product from "./Product";
export default function Products({products}) {
    if (products !== undefined) {
        return(
            <>
            {
                products.map((i,p)=> {
                    return <Product key={p} elem={i} />
                })
            }
            </>
        )
    }
}