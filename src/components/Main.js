import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
              Strong Roots Capital LLC is a proprietary trading firm
              focused on quantitatively trading cryptocurrencies for
              superior risk-adjusted and tax-advantaged returns,
              founded by <a href="https://linkedin.com/in/eric-crosson/">Eric Crosson</a>.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
            <p>
                <a className="icon fa-map-marker fa-fw">
                    <span className="label">Location</span>
                </a>
                &nbsp; Strong Roots Capital LLC <br></br>
                2020 E Ben White Blvd Ste 240-4104 <br></br>
                Austin TX 78741
            </p>
            <p>
                <a className="icon fa-phone fa-fw">
                    <span className="label">Phone</span>
                </a>
                &nbsp; +1 (281) 954-4271
            </p>
            <p>
                <a className="icon fa-envelope fa-fw">
                    <span className="label">Email</span>
                </a>
                &nbsp; strongrootscapital@protonmail.com
            </p>
          {close}
        </article>

        <article
          id="future"
          className={`${this.props.article === 'future' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Future</h2>
          <p>
              We'll be offering some of our proprietary tools as
              public SaaS soon - all that's left is softening the
              edges and ironing out the legal details. Stay tuned!
          </p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
