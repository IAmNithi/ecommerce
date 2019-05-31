import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <div className="container">
                    <div className="slider-main">
                        <div className="col-12 no-padding slider-border">
                        <div className="slider-corosal text-center">
                        <div className="row">
                                    <div className="col-md-4 no-padding centered-content">
                                        <h2>MacBook Pro</h2>
                                        <p>More power. More performance. More pro.</p>
                                    </div>
                                    <div className="col-md-8 no-padding">
                                        <img src="https://www.apple.com/v/mac/home/af/images/overview/hero/macbook_pro__c6uspyy0f8sy_large_2x.jpg" className="slider-img"/>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
