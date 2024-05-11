import { Carousel} from 'react-bootstrap';
import CategoryCardList from './CategoryList';
import './Home.css'
import FAQ from './FAQS';


interface Review {
    id: number;
    author: string;
    comment: string;
    image: string;
}

export default function LandingPage() {

    const Categories = [
        { id: 1, title: 'Category 1', description: 'Skin Care Products', imageSrc: '/images/category1.jpg' },
        { id: 2, title: 'Category 2', description: 'Seeds and Nuts', imageSrc: '/images/category2.jpg' },
        { id: 3, title: 'Category 3', description: 'coffee', imageSrc: '/images/category3.jpg' },
        { id: 2, title: 'Category 4', description: 'Description of category 2', imageSrc: '/images/category2.jpg' },
        { id: 3, title: 'Category 5', description: 'Description of category 3', imageSrc: '/images/category3.jpg' },
        { id: 2, title: 'Category 6', description: 'Description of category 2', imageSrc: '/images/category2.jpg' },
        { id: 3, title: 'Category 7', description: 'Description of category 3', imageSrc: '/images/category4.jpg' },
        { id: 2, title: 'Category 8', description: 'Description of category 2', imageSrc: '/images/category1.jpg' },
    ];


    const reviews: Review[] = [
        { id: 1, author: 'John Doe', comment: 'Great product, highly recommend!', image: '/images/review1.jpg' },
        { id: 2, author: 'Jane Smith', comment: 'Excellent service, very satisfied.', image: '/images/review2.jpg' },
        { id: 3, author: 'Alice Johnson', comment: 'Wonderful experience, will buy again.', image: '/images/review3.jpg' },
        { id: 1, author: 'John Doe', comment: 'Great product, highly recommend!', image: '/images/review1.jpg' },
        { id: 2, author: 'Jane Smith', comment: 'Excellent service, very satisfied.', image: '/images/review2.jpg' },
        { id: 3, author: 'Alice Johnson', comment: 'Wonderful experience, will buy again.', image: '/images/review3.jpg' },
    ];

    const itemsPerPage = 3;
    const pageCount = Math.ceil(reviews.length / itemsPerPage);

    const pages = [];
    for (let i = 0; i < pageCount; i++) {
        const start = i * itemsPerPage;
        const end = start + itemsPerPage;
        const pageReviews = reviews.slice(start, end);
        pages.push(pageReviews);
    }

    return (
        <div className="container-fluid pt-3" >
            <section>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carousel3.jpg"
                            alt="Third slide"
                            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carousel1.jpg"
                            alt="First slide"
                            style={{ height: '400px', maxHeight: '400px', objectFit: 'cover' }}
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/carousel2.jpg"
                            alt="Second slide"
                            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>

                </Carousel>
            </section>
            <section >
                <div className="row justify-content-center text-center pt-4">
                    <div className="col-lg-8">
                        <h1>Source our health and fitness products at affordable prices</h1>
                        <p className="mb-2">Tested and Approved products</p>
                        <i className="bi bi-alarm"></i>
                        <strong><p>Glow O'clock</p></strong>
                    </div>
                </div>
            </section>

            <section >
                <h1 className="row justify-content-center text-center pt-4" style={{ color: 'rgb(22, 117, 113)' }}> Product Categories</h1>
                <CategoryCardList categories={Categories} />
            </section>


            <section>
                <h2 className='row justify-content-center text-center pt-5' >Customer Reviews</h2>
                <Carousel indicators={false} prevLabel="" nextLabel="">
                    {pages.map((page, index) => (
                        <Carousel.Item key={index}>
                            <div className="row">
                                {page.map((review, i) => (
                                    <div key={i} className="col-md-4 pt-4">
                                        <div className="card">
                                            <img src={review.image} className="card-img-top" alt={`Image for ${review.author}`} style={{ height: '400px', objectFit: 'cover' }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{review.author}</h5>
                                                <p className="card-text">{review.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </section>

            <section className='row justify-content-center text-center pt-5'>
                <p>Not sure where to start?<br></br>
                    <a href="#" style={{ textDecoration: 'none' }}>Talk to one of our proffesionals for guidance</a></p>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <FAQ />
                        </div>
                    </div>
                </div>
            </section>

            <footer className='pt-4'>
                <section className='footer' >
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4>Info</h4>
                            <ul className="links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Explore</h4>
                            <ul className="links">
                                <li><a href="#">Newbies</a></li>
                                <li><a href="#">Latest Discounts</a></li>
                                <li><a href="#">Exercise Routines</a></li>
                                <li><a href="#">Frequently Purchased</a></li>
                                <li><a href="#">What's Trending</a></li>
                                <li><a href="#">Become A Member</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Legal</h4>
                            <ul className="links">
                                <li><a href="#">Customer Agreement</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">GDPR</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Media Kit</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Newsletter</h4>
                            <p>
                                Subscribe to our newsletter for a weekly dose
                                of news, updates, helpful tips, and
                                exclusive offers.
                            </p>
                            <form action="#">
                                <input type="text" placeholder="Your email" required />
                                <button type="submit">SUBSCRIBE</button>
                            </form>
                            <div className="icons">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-whatsapp"></i>
                                <i className="bi bi-twitter-x"></i>
                                <i className="bi bi-linkedin"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-github"></i>
                            </div>
                        </div>
                    </div>
                </section>

            </footer>
        </div>
    );
}
