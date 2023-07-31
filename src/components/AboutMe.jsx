import './AboutMe.css'
import level_0 from '../assets/ability_levels/levels_0.png';
import level_1 from '../assets/ability_levels/levels_1.png';
import level_3 from '../assets/ability_levels/levels_3.png';
import level_4 from '../assets/ability_levels/levels_4.png';
import level_5 from '../assets/ability_levels/levels_5.png';
import classNames from 'classnames';
import MenuContext, { menuItems } from 'context/MenuContext';

export default function AboutMe({menuItem}) {
    return(
        <>

        <div className={classNames(
            'about_content--left_site',
            {'showUp': menuItem === menuItems.about}
            )}>

        <h2 className='about_header'>Hi there!</h2>
        <div className="about_text-box">
        <p className='box_content--left_site_text'>
            <br />My name is Damian and I am a self-taught
            <br /><span className='bold_text'>software developer </span>with a background
            <br />in <span className='bold_text'>graphic design</span>.
        </p>
        <p className='box_content--left_site_text'>
            <br />As a dedicated problem-solver, I'm looking
            <br />for an opportunity to gain my first hands-on
            <br /><span className='bold_text'>programming experience </span>in the tech industry.
        </p>
        <p className='box_content--left_site_text'>
            <br />I enjoy <span className='bold_text'>testing </span>
            the limits of <span className='bold_text'>my creativity</span>
            <br />by writing scripts and creating new experiences
            <br />and environments for other people to play with.
        </p>
        </div>
    </div>
    <div className={classNames(
        'about_content--right_site',
        {'showUp': menuItem === menuItems.about}
        )}>
        <p className='ablities_level'>
            <br/><img className='level_img' src={level_4} alt="level"/>   React.js
            <br/><img className='level_img' src={level_3} alt="level"/>   Javascript
            <br/><img className='level_img' src={level_1} alt="level"/>   Typescript
            <br/><img className='level_img' src={level_4} alt="level"/>   CSS
            <br/><img className='level_img' src={level_1} alt="level"/>   Sass
            <br/><img className='level_img' src={level_3} alt="level"/>   Git
            <br/><img className='level_img' src={level_3} alt="level"/>   Visual Studio Code
            <br/><img className='level_img' src={level_5} alt="level"/>   Adobe Photoshop
            <br/><img className='level_img' src={level_4} alt="level"/>   Graphic design
            <br/><img className='level_img' src={level_4} alt="level"/>   Hardware and software
            <br/><img className='level_img' src={level_0} alt="level"/>   troubleshooting
        </p>
        </div>
        </>
    )
}