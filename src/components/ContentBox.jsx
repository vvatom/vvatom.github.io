import AboutMe from './AboutMe';
import './ContentBox.css';
import Projects from './Projects';

export default function ContentBox() {
    return (
        <div className='box_content'>
           {/* <AboutMe/> */}
           <Projects/>
            <div className='box_content--bottom_background'>
            </div>
            <div className='box_content--right_background'>
            </div>
            <div className='box_content--left_background'>
            </div>
        </div>
    )
}