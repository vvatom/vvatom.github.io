import './ContentBox.css';
import level_1 from '../assets/ability_levels/levels_1.png';
import level_3 from '../assets/ability_levels/levels_3.png';
import level_4 from '../assets/ability_levels/levels_4.png';
import level_5 from '../assets/ability_levels/levels_5.png';

export default function ContentBox() {
    return (
        <div className='box_content'>
            <div className='box_content--left_site'>
                <h2 className='hi_there'>Hi there!</h2>
                <p className='textss'>
                    <br />My name is Damian and I am a self-taught
                    <br />software <span className='bold_text'>developer </span>with a background
                    <br />in <span className='bold_text'>graphic design</span>.
                </p>
                <p className='textss'>
                    <br />As a dedicated problem-solver, I'm looking
                    <br />for an opportunity to gain my first hands-on
                    <br /><span className='bold_text'>programming experience </span>in the tech industry.
                </p>
                <p className='textss'>
                    <br />I enjoy <span className='bold_text'>testing </span>
                    the limits of <span className='bold_text'>my creativity</span>
                    <br />by writing scripts and creating new experiences
                    <br />and environments for other people to play with.
                </p>
            </div>
            <div className='box_content--right_site'>
                <p className='ablities_level'>
                    <br/><img className='level_img' src={level_4} alt="level"/> React.js
                    <br/><img className='level_img' src={level_4} alt="level"/> Javascript
                    <br/><img className='level_img' src={level_1} alt="level"/> Typesript
                    <br/><img className='level_img' src={level_4} alt="level"/> CSS
                    <br/><img className='level_img' src={level_3} alt="level"/> Sass
                    <br/><img className='level_img' src={level_3} alt="level"/> Git
                    <br/><img className='level_img' src={level_3} alt="level"/> Visual Studio Code
                    <br/><img className='level_img' src={level_5} alt="level"/> Adobe Photoshop
                    <br/><img className='level_img' src={level_4} alt="level"/> Graphic design
                    <br/><img className='level_img' src={level_4} alt="level"/> Hardware and software
                    <br/>                  troubleshooting
                </p>
            </div>
            {/* <div className='box_content--top_background'> */}
            {/* <div className='box_content--top_anim' /> */}
            {/* </div> */}
            <div className='box_content--bottom_background'>
                {/* <div className='box_content--bottom_anim' /> */}
            </div>
            <div className='box_content--right_background'>
                {/* <div className='box_content--right_anim' /> */}
            </div>
            <div className='box_content--left_background'>
                {/* <div className='box_content--left_anim' /> */}
            </div>
        </div>
    )
}