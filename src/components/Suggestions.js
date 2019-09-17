import React from 'react';
import Suggestion from './Suggestion';
import Carousel from 'nuka-carousel';

// simple not found component 
const Suggestions = props => {
    const results = props.photos;
    results.length = 4;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo =>
            <Suggestion url={`${photo.url}`} key={photo.id} />
        );
    }


    const productsResults = props.products;
    productsResults.length = 4;
    let productItem;
    if (productsResults.length > 0) {
        productItem = productsResults.map(product =>
            <Suggestion price={`${product.price}`} name={`${product.name}`} key={product.id} />
        );
    }

    // photos variable above is rendered below
    return (
        < div className="photo-container" >
            <h1>You'll also like</h1>
            <ul>
                {photos}

            </ul>
            <ul>
                {productItem}
            </ul>
        </div >
    );
}


export default Suggestions;