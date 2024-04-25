import './Contact.css';

export default function ContactUs() {
    return (

        <div className="container-fluid pt-3">
            <section className='sect1'>
                <div className="overlay">
                    <h1>Welcome to Our Website</h1>
                    <p>Discover amazing products and services</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="card">
                        <h2>Contact Us</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" required className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Surname</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" required></textarea>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
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
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-github"></i>
                            </div>
                        </div>
                    </div>
                </section>

            </footer>

        </div>

    )
}