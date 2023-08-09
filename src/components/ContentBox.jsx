import { useContext, useState } from 'react';
import AboutMe from './AboutMe';
import './ContentBox.css';
import Projects from './Projects';
import MenuContext, { menuItems } from 'context/MenuContext';
import MenuContentBox from './MenuContentBox';
import Blog from './Blog';
import classNames from 'classnames';

const MAX_INDEX = 2;

export default function ContentBox() {
    const { menuItem } = useContext(MenuContext)
    const [index, setIndex] = useState(0)

    return (
        <>

            <div
                onClick={() => setIndex((prevIndex) => Math.abs((prevIndex - 1) % MAX_INDEX))}
                className={classNames(
                    { "projects_button--left": true },
                    { 'shutDown': menuItem !== menuItems.projects },
                    { 'showUp': menuItem === menuItems.projects }
                )}>

                <div className='projects_button--left_arrow'>
                    <span className='left_arrow-top' />
                    <span className='left_arrow-bottom' />
                </div>
            </div>
            <div className='box_content'>
                {menuItem === menuItems.about ? <AboutMe menuItem={menuItem} /> : null}
                {menuItem === menuItems.projects ? <Projects menuItem={menuItem} index={index} /> : null}
                {menuItem === menuItems.blog ? <Blog menuItem={menuItem} /> : null}
                <div className='box_content--bottom_background'>
                </div>
                <div className='box_content--right_background'>
                </div>
                <div className='box_content--left_background'>
                </div>
            </div>

            <div
                onClick={() => setIndex((prevIndex) => (prevIndex + 1) % MAX_INDEX)}
                className={classNames(
                    { "projects_button--right": true },
                    { 'shutDown': menuItem !== menuItems.projects },
                    { 'showUp': menuItem === menuItems.projects }
                )}>

                <div className='projects_button--right_arrow'>
                    <span className='right_arrow-bottom' />
                    <span className='right_arrow-top' />
                </div>
            </div>
            <MenuContentBox />
        </>
    )
}