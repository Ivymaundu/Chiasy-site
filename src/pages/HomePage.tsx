import './HomePage.css';

import { Carousel} from 'react-bootstrap';

export default function LandingPage() {

    return (
        <div className="container-fluid pt-3" >
            <section>
                <Carousel>

                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carousel3.jpg"
                            alt="Third slide"
                            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carousel1.jpg"
                            alt="First slide"
                            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover'}}
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carousel2.jpg"
                            alt="Second slide"
                            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                    
                </Carousel>
            </section>
        </div>
    );
}
