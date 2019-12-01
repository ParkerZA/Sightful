import React from "react"
import "./index.css"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

function expand(e) {
  const expand = e.target.parentNode.parentNode
  expand.classList.add("expand")
  console.log(expand)
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="background">
      <div className="title">
        <div className="logo-image"></div>
        <h1>
          <span className="title-primary">Sightful Dynamics</span>
          <span className="title-secondary">
            Innovative and Simplified Payroll Solutions
          </span>
        </h1>
        <div className="buttons">
          <div className="about-us-button-container">
            <a href="#" class="btn btn-white btn-animated">
              About Us
            </a>
          </div>
          <div className="about-us-button-container">
            <a href="#" class="btn btn-white btn-animated">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>

    <section className="about-us">
      <div className="about-us-header">
        <h3>About Us</h3>
      </div>

      <div className="about">
        <p>
          Sightfull Dynamics Payroll & HR’s outsourcing service is designed to
          relieve small and medium-sized businesses of the burden of running a
          payroll department. We allow you to focus on your strengths, knowing
          that your Payroll is efficiently, confidentially and accurately
          handled by an experienced Payroll Provider.
        </p>
        <br></br>
        <div className="stock5"></div>
        <p>
          The "Sightfull Dynamics" way has an impact on everything we do. We are
          profoundly conscious of the difference we can make, and the difference
          that comes from serving you with reliability and accuracy being the
          corner stone of our relationship. The "Sightfull Dynamics" Way is a
          unique way of offering value. It’s not what one does, but how one does
          it that really counts.
        </p>
      </div>
    </section>

    <br></br>

    <section className="offer">
      <div className="big-image">
        <div className="inner-what-we-mean">
          <div className="what-we-mean-expanded"></div>
          <div className="what-we-mean-expand">
            <h3 onClick={expand}>What we mean...</h3>
          </div>
        </div>
        <div className="inner-what-we-offer">
          <div className="what-we-offer-expand">
            <h3 onClick={expand}>What we offer...</h3>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
