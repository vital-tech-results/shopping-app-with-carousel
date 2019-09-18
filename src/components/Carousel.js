import React from 'react';
import Carousel from 'nuka-carousel';

const Carousel1 = (props) => {

    const results = props.photos;
    results.length = 4;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo =>
            <Carousel url={`${photo.url}`} key={photo.id} />
        );
    }


    const listOfImages = <Carousel >
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" alt="" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" alt="" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" alt="" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" alt="" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" alt="" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" alt="" />
    </Carousel>
    return (
        <React.Fragment>
            <aside>

                {listOfImages}
            </aside>
        </React.Fragment >
    );

}

export default Carousel1;