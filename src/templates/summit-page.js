import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactFormHorizontal from '../components/ContactFormHorizontal'
import { summitSponsorLevel } from '../components/SummitSponsorLevel'

import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'

import { connect } from "react-redux";

import LinkComponent from '../components/LinkComponent';

import leftArrow from '../img/svg/arrow-left.svg'
import TravelSupportPic from '../../static/img/summit/Tokyo-travel-support-pic.jpg'

export const SummitPageTemplate = ({
  isLoggedUser,
  header,
  form,
  topics,
  previousSummits,
  videoBanner,
  sponsorships,
}) => {

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
      </div>

      <main className="main">
        <div className="content">
          {header && header.display &&
            <section className="summit-header">
              <div className="header-left">
                <span className="upper-title">
                  {header.upperTitle}
                </span>
                <span className="title">
                  {header.title}
                </span>
                <span className="description" dangerouslySetInnerHTML={{ __html: header.description }}>
                </span>
                <span className="date">
                  <img src={(header.date.icon.extension === 'svg' || header.date.icon.extension === 'gif') && !header.date.icon.childImageSharp ?
                    header.date.icon.publicURL
                    :
                    !!header.date.icon.childImageSharp ? header.date.icon.childImageSharp.fluid.src : header.date.icon} /> {header.date.text}
                </span>
                <span className="location">
                  <img src={(header.location.icon.extension === 'svg' || header.location.icon.extension === 'gif') && !header.location.icon.childImageSharp ?
                    header.location.icon.publicURL
                    :
                    !!header.location.icon.childImageSharp ? header.location.icon.childImageSharp.fluid.src : header.location.icon} /> {header.location.text}
                </span>
                <LinkComponent className="button-cta" href="">Register Now<img src={leftArrow} alt="" /></LinkComponent>
              </div>
              <div className="header-right">
              <div className="hero-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/RhMJO82lDxc" frameborder="0" allowfullscreen></iframe>
                </div>
              {/*}
                <div className="picture">
                  <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                </div>
                */}
              </div>
            </section>
          }
          {topics && topics.display &&
            <section className="summit-topics">
              <span className="title">{topics.title}</span>
              <div className="icons">
                {topics.topicList.map((t, index) => {
                  return (
                    <div className="summit-icon" key={index}>
                      <img src={!!t.image.childImageSharp ? t.image.childImageSharp.fluid.src : t.image} />
                      <span>{t.text}</span>
                    </div>
                  )
                })}
              </div>
            </section>
          }

          <section className="sponsorship-levels">
              <span className="title">Sponsorship Levels</span>
              <table className="sponsor-table">
                <tr className="top-row">
                  <th></th>
                  <th>Member</th>
                  <th>Non-Member</th>
                  <th></th>
                </tr>
                <tr>
                  <th>Headline</th>
                  <td>$110,000</td>
                  <td>$125,000</td>
                  <td><a onClick={() => summitSponsorLevel(0)} href="#sponsorship-contact">Learn More</a></td>
                </tr>
                <tr>
                  <th>Premier</th>
                  <td>$75,000</td>
                  <td>$90,000</td>
                  <td><a onClick={() => summitSponsorLevel(1)} href="#sponsorship-contact">Learn More</a></td>
                </tr>
                <tr>
                  <th>Spotlight</th>
                  <td>$25,000</td>
                  <td>$35,000</td>
                  <td><a onClick={() => summitSponsorLevel(2)} href="#sponsorship-contact">Learn More</a></td>
                </tr>
                <tr>
                  <th>Exhibitor</th>
                  <td>$10,000</td>
                  <td>$15,000</td>
                  <td><a onClick={() => summitSponsorLevel(3)} href="#sponsorship-contact">Learn More</a></td>
                </tr>
                <tr>
                  <th>Startup</th>
                  <td>$5,000</td>
                  <td>$10,000</td>
                  <td><a onClick={() => summitSponsorLevel(4)} href="#sponsorship-contact">Learn More</a></td>
                </tr>
                <tr>
                  <th>Supporting</th>
                  <td>$2,500</td>
                  <td>$5,000</td>
                  <td><a onClick={() => summitSponsorLevel(5)} href="#sponsorship-contact">Learn More</a></td>
                </tr>
                <tr>
                  <td colSpan="4" className="join-row">Not a member? Learn how to 
                    <a onClick={() => summitSponsorLevel(5)} href="/join"> join the Openinfra Foundation</a>.
                  </td>
                </tr>
              </table>
              <span id="sponsorship-contact" className="subhead">Interested in Sponsoring?</span>
              <span className="description">Get in touch to learn how you can help the open source users, IT decision makers and passionate developers, administrators and operators building the modern open infrastructure stack. The detailed prospectus and contract will be live on December 15, 2021.</span>
              <ContactFormHorizontal />
            </section>

            <hr className="dividing-line" />

          {previousSummits && previousSummits.display &&
            <section className="summit-previous">
              <span className="title">
                {previousSummits.title}
              </span>
              <div className="summits">
                {previousSummits.summitList.map((summit, index) => {
                  return (
                    <div className="summit-wrapper" key={`summit-${index}`}>
                      <img src={!!summit.image.childImageSharp ? summit.image.childImageSharp.fluid.src : summit.image} />
                      <span className="location">{summit.location}</span>
                      <span className="date">{summit.date}</span>
                      <LinkComponent className="summit-cta" href={summit.button.link} >{summit.button.text} <img src={leftArrow} alt="" /></LinkComponent>
                    </div>
                  )
                })}
              </div>
            </section>
          }
          {videoBanner && videoBanner.display &&
            <section className="summit-video">
              <span className="title">{videoBanner.title}</span>
              <LinkComponent className="video-cta" href={videoBanner.button.link}>{videoBanner.button.text} <img src={leftArrow} alt="" /></LinkComponent>
            </section>
          }
          <section className="travel-support">
            <div className="text">
              <span className="title">Travel Support Program & Visa Letters</span>
              <span className="description">Need assistance getting to the Berlin Summit? We can help! If you are a key contributor to open infrastructure and your company does not cover the costs of your travel and accommodation, you can apply for the Travel Support Program. We can also provide you with a visa invitation letter from the Foundation to meet travel requirements.</span>
              <div className="links-row">
                <LinkComponent className="summit-cta" href="" >Apply For Support<img src={leftArrow} alt="" /></LinkComponent>
                <LinkComponent className="summit-cta" href="" >Get Visa Letter<img src={leftArrow} alt="" /></LinkComponent>
              </div>
            </div>
            <div className="picture">
              <img src={TravelSupportPic} />
            </div>

          </section>
          {form && form.display &&
            <section className="summit-form">
              <div className="summit-form-container">
                <div className="form-columns">
                  <div className="form-left">
                    <div className="picture">
                      <img src={!!form.image.childImageSharp ? form.image.childImageSharp.fluid.src : form.image} />
                    </div>
                    <span className="title-mobile">
                      {form.title}
                    </span>
                  </div>
                  <div className="form-right">
                    <span className="title-desktop">
                      {form.title}
                    </span>
                    <div>
                      <LinkComponent className="form-cta" href={form.button.link}>{form.button.text} <img src={leftArrow} alt="" /></LinkComponent>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        </div>
      </main>
    </div>
  )
}

