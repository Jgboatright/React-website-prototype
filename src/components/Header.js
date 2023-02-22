import './style.css';
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div className="header-container">
                <h1 className='title-name'> Jacob Boatright</h1>
                <h3 className='title-description'> 
                    My name is Jacob  and I am a frontend developer, specializing in ReactJS and webpage design.
                </h3>
                <ul className='title-buttons'>
                
                    <Link to="/"><p className='page-buttons'>Homepage</p></Link>
                    <br />
                    <Link to="/AboutMe"><p className='page-buttons'>About Me</p></Link>
                    <br />
                    <Link to="/Portfolio"><p className='page-buttons'>My Work</p></Link>
                    <br />
                
                </ul>
        </div> 

    )
}

export default Header;