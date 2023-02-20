import './style.css'

const Header = () => {
    return(
        <div className="header-container">
                <h1 className='title-name'> Jacob Boatright</h1>
                <h3 className='title-description'> 
                    My name is Jacob  and I am a frontend developer, specializing in ReactJS and webpage design.
                </h3>
                <ul className='title-buttons'>
                    <li>Homepage</li>
                    <li>About Me</li>
                    <li>My Work</li>
                </ul>
        </div> 

    )
}

export default Header;