import React, { Component } from "react";


class Footer extends Component {
  render() {
    const {
      footerRef
    } = this.props;
    return (
      <nav ref={footerRef} id="footer" className="navbar-fixed-bottom">
        <div className="copyright-tag">Copyright © 2023. All Rights Reserved.</div>
      </nav>
    );
  }
}
export default Footer;