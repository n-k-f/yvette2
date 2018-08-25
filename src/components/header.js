import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = () => (
  <header className='header'>
    <nav className="nav-primary">
      <Link className="nav-link nav-link--primary" to="/">Yvette</Link>
      <Link className="nav-link nav-link--primary" to="/">Shows</Link>
      <Link className="nav-link nav-link--primary" to="/">Audio</Link>
      <Link className="nav-link nav-link--primary" to="/">Info</Link>
    </nav>
    <nav className="nav-social">
      <a href="#" className="nav-link nav-link--social">Facebook</a>
      <a href="#" className="nav-link nav-link--social">Twitter</a>
      <a href="#" className="nav-link nav-link--social">Instagram</a>
      <a href="#" className="nav-link nav-link--social">Bandcamp</a>
      <a href="#" className="nav-link nav-link--social">Soundcloud</a>
      <a href="#" className="nav-link nav-link--social">Spotify</a>
    </nav>
  </header>
)

export default Header
