import React, { Component } from 'react'

export default class Brands extends Component {
    render() {
        return (
            <div className="brands mb-3">
                <div className="container">
                    <h3 className="text-center">Explore our Other Brands</h3>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="brand-logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/1200px-Levis-logo-quer.svg.png" className="brand-logo-img"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="brand-logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Gap_Inc..svg" className="brand-logo-img"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="brand-logo">
                                <img src="https://pridefamilybrands.com/wp-content/uploads/2015/03/castelle-logo.png" className="brand-logo-img"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="brand-logo">
                                <img src="https://www.tripadvisor.co.za/img2/eateries/Chope_3.25.2019.png" className="brand-logo-img"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="brand-logo">
                                <img src="https://www.tajhotels.com/content/dam/tajhotels/logos/taj-logos/Khazana-Logo%20gold.png" className="brand-logo-img"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="brand-logo">
                                <img src="https://logos-download.com/wp-content/uploads/2016/11/GAS_Jeans_logo_wordmark.png" className="brand-logo-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
