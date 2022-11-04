import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sponsoredProjects from "../../content/sponsored-projects.json";
import { getSubProjectById } from '../../utils/sponsoredProjects';
import { getEnvVariable, MEMBERS_SUBPROJECT_ID } from '../../utils/envVariables';

const PlatinumMembersSection = class extends React.Component {
    
    render() {

        const subProject = getSubProjectById(sponsoredProjects, parseInt(getEnvVariable(MEMBERS_SUBPROJECT_ID)));

        const settings1 = {
            speed: 120000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 12,
            infinite: true,
            arrows: false,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 12,
                    infinite: true
                  }
                },
              ]
        };
        const settings2 = {
            speed: 150000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 15,
            infinite: true,
            arrows: false,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 15,
                    infinite: true
                  }
                },
              ]
        };
        return (
            <div className="container">
                <h3 className="home-v2-community-subheader">Backed By</h3>
                <h2 className="home-v2-header home-v2-community-header">Our Members</h2>
                <p className="home-v2-community-paragraph">The OpenInfra Foundation is supported by a strong network of some of the largest organizations in the world. These open source leaders champion open infrastructure and understand the vital importance it plays in their business.</p>
                <div className="home-v2-platinum-container">
                { subProject.sponsorship_types.sort((a, b) => a.order - b.order).map((t, tierIndex) => {
                        if (t.name == "Platinum Members") {
                            return (
                                    <span key={`company-tier-${tierIndex}`}>
                                        <Slider {...settings1}>
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index < 4) {
                                                return (
                                                    <div className="home-v2-platinum-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-platinum-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index < 4) {
                                                return (
                                                    <div className="home-v2-platinum-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-platinum-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index < 4) {
                                                return (
                                                    <div className="home-v2-platinum-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-platinum-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        </Slider>
                                    </span>
                            )
                        }
                    }) }
                </div>
                <div className="home-v2-platinum-container home-v2-platinum-container-offset">
                { subProject.sponsorship_types.sort((a, b) => a.order - b.order).map((t, tierIndex) => {
                        if (t.name == "Platinum Members") {
                            return (
                                    <span key={`company-tier-${tierIndex}`}>
                                        <Slider {...settings2}>
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index >= 4) {
                                                return (
                                                    <div className="home-v2-platinum-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-platinum-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index >= 4) {
                                                return (
                                                    <div className="home-v2-platinum-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-platinum-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index >= 4) {
                                                return (
                                                    <div className="home-v2-platinum-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-platinum-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        </Slider>
                                    </span>
                            )
                        }
                    }) }
                </div>
            </div>
        );
      }
}

export default PlatinumMembersSection