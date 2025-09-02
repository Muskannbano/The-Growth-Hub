import React from 'react'
import Analytics from '../components/Analytics'

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>THE GROWTH HUB</p>
              <h1>Upgrade Quality to Ready 
                <br />A Better Future.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aperiam sint animi vitae praesentium in accusamus doloribus
                 impedit veritatis possimus? Voluptatem Lorem ipsum dolor sit, 
                 amet consectetur adipisicing elit. Debitis, libero!</p>
                 <div className="btn-group">
                  <a href="/contact">
                   <button className='btn'>Connect Now</button> 
                  </a>
                  <a href="/services">
                   <button className='btn secondary-btn'>Learn More</button> 
                  </a>
                 </div>
            </div>
            <div className="hero-image">
              <img src="/images/Hero.png" alt="" width="500" height="500" />
            </div>
          </div>
        </section>
      </main>

     <Analytics/>
     
              <section className="section-hero">
                
          <div className="container grid grid-two-cols">
              <div className="hero-image">
              <img src="/images/Hero3.avif" alt="" width="500" height="500" />
            </div>
            <div className="hero-content">
              <p>We are here to help you.</p>
              <h1>Get Started Today</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aperiam sint animi vitae praesentium in accusamus doloribus
                 impedit veritatis possimus? Voluptatem Lorem ipsum dolor sit, 
                 amet consectetur adipisicing elit. Debitis, libero!</p>
                 <div className="btn-group">
                  <a href="/register">
                   <button className='btn'>Register Now</button> 
                  </a>
                  
                 </div>
            </div>
          
          </div>
        </section>
    </>
  )
}

export default Home
