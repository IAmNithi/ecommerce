import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
                <div className="header">
                <div className="container">
                <header className="blog-header py-3">
  <div className="row flex-nowrap justify-content-between align-items-center">
    <div className="col-8">
      <a className="blog-header-logo text-logo" href="#">BumbleBee</a>
    </div>
    <div className="col-4 pt-1">
      <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/5e/fc/88/5efc88c6-0186-8c7e-212c-c7d9b59a7549/AppIcon-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0.png/1200x630bb.png" className="img-responsive" />
    </div>
  </div>
</header>

<div className="nav-scroller py-1 mb-2">
  <nav className="nav d-flex justify-content-between">
    <a className="p-2" href="#">Home</a>
    <a className="p-2" href="#">Shop</a>
    <a className="p-2" href="#">Blog</a>
    <a className="p-2" href="#">Features</a>
    <a className="p-2" href="#">Sign In/Up</a>
    <a className="p-2" href="#">My Account</a>
    <a className="p-2" href="#">Cart</a>
  </nav>
</div>
</div>
                </div>
        )
    }
}
