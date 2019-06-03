import React, { Component } from 'react'

export default class TopDeal extends Component {
    render() {
        return (
            <div className="top-deal pb-3">
                <div className="container">
                    <h2 className="text-center pb-3">Top Deal</h2>
                    <div className="row">
                        <div className="col-md-6 pb-3">
                            <div className="deal-content">
                                <img src="https://b3h2.scene7.com/is/image/BedBathandBeyond/20190508-BBB-Homepage-C15-2-08-US?$content$&wid=440&hei=440" className="deal-img" />
                                <div className="deal-text-content">
                                    <h5>New Clearance Added! Deals for Every Room in Your Home</h5>
                                    <p className="text-muted">Clearance.</p>
                                    <p className="text-muted">While supplies last.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-3">
                            <div className="deal-content">
                                <img src="https://b3h2.scene7.com/is/image/BedBathandBeyond/US-20190529-BBB-Homepage-C15-2-05?$content$&wid=636&hei=636" className="deal-img" />
                                <div className="deal-text-content">
                                    <h5>$25 Gift Card with $200 Lenox® Purchase</h5>
                                    <p className="text-muted">Savings Event.</p>
                                    <p className="text-muted">Valid thru 6/10. Calculated after coupons and before tax and shipping.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-3">
                            <div className="deal-content">
                                <img src="https://b3h2.scene7.com/is/image/BedBathandBeyond/US-20190529-BBB-Homepage-C15-2-02?$content$&wid=440&hei=440" className="deal-img" />
                                <div className="deal-text-content">
                                    <h5>5-Piece Reversible Quilt Sets for $39.99!</h5>
                                    <p className="text-muted">Closeout.</p>
                                    <p className="text-muted">While supplies last.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-3">
                            <div className="deal-content">
                                <img src="https://b3h2.scene7.com/is/image/BedBathandBeyond/US-20190529-BBB-Homepage-C15-2-06?$content$&wid=440&hei=440" className="deal-img" />
                                <div className="deal-text-content">
                                    <h5>Google Wifi Deal: Now $99!</h5>
                                    <p className="text-muted">Savings Event.</p>
                                    <p className="text-muted">Valid thru 6/30. Excluded from Coupon.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
