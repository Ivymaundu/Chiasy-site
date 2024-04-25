import './About.css';


export default function About() {
    return (
        <div className="container-fluid pt-4">
            <section className="row">
                <div className="col-md-6">
                    <h1>OUR HISTORY</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        modi sed fugiat, assumenda possimus porro laboriosam atque
                        accusamus. Voluptatibus dolores omnis, velit, adipisci molestias
                        corporis cumque ipsam voluptatem molestiae dignissimos eveniet
                        reprehenderit.
                    </p>
                </div>
                </section>
                <section className="row pt-5">
                <div className="col-md-6">
                    <div className="image-container">
                        <img
                            src="/images/aboutus1.jpg"
                            alt="We take care of your health for you"
                            className="img-fluid"
                        />
                    </div>
                </div>
          
        
            <div className="col-md-6">
                    <h1>WHAT WE DO</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                        amet ad ducimus atque similique corrupti vitae maxime assumenda,
                        vero quia, deserunt totam aspernatur dolor veniam blanditiis sunt
                        harum suscipit necessitatibus incidunt rerum obcaecati reiciendis
                        quis et. Quibusdam atque quasi eos!
                    </p>
                </div>
            </section>
            <section className='pt-5'>
               
            <div className="container">
      <h2>Our Branches</h2>
      <ul className="list-unstyled">
        <li><a href="#" style={{textDecoration: 'none'}}>Nairobi</a></li>
        <li><a href="#" style={{textDecoration: 'none'}}>Mombasa</a></li>
        <li><a href="#" style={{textDecoration: 'none'}}>Uganda</a></li>
        <li><a href="#" style={{textDecoration: 'none'}}>SouthAfrica</a></li>
      </ul>
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
                                exclusive offers.....g
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

    )
}