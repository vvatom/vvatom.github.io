import './MenuPortrait.css';
import github_ico from '../assets/icons/github_ico.png';
import linkedin_ico from '../assets/icons/linkedin_ico.png';
import mail_ico from '../assets/icons/mail_ico.png';
import { useContext } from 'react';
import MenuContext, {menuItems} from 'context/MenuContext';

export default function MenuPortrait() {

    const { menuItem, setMenuItem } = useContext(MenuContext)

    const scrollToContentBox = (x) => {
        window.scrollTo(0,window.innerHeight)
        setMenuItem(x)
    }

    return (
        <header className="menu">

            <nav className="menu_navigation">
                <span className="menu_options">
                <span type="button" className="content_menu_navigation-pointer" onClick={()=>{scrollToContentBox(menuItems.about)}}>
                    About me
                    </span>
                <span type="button" className="content_menu_navigation-pointer" onClick={()=>{scrollToContentBox(menuItems.blog)}}>
                    Blog
                    </span>
                <span type="button"a className="content_menu_navigation-pointer" onClick={()=>{scrollToContentBox(menuItems.projects)}}>
                    Projects
                    </span>
                </span>
                <span span className="menu_icons">
                <a href="https://github.com/vvatom">
                <img className="github_ico" src={github_ico} alt="github_icon" width="40" height="40"/>
                </a>
                <a href="https://www.linkedin.com/in/damian-drzewiecki-0a6167246/">
                <img className="linkedin_ico" src={linkedin_ico} alt="linkedin_icon" width="40" height="40"/>
                </a>
                <a href="mailto:drzewiecki.damian96@gmail.com">
                <img className="mail_ico" src={mail_ico} alt="mail_icon" width="40" height="40"/>
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