import React, { Component } from 'react'

export default class AddBanner extends Component {
    render() {
        return (
            <div className="AddBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <h3 className="add-text">50% Off Apparel and Fan Shop*</h3>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <span className="online-card">Online Only</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
