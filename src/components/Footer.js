import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>About Us</h4>
                        <p>We are passionate about plants and sharing information to help people learn more about them. Our goal is to make it easy for anyone to cultivate their own green thumb!</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                        <li><a href="###">Home</a></li>
                        <li><a href="###">Blog</a></li>
                        <li><a href="###">Plants</a></li>
                        <li><a href="###">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Connect With Us</h4>
                        <ul className="list-unstyled social-media">
                        <li><a href="###"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="###"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="###"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="###"><i className="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <p className="text-center">&copy; 2023 Plantyali. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer> 
    </div>
  )
}

export default Footer