SummitPageTemplate.propTypes = {
  header: PropTypes.object,
  form: PropTypes.object,
  topics: PropTypes.object,
  previousSummits: PropTypes.object,
  videoBanner: PropTypes.object,
  sponsorships: PropTypes.object,
}

const SummitPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <SummitPageTemplate
        isLoggedUser={isLoggedUser}
        header={post.frontmatter.header}
        form={post.frontmatter.form}
        topics={post.frontmatter.topics}
        previousSummits={post.frontmatter.previousSummits}
        videoBanner={post.frontmatter.videoBanner}
        sponsorships={post.frontmatter.sponsorships}
      />
    </Layout>
  )
}

SummitPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SummitPage)

export const summitPageQuery = graphql`
  query SummitPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }
        header {
          display
          title
          upperTitle
          description
          date {
            text
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          location {
            text
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
        form {
          display
          title
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          button {
            text
            link
          }
        }
        topics {
          display
          title
          topicList {
            text
            image {
            childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
            publicURL
            }
          }
        }
        previousSummits {
          display
          title
          summitList {
            location
            date
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            button {
              text
              link
            }
          }
        }
        videoBanner {
          display
          title
          button {
            text
            link
          }
        }
        sponsorships {
          display
          title
          text
          button {
            text
            link
          }
          previous {
            text
            link
          }
          sponsorList {
            alt
            image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
          }
        }
        footer {
          title
          subTitle
          button
          buttonText
          display
        }
      }
    }
  }
`
