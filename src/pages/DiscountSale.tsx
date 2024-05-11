import React from 'react';

const DiscountSalePage: React.FC = () => {
    const backgroundStyle = {
        backgroundImage: "url('/images/discount_bgrnd.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
      };
    return (
        <div className="container-fluid" style={backgroundStyle}>
            <h1 className="text-center my-5"><i className="bi bi-lightning "></i>Discount Sale
            <i className="bi bi-fire text-warning"></i></h1>

            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $100</span>
                                <span className="text-success">Discounted Price: $75</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $80</span>
                                <span className="text-success">Discounted Price: $60</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $100</span>
                                <span className="text-success">Discounted Price: $75</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $80</span>
                                <span className="text-success">Discounted Price: $60</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $100</span>
                                <span className="text-success">Discounted Price: $75</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $80</span>
                                <span className="text-success">Discounted Price: $60</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $100</span>
                                <span className="text-success">Discounted Price: $75</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Name</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-muted">Original Price: $80</span>
                                <span className="text-success">Discounted Price: $60</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default DiscountSalePage;
