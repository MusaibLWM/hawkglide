// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
import Rating from 'react-rating-stars-component';
import Faq from '../components/Faq';

const StarRating = ({ rating }) => {
    return (
      <Rating
        count={5}
        value={rating}
        size={24}
        activeColor="#ffd700"
        isHalf={true}
        edit={false}
      />
    );
  };

const Home = () => {
  return (
    <>
      <section className='hero-section-bar py-5'>
        <div className="container">
        <div className="row align-items-center">
            {/* Text on the left side */}
            <div className="col-md-6">
                <div className="text-container">
                <h1 className='display-4 py-2'>Transform Your <span className="branding-2 font-weight-bold">Social Media Strategy</span> with Hawk Glide</h1>
                <h2 className='fs-2 py-2 branding-1'>AI-Powered Banner Creation, Content Generation, and Seamless Posting!</h2>
                <div className='links-tab py-2 my-5'>
                <Link to={'/'} className="button-branding-1">
                    Start your 30-Day Free Trial
                </Link>
                <Link to={'/'} className="button-branding-2" style={{marginLeft : 15}}>
                    Watch Video
                </Link>
                </div>
                {/* Add any other text or components as needed */}
                </div>
            </div>

            {/* Image on the right side */}
            <div className="col-md-6">
                <div className="image-container">
                <img
                    src={require('../images/top-banner-right.jpg')}
                    alt="Hero Banner Image"
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
            </div>
      </section>
      <section className='service-section py-5 section-gray'>
        <div className="container">
        <div className='services-title text-center'>
            <p className='fs-4 font-weight-bold branding-1 my-2'>Join Over 1,000 Forward-Thinking Business Owners</p>
            <p className='my-1'>Who've Transformed their Social Media</p>
            <p>Presence in <strong>Just 180 Days</strong> with Hawk Glide!</p>
        </div>
        <div className='row' style={{justifyContent : 'center'}}>
            
                <div className="col-md-3 bg-white m-3 p-4 rounded-4" style={{boxShadow : 'rgba(0, 0, 0, 0.09) 0px 0px 2px'}} >
                    <div>
                    <img src={require('../images/seccret-room.png')} alt="Product 1" className='pb-2' style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div>
                    
                    <p>My online presence has never been stronger. Highly recommend!</p>
                    <p className='font-weight-bold my-0'>Sarah Johnson</p>
                    <p className='fs-6 my-0'>Founder Secret Room</p>
                    <StarRating rating={5} />
                    </div>
                </div>

                <div className="col-md-3 bg-white m-3 p-4 rounded-4" style={{boxShadow : 'rgba(0, 0, 0, 0.09) 0px 0px 2px'}}>
                    <div>
                    <img src={require('../images/shubamMotivala.png')} alt="Product 2" className='pb-2' style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div>
                    
                    <p>My online presence has never been stronger. Highly recommend!</p>
                    <p className='font-weight-bold my-0'>Khushbu Agarwal</p>
                    <p className='fs-6 my-0'>COO - Shubham Motiwala</p>
                    <StarRating rating={5} />
                    </div>
                </div>

                <div className="col-md-3 bg-white m-3 p-4 rounded-4" style={{boxShadow : 'rgba(0, 0, 0, 0.09) 0px 0px 2px'}}>
                    <div>
                    <img src={require('../images/ohstree.png')} alt="Product 3" className='pb-2' style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div>
                    
                    <p>My online presence has never been stronger. Highly recommend!</p>
                    <p className='font-weight-bold my-0'>Sarfaraz Ansari</p>
                    <p className='fs-6 my-0'>CEO - Oh Stree</p>
                    <StarRating rating={5} />
                    </div>
               
            </div>
        </div>
        </div>
      </section>
      <section className='content-section py-5'>
        
        <div className="container">
        
        <div className='row align-items-center py-4'>
            <div className='col-md-6'>
            <h3 className='branding-1 mb-3'><span className='branding-2 font-weight-bold'>AI-Powered</span> Banner Creation</h3>
                <p className='fs-5 mb-4'>Gone are the days of spending hours crafting the perfect social media banner. Our AI technology takes the guesswork out of banner design, creating eye-catching visuals that capture your audience's attention. Simply input your preferences, and let Hawk Glide do the rest. From sleek and professional to bold and vibrant, our software ensures your banners stand out from the crowd.</p>
                <Link to={'/'} className="button-branding-1">
                    Start your 30-Day Free Trial
                </Link>
            </div>
            <div className='col-md-6'>
            <img src={require('../images/data-section-1.png')} alt="Data section" className='pb-2' style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>

        <div className='row align-items-center py-4'>
            <div className='col-md-6'>
            <img src={require('../images/data-section-1.png')} alt="Data section" className='pb-2' style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className='col-md-6'>
            <h3 className='branding-1 mb-3'><span className='branding-2 font-weight-bold'>Dynamic</span> Content Generation</h3>
                <p className='fs-5 mb-4'>Struggling to come up with engaging content for your social media posts? Hawk Glide has you covered. Our AI algorithms analyze trending topics, audience preferences, and brand identity to generate compelling content tailored to your needs. Whether it's informative articles, captivating captions, or attention-grabbing headlines, our software delivers content that resonates with your audience and drives engagement.</p>
                <Link to={'/'} className="button-branding-1">
                Affordable AI-Powered SMM Tool
                </Link>
            </div>
        </div>

        <div className='row align-items-center py-4'>
            <div className='col-md-6'>
            <h3 className='branding-1 mb-3'><span className='branding-2 font-weight-bold'>Effortlessly Manage Your</span> Social Media Presence</h3>
                <p className='fs-5 mb-4'>Why waste time manually scheduling and posting content across multiple social media platforms? With Hawk Glide, you can streamline your social media workflow with automated posting. Our software integrates seamlessly with popular platforms like Facebook, Instagram, Twitter, and LinkedIn, allowing you to automatically publish content with ease. Spend less time managing your social media accounts and more time connecting with your audience.</p>
                <Link to={'/'} className="button-branding-1">
                Unlock the Full Potential
                </Link>
            </div>
            <div className='col-md-6'>
            <img src={require('../images/data-section-1.png')} alt="Data section" className='pb-2' style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>
        </div>
      </section>
      <section className='service-section py-5 pb-0 section-gray'>
        <div className="container">
        <h3 className='branding-1 mb-3 display-6 text-center w-75 m-auto'><span className='branding-2 font-weight-bold'>Supercharge Your AI-Powered</span> Social Media Manager with Hawk Glide</h3>
        <div className='row py-5 pb-0 align-items-center'>
            <div className='col-md-6'>
                <p className='fs-5'>We're revolutionizing social media management by harnessing the power of AI. Say goodbye to tedious tasks and skyrocket your online presence with our cutting-edge platform.</p>
            
            <div className="d-flex align-items-center my-4">
                <img src={require('../images/check-icon.png')} style={{ marginRight: '8px' }} /> {/* Icon on the left */}
                <div>
                    <p className='fs-5 pb-0 mb-0'>Eliminate manual tasks and free up time for strategic planning and engagement.</p>
                </div>
            </div>
            <div className="d-flex align-items-center my-4">
                <img src={require('../images/check-icon.png')} style={{ marginRight: '8px' }} /> {/* Icon on the left */}
                <div>
                    <p className='fs-5 pb-0 mb-0'>Increase efficiency and productivity with automated content creation, scheduling, and analysis.</p>
                </div>
            </div>
            <div className="d-flex align-items-center my-4">
                <img src={require('../images/check-icon.png')} style={{ marginRight: '8px' }} /> {/* Icon on the left */}
                <div>
                    <p className='fs-5 pb-0 mb-0'>Stay ahead of the curve with data-driven insights and trend analysis.</p>
                </div>
            </div>
            </div>
            <div className='col-md-6'>

                <div className='bg-white rounded-4 p-4'>
                <div className="d-flex align-items-start my-4">
                <img src={require('../images/section-datas-icon.png')} style={{ marginRight: '8px' }} /> {/* Icon on the left */}
                <div>
                    <p className='fs-5 font-weight-bold'>Saving Time</p>
                    <p className='fs-5 pb-0 mb-0'>Effortlessly automate your social media tasks with Hawk Glide, saving you valuable time and resources.</p>
                </div>
            </div>
            <div className="d-flex align-items-start my-4">
                <img src={require('../images/section-datas-icon.png')} style={{ marginRight: '8px' }} /> {/* Icon on the left */}
                <div>
                    <p className='fs-5 font-weight-bold'>Reducing Costs</p>
                    <p className='fs-5 pb-0 mb-0'>Say goodbye to high costs and hello to efficient, data-driven social media management solutions.</p>
                </div>
            </div>
            <div className="d-flex align-items-start my-4">
                <img src={require('../images/section-datas-icon.png')} style={{ marginRight: '8px' }} /> {/* Icon on the left */}
                <div>
                    <p className='fs-5 font-weight-bold'>Future Technology</p>
                    <p className='fs-5 pb-0 mb-0'>Experience the future of social media management and unlock new possibilities for growth and success.</p>
                </div>
            </div>
                </div>
            
            </div>

            <img className="pt-3" src={require('../images/section-bottom-banner.jpg')} />
        
        </div>
        </div>
      </section> 
      <section className='calling-data py-5'>
        <div className='container'>
            <div className='row align-items-center'>
            <div className='col-md-6'>
                <h3 className='mb-3'><span className='branding-2 font-weight-bold'>Standout From Your Competitors</span> and increase your Social Media Presence</h3>
                <p className='fs-5 mb-5'>In today's crowded digital landscape, differentiation is key to success. With Hawk Glide, you can elevate your brand above the competition and expand your social media footprint. Our AI-powered platform empowers you to create unique content, engage your audience, and build a strong online presence that sets you apart.</p>
                <Link to={'/'} className="button-branding-1">
                Get Started for Free
                </Link>
                <Link to={'/'} className="button-branding-2" style={{marginLeft : 15}}>
                    Watch Video
                </Link>
            </div>
            <div className='col-md-6'>
            <div className='bg-blue-dark rounded-4 p-5'>
            <h3 className='mb-3'><span className='branding-2 font-weight-bold'>Calling all Agencies!</span></h3>
            <p className='fs-4 mb-2 text-white'>Hawk Glide is your ultimate solution for efficient client management.</p>
                <p className='fs-6 mb-5 text-white'>Say goodbye to juggling multiple accounts and hello to seamless social media strategy execution. With our platform, you'll streamline your workflow, dazzle clients with custom designs, and effortlessly schedule posts. Let Hawk Glide take your agency to new heights.</p>
                <Link to={'/'} className="button-branding-1">
                Signup now!
                </Link>
                <Link to={'/'} className="button-branding-2 bg-transparent" style={{marginLeft : 15}}>
                See Pricing
                </Link>
            </div>
            </div>
            </div>
        </div>
      </section> 
      <section className='faqs-section py-5'>
        <div className='container'>
        <div className='text-center mb-5'>
            <h3 className='mb-0'><span className='branding-2 font-weight-bold'>Answers to Your Burning Questions</span></h3>
            <h3 className='mb-3'>Frequently Asked Questions about Hawk Glide</h3>
        </div>
        <div className='accordian-react-data w-75 m-auto'>
            <div><Faq /></div>
        </div>
        </div>
      </section>

      <section className='callto-section py-5 bg-branding-2'>
        <div className='container'>
        <div className="row align-items-center">
            {/* Text on the left side */}
            <div className="col-md-8">
                <div className="text-container">
                <h3 className='fs-1 py-2 mb-3 branding-1'><span className='font-weight-bold text-white'>Powerful AI tool for Social Media Management</span> that increases your Social Media Presence</h3>
                <div className='links-tab py-2 my-4'>
                <Link to={'/'} className="button-branding-2 bg-transparent border-white text-white">
                    Start your 30-Day Free Trial
                </Link>
                <Link to={'/'} className="button-branding-2 bg-transparent border-white text-white" style={{marginLeft : 15}}>
                See Pricing Plans
                </Link>
                </div>
                {/* Add any other text or components as needed */}
                </div>
            </div>

            {/* Image on the right side */}
            <div className="col-md-4 text-center">
                <div className="image-container">
                <img
                    src={require('../images/wings.jpg')}
                    alt="Wings Image"
                    className="img-fluid" style={{height: 200, objectFit : 'contain'}}
                />
                </div>
            </div>
            </div>
        </div>
      </section>
      {/* Add your home page content here */}
    </>
  );
};

export default Home;
