import React, {useState, useEffect} from 'react';
import './index.css';
import {Carousel, Image} from 'react-bootstrap';

function SlideShow() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://ghumo-backend.herokuapp.com/api/crousel")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setImages(data);
        })
        .catch(err => console.log(err));
    },[]);

    return (
        <Carousel>
            {images.map(item => {
                return  <Carousel.Item key={item.id} interval={1000}>
                            <Image src={item.url} className="slide"/>
                            <Carousel.Caption>
                                <p>{item.title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
            })}
        </Carousel>
    );
}

export default SlideShow;
