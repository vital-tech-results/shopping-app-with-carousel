import React from 'react';
import Recommendation from './Recommendation';
import Carousel from 'nuka-carousel';

// simple not found component 
const Recommendations = props => {
    const results = props.photos;
    results.length = 4;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo =>
            <Recommendation url={`${photo.url}`} key={photo.id} />
        );
    }

    const productsResults = props.products;
    productsResults.length = 4;
    let productItem;
    if (productsResults.length > 0) {
        productItem = productsResults.map(product =>
            <Recommendation price={`${product.price}`} name={`${product.name}`} key={product.id} />
        );
    }

    // photos variable above is rendered below
    return (
        < div className="photo-container" >
            <h1>You'll also like</h1>
            <div>
                <div>
                    {photos}
                    {productItem}
                </div>
            </div>
        </div >
    );
}


export default Recommendations;