import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
                <div className="container">
                <div className="footer">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-cnt">
                                <h4>GET IN TOUCH</h4>
                                <ul>
                                    <li>1800-00-000</li>
                                    <li>Email Us</li>
                                    <li>Facebook</li>
                                    <li>FAQ</li>
                                    <li>Update your Email Preferance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="footer-cnt">
                                <h4>Shipping and Returns</h4>
                                <ul>
                                    <li>Ship To</li>
                                    <li>Shipping Info</li>
                                    <li>Reserve Online, Pick up In-Store</li>
                                    <li>Same Day Delivery</li>
                                    <li>International Shipping</li>
                                    <li>Returns</li>
                                    <li>Product Recall Information</li>
                                    <li>Welspun Returns</li>
                                    <li>Rebates</li>
                                    <li>Price Match Promise</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
