import React from "react"
import "./index.css"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

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

    <section className="what-we-offer">
      <h2>What We Offer</h2>
      <p>Payroll is payroll … right? Not quite.</p>
      <p>
        The payroll arena has developed into a minefield due to constant changes
        in taxation and labour legislation. We can administer your payroll to
        ensure that you comply with all regulations and ensure that you do not
        face the risk of penalties from the South African Revenue Service.
      </p>
      <strong>
        <p>
          Sightfull Dynamics provides a TOTAL complete and comprehensive
          personal service for our clients by offering specialised tailor made
          solutions and services in the outsourcing and processing of your
          salaries and wages for an incredibly low, low, price.
        </p>
      </strong>
      <div className="stock2"></div>
      <p>
        With Sightfull Dynamics, you don’t engage with a Service Provider; you
        get a committed business partner who views your business as if it was
        our own.
      </p>
      <p>
        For us, it’s all about being your “Best Partner”. We continue to provide
        our clients with better and more innovative solutions and we work
        closely with our clients to identify their requirements. It is our
        desire to develop mutually beneficial long term Relationships.
      </p>
      <p>
        The “Sightfull Dynamics” way has an impact on everything we do. We are
        profoundly conscious of the difference we can make, and the difference
        that comes from serving you with reliability and accuracy being the
        corner stone of our relationship. The “Sightfull Dynamics” Way is a
        unique way of offering value. It’s not what one does, but how one does
        it that really counts.
      </p>
    </section>
  </Layout>
)

export default IndexPage
