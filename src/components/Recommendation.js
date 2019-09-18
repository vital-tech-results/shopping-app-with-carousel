import React from 'react';

// img src is passed this.props from Recommendation list.js
export const Recommendation = (props) => {

    const photos4 = props.photos;
    photos4.length = 4;

    const products4 = props.products;
    products4.length = 4;

    return (
        (<div className="photo-container">
            {products4.map((product, index) => (
                <>
                    <div>
                        <figure>
                            <img src={`${photos4.map(photo => (
                                photo.url
                            ))}`} alt="" width="120px" />
                            <figcaption>{product.name}</figcaption>
                            <figcaption>${product.price}</figcaption>
                        </figure>
                    </div>
                </>
            ))}
        </div>)
    );
}

export default Recommendation;