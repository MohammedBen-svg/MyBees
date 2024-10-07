import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Products.css';

export default function Product({elem,id}) {
    // function that give you the decimal part of number:
    function getDecimalPart(n) {
        const decimalStr = n.toFixed(2).split('.')[1];
        return Number('0.' + decimalStr);
    }
    // return the rating of product  using icon :
    const Stars_rating = (nbr) => {
        const stars = [];
        const integerPart = Math.floor(nbr);
        const decimalPart = getDecimalPart(nbr);
    
        for (let i = 0; i < integerPart; i++) {
          stars.push(
            <span key={i} className="material-symbols-outlined star" style={{ color: 'rgb(217, 150, 26)',fontSize:'22px' }}>
              star_rate
            </span>
          );
        }
    
        if (decimalPart >= 0.50) {
          stars.push(
            <span key="half" className="material-symbols-outlined star" style={{ color: 'rgb(217, 150, 26)',fontSize:'22px' }}>
              star_half
            </span>
          );
        }
        return stars;
    };
    // calcul the original price of product before descount:
    function calculateOriginalPrice(discountedPrice, discountPercentage) {
        return (discountedPrice / (1 - (discountPercentage / 100))).toFixed(2);
    }

    const [isHovered , setHovered] = useState(false);
    return (
        <>
    <div className="card" key={id} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} >
        <img src={(isHovered && elem.images[1] !== undefined) ? elem.images[1] :elem.images[0]} alt={elem.title} id="products-img" imgs={elem} className="card-img-top Card-imgs"/>
        <div className="card-body">
            <div className="card-title">{elem.title}</div>
            <div className="card-text">
                <div className="descrip">{elem.description}</div>
                <div className="product-rating">{Stars_rating(elem.rating)}</div>
                <div className="product-price fw-bolder d-flex justify-content-start gap-3 ">{elem.price}$ <span style={{textAlign: 'right',textDecoration:'line-through',color:'rgb(95, 88, 88)'}}>{calculateOriginalPrice(elem.price,elem.discountPercentage)}$</span></div>
            </div>
        </div>
    </div>
        </>
    )
}
