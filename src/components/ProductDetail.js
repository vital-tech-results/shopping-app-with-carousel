import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';

const ProductDetail = props => {

    const photosFromAPI = props.photos;
    photosFromAPI.length = 4;
    let photos4 = photosFromAPI.map((photo) => {
        return photo.url;

    });

    return (
        <div className="flex">
            <div className="tall">
                {
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={4}
                    >
                        <Slider>
                            <Slide index={0}>{<img src={photos4[0]} alt="" />}</Slide>
                            <Slide index={1}>{<img src={photos4[1]} alt="" />}</Slide>
                            <Slide index={2}>{<img src={photos4[2]} alt="" />}</Slide>
                            <Slide index={3}>{<img src={photos4[3]} alt="" />}</Slide>
                        </Slider>
                        <div className="space-apart">
                            <ButtonBack className="button">Back</ButtonBack>
                            <ButtonNext className="button">Next</ButtonNext>
                        </div>
                    </CarouselProvider>
                }
            </div>
            <div className="details">
                <h1>Buying Options go here</h1>
                <img src="./img/product-detail.png" alt="" width="120px" />
            </div>
        </div>
    );

}
export default ProductDetail;