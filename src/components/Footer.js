import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    
  <>
  <footer className="footer-section text-center text-lg-start text-white bg" style={{backgroundColor : '#0f2039'}}>
<div className="container">
    <section>
      <div className="container text-center text-md-start py-5">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 p-0">
            
            <img src={require('../images/HawkGlide-White_logo.png')}  style={{width: '85%'}}/>
           
            <div className='socials py-4 pt-4 pt-0 footer'>
              <a href="https://facebook.com/" target="_blank"><img style={{width:'44px'}} src={require('../images/facebook.png')} className="px-2" /></a>
              <a href="https://twitter.com/" target="_blank"><img style={{width:'44px'}} src={require('../images/twitter.png')} className="px-2" /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener"><img style={{width:'44px'}} src={require('../images/instagram.png')} className="px-2" /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener"><img style={{width:'44px'}} src={require('../images/linkedin.png')} className="px-2 " /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener"><img style={{width:'44px'}} src={require('../images/youtube.png')} className="px-2 " /></a>

            </div>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto" style={{paddingLeft : 60}}>
          <p className="text-white"><strong>Company</strong></p>
            <p>
              <Link to={"/"} className="text-white text-decoration-none">About us</Link>
            </p>
            <p> <Link to={"/"} className="text-white text-decoration-none">What's New</Link></p>
            <p><Link to={"/"} className="text-white text-decoration-none">Careers</Link></p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto" style={{paddingLeft : 60}}>
          <p className="text-white"><strong>Resources</strong></p>
            <p><Link to={"/"} className="text-white text-decoration-none">Blog</Link></p>
            <p><Link to={"/"} className="text-white text-decoration-none">FAQs</Link></p>
            <p><Link to={"/"} className="text-white text-decoration-none">Pricing</Link></p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
          <p className="text-white"><strong>Newsletter Subscription</strong></p>
        </div>
          {/* Grid column */}
        </div>
        
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    {/* Grid row */}
    </div>
    <div className='copyrights py-4' style={{borderTop : '1px solid'}}>
        <div className='container'>
            <div className='row'>
      <div className='col-md-6'>
      <p className='text-white m-0'>Copyright  2024. All rights reserved</p>

      </div>
      <div className='col-md-6' style={{textAlign : 'right'}}>
        <div className='row d-flex justify-content-end'>
        <p className='w-auto m-0'><Link to={"https://www.marqetrix.com/terms-and-conditions/"} target="_blank" className="text-white text-decoration-none">Terms and Conditions</Link></p>
            <p className='w-auto m-0'><Link to={"https://www.marqetrix.com/terms-and-conditions/"} target="_blank" className="text-white text-decoration-none" style={{marginLeft: 15}}>Privacy Policy</Link></p>
        </div>
        </div>
    </div>
    </div>

    
    
    {/* Copyright */}
    </div>
  </footer>
  </>

  )
}
