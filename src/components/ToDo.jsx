import './ToDo.css'
import ToDo_img from '../assets/projects/ToDo.png';

export default function ToDo() {
    return(
        <>
        <div className='box_content--left_site'>
        <h2 className='hi_there'>Projects</h2>
        <p className='box_content--left_site_text'>
            <br /><span className='bold_text'>"To do list"</span>
            <br />It's a web where i use async functions
            <br />to connect with Rick&Morty database.
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
            <br />You can try it here.
        </p>
    </div>
    <div className='box_content--right_site'>
    <a href="https://vvatom.github.io/to-do-list/">
            <img className='ToDo_img' src={ToDo_img} alt="To_do_list_img"/>
            </a>
        </div>
        </>
    )
}