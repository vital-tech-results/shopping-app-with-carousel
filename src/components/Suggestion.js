import React from 'react';

// img src is passed props from Suggestion list.js
const Suggestion = props => (

    <div className="photo-container">
        <ul>
            <li>
                <figure>
                    <img src={props.url} alt="" />
                    <figcaption>{props.name}</figcaption>
                    <figcaption>${props.price}</figcaption>
                </figure>
            </li>
        </ul>
    </div >
);

export default Suggestion;