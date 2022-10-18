import React from 'react'
import LinkComponent from './LinkComponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

render() {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        arrows: false
    };
    let { upperTitle, title, subTitle, buttons, isHome, link } = this.props;

    return (     
      <main className="main">
        <section className="hero-main is-primary hero home-v2-hero">
          <div className="hero-body">
            <div className="container">
              {isHome ?
              <div> 
                <div className="hero-content">
                  {upperTitle && <div className="hero-subhead">We Are OpenInfra</div> }                
                  <h3 className="hero-title">Building The Next Decade of <span className="header-yellow">Open</span> Infrastructure</h3> 
                  <div className="hero-entry">
                    <p>We are a <b>non-profit organization</b> providing a <b>neutral, open environment</b> for organizations, developers, and users to build open source infrastructure software together. </p>
                  </div>
                  <div className="hero-actions">
                    <div href='/' className="hero-primary-btn">
                      <span>Host a Project</span>
                    </div>                        
                    <div href='/' className="hero-secondary-btn">
                      <span>Join Us</span>
                    </div>                        
                  </div>                
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div className="home-v2-numbers-box">
                        <div className="home-v2-numbers-inner home-v2-numbers-red">
                            <p className="home-v2-numbers-subheading">OpenStack is Deployed On</p>
                            <p className="home-v2-numbers-title">40M Cores</p>
                            <p className="home-v2-quote-subtitle">Around The World in 2022</p>
                        </div>
                    </div>
                    <div className="home-v2-numbers-box">
                        <div className="home-v2-numbers-inner home-v2-numbers-yellow">
                            <p className="home-v2-numbers-subheading">We are Powered By</p>
                            <p className="home-v2-numbers-title">560+</p>
                            <p className="home-v2-quote-subtitle">Supporting Organizations</p>
                        </div>
                    </div>
                    <div className="home-v2-numbers-box">
                        <div className="home-v2-numbers-inner home-v2-numbers-green">
                            <p className="home-v2-numbers-subheading">We Support</p>
                            <p className="home-v2-numbers-title">110,000+</p>
                            <p className="home-v2-quote-subtitle">Community Members Globally</p>
                        </div>
                    </div>
                    <div className="home-v2-numbers-box">
                        <div className="home-v2-numbers-inner home-v2-numbers-blue">
                            <p className="home-v2-numbers-subheading">Our Community Spans</p>
                            <p className="home-v2-numbers-title">180+</p>
                            <p className="home-v2-quote-subtitle">Countries</p>
                        </div>
                    </div>
                    </Slider>
                    <div className="home-v2-numbers-btn-container">
                    <button className="numbers-button" onClick={this.previous}>
                        <img src="/img/homeV2/prev-arrow.svg" />
                    </button>
                    <button className="numbers-button" onClick={this.next}>
                        <img src="/img/homeV2/next-arrow.svg" />
                    </button>
                </div>
              </div>
              :
              <div className="hero-project-content">
                <h3 className="hero-project-title">{title}</h3> 
                <div className="hero-project-entry">
                  {subTitle}
                </div>
                {link &&
                  <React.Fragment>
                    <br />
                    <div className="hero-project-entry">
                      <p>
                        <LinkComponent href={link.url} className="hero-link"> {link.text} <i className="right"></i></LinkComponent>
                      </p>
                    </div>
                  </React.Fragment>
                }
              </div>              
              }              
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Header
