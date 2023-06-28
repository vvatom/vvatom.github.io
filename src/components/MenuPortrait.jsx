import './MenuPortrait.css';
import github_ico from '../assets/icons/github_ico.png';
import linkedin_ico from '../assets/icons/linkedin_ico.png';
import mail_ico from '../assets/icons/mail_ico.png';

export default function MenuPortrait() {
    return (
        <header className="menu">

            <nav className="menu_navigation">
                <span className="menu_options">
                <a className="menu_navigation--aboutMe" href="#about">About me</a>
                <a className="menu_navigation--blog" href="#blog">Blog</a>
                <a className="menu_navigation--projects" href="#projects">Projects</a>
                </span>
                <span span className="menu_icons">
                <a href="https://github.com/vvatom">
                <img src={github_ico} alt="github_icon" width="40" height="40"/>
                </a>
                <a href="https://www.linkedin.com/in/damian-drzewiecki-0a6167246/">
                <img src={linkedin_ico} alt="linkedin_icon" width="40" height="40"/>
                </a>
                <a href="mailto:drzewiecki.damian96@gmail.com">
                <img src={mail_ico} alt="mail_icon" width="40" height="40"/>
                </a>
                </span>
            </nav>

            <h1 className="menu_name">
                <span>Damian Drzewiecki</span>
                <span className="portfoliod">Portfolio</span>
            </h1>

        </header>
    )
}