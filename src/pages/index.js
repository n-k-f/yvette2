import React from 'react'
import Link from 'gatsby-link'
import releases from '../data/releases'
import Audio from './homepage/Audio'
import Hero from './homepage/Hero'
import heroImage from "../assets/Hero.jpg"

const IndexPage = () => (
  <div>
    <Hero 
      backgroundImage={heroImage}
      primaryText="New Album Coming Soon"
    />


    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}



    <h2>Shows</h2>
    <Audio releases={releases} />
  </div>
)

export default IndexPage
