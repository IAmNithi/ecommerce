import React, { Component } from 'react'

export default class Brands extends Component {
    render() {
        return (
            <div className="brands mb-3">
                <div className="container">
                    <h3 className="text-center">Brands</h3>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="brand-logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/1200px-Levis-logo-quer.svg.png" className="brand-logo-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
