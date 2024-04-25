export default function PageFooter(){
    return(
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
    )
}