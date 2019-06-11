import React, { Component } from 'react'

export default class Trending extends Component {
    render() {
        return (
            <div className="trending mb-3">
                <div className="container">
                <h4 className="text-center">See What's New + Trending</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="trending-content mt-even">
                                <img src="https://a.sellpoint.net/a/NYv096vk.jpg" className="img-trending" />
                                <div className="trending-text">
                                    <h5>Gifts for Grill Master</h5>
                                    <p>Shop Now</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="trending-content mt-odd">
                                <img src="https://typewriter.imgix.net/u/54915065-8596-4c29-bb7a-e6320dbb9698/p/35182/luggage-at-highlander-summer-camp-for-boys-and-girls.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&crop=faces&fit=crop&w=1000" className="img-trending" />
                                <div className="trending-text">
                                    <h5>Great Luggage for Summer Getaways</h5>
                                    <p>Shop Now</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="trending-content mt-even">
                                <img src="https://thumbor.thedailymeal.com/76KGq8CerjIeoiuRJdUdrMl78xM=/870x565/filters:focal(960x299:961x300)/https://www.thedailymeal.com/sites/default/files/story/2018/Kitchen_Tools_HERO.jpg" className="img-trending" />
                                <div className="trending-text">
                                    <h5>Summer Kitchen Tools and Gadgets</h5>
                                    <p>Shop Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
