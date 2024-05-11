import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default function Layout() {
    return (
        <div className="container-fluid">
            <header className="layout-header">
                <Navbar variant="dark" expand="lg" style={{backgroundColor:'rgb(22, 117, 113)',borderBottomLeftRadius: '10%'}}>
                    <Container>
                        <Navbar.Brand href="#">Chiasy Supplies</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                <Nav.Link href="/Discount_sale">Discount Sale</Nav.Link>
                                <Nav.Link href="#">Awareness journey</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                                <Nav.Link href="/products">SkinCare products</Nav.Link>
                                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                
                            </Nav>
                            <Nav className="ml-auto">
                                    <i className="bi bi-box-arrow-in-right"></i>
                                    <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <main>
                    <Outlet />
                </main>
            </header>
        </div>
    )
}