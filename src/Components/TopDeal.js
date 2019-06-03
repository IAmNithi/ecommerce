import React, { Component } from 'react'

export default class TopDeal extends Component {
    render() {
        return (
            <div className="top-deal pb-3">
                <div className="container">
                    <h2 className="text-center pb-3">Top Deal</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="deal-content">
                                <img src="https://b3h2.scene7.com/is/image/BedBathandBeyond/20190508-BBB-Homepage-C15-2-08-US?$content$&wid=440&hei=440" className="deal-img" />
                                <div className="deal-text-content">
                                    <h5>New Clearance Added! Deals for Every Room in Your Home</h5>
                                    <p className="text-muted">Clearance.</p>
                                    <p className="text-muted">While supplies last.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
