import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);
    const { name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4  className="product-name"><Link to ={"/product/" +key}>{name}</Link></h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <br />
                <p>${price}</p>
    
                <p>only{stock}left in stock-order soon</p>
                {props.showAddToCart === true && <button className="main-button"
                    onClick = {()=> props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faPlus} />add to cart</button>}
                </div> 
        </div>
    );
};

export default Product;