import React, { Component } from 'react'

export default class Trending extends Component {
    render() {
        return (
            <div className="trending">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="trending-content">
                                <img src="https://a.sellpoint.net/a/NYv096vk.jpg" className="img-trending" />
                                <div className="trending-text">
                                    <h3>Gifts for Grill Master</h3>
                                    <p>Shop Now</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
