import './MenuContentBox.css';
import github_ico from '../assets/icons/github_ico.png';
import linkedin_ico from '../assets/icons/linkedin_ico.png';
import mail_ico from '../assets/icons/mail_ico.png';
import { useContext } from 'react';
import MenuContext, { menuItems } from 'context/MenuContext';
import classNames from 'classnames';

export default function MenuContentBox() {

    const { menuItem, setMenuItem } = useContext(MenuContext)

    return (

        <nav className="content_menu_navigation">
            <span className="content_menu_options">
                <span type="button" className="content_menu_navigation-pointer" onClick={() => { setMenuItem(menuItems.about) }}>
                    About me
                </span>
                <span type="button" className="content_menu_navigation-pointer" onClick={() => { setMenuItem(menuItems.blog) }}>
                    Blog
                </span>
                <span type="button" className="content_menu_navigation-pointer" onClick={() => { setMenuItem(menuItems.projects) }}>
                    Projects
                </span>
            </span>
            <div className="content_menu_options--underline">

                <div className={classNames(
                    "content_menu_options--underline_left",
                    {'underline_color': menuItem === menuItems.about}
                    )} />
                    
                <div className={classNames(
                    "content_menu_options--underline_middle",
                    {'underline_color': menuItem === menuItems.blog}
                    )} />

                <div className={classNames(
                    "content_menu_options--underline_right",
                    {'underline_color': menuItem === menuItems.projects
                    })} />

            </div>
            <span span className="content_menu_icons">
                <a href="https://github.com/vvatom">
                    <img className="github_ico" src={github_ico} alt="github_icon" width="40" height="40" />
                </a>
                <a href="https://www.linkedin.com/in/damian-drzewiecki-0a6167246/">
                    <img className="linkedin_ico" src={linkedin_ico} alt="linkedin_icon" width="40" height="40" />
                </a>
                <a href="mailto:drzewiecki.damian96@gmail.com">
                    <img className="mail_ico" src={mail_ico} alt="mail_icon" width="40" height="40" />
                </a>
            </span>
        </nav>

    )
}