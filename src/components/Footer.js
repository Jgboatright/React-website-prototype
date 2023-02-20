import './style.css'

const Footer = () => {
    return(
        <footer>
            <p className='contact-info'>
                <ul className='bullets'>
                <li>Contact Me:</li>
                <li>Email: sampleemail@att.net</li>
                <li>Phone: (xxx)-xxx-xxxx </li> 
                </ul>
            </p>
            <p class="image-links">
                <a href="https://www.linkedin.com/" title="Linkedin-profile"  rel="external"><img className='footer-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="LinkedIn"></img></a>
                <a href="https://github.com/Jgboatright" title="GitHub-profile" rel="external"><img className='footer-img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"></img></a>   
            </p>    
        </footer>
    )
}

export default Footer;