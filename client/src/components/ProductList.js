import React from 'react';
import { Link } from '@reach/router';


export default props => {
    return(
        <div>
            <h1>Products</h1>
            {props.products.map((product, index)=>{
                return <div><Link key={index} to={"/products/"+product._id}>{product.title}, ${product.price}, {product.description}</Link></div>
            })}
        </div>
    )
}