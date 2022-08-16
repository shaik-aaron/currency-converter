import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
      return (
            <div className="Footer">
                  <h2>Created by Shaik Aaron.</h2>
                  <div className="Logos">
                        <a href="https://www.linkedin.com/in/shaik-aaron-97a399172/"><FontAwesomeIcon icon={faLinkedin} className='logo'/></a>
                        <a href="https://www.instagram.com/_aaronxo_/"><FontAwesomeIcon icon={faInstagram} className='logo'/></a>
                        <a href="https://github.com/shaik-aaron"><FontAwesomeIcon icon={faGithub} className='logo'/></a>
                        <a href="https://twitter.com/_shaikaaron_"><FontAwesomeIcon icon={faTwitter} className='logo'/></a>
                  </div>
                  <p>Email: shaikaaronbbhs@gmail.com</p>
            </div>
      )
}