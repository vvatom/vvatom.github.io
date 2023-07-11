import './ToDo.css'
import ToDo_img from '../assets/projects/ToDo.png';
import classNames from 'classnames';
import MenuContext, { menuItems } from 'context/MenuContext';

export default function ToDo({index, menuItem}) {
    return(
        <>
        <div className='todo_content--left_site'>
        <div className='todo_text-box'>
        <p className={classNames(
            'box_content--left_site_text',
            {'showUp': index===1}
            )}>
            <br /><span className='bold_text'>"Tasks list"</span>
            <br />It's a web where i use async functions
            <br />to connect with Rick&Morty database.
        </p>
        <p className={classNames(
            'box_content--left_site_text',
            {'showUp': index===1}
            )}>
            <br />As a dedicated problem-solver, I'm looking
            <br />for an opportunity to gain my first hands-on
            <br /><span className='bold_text'>programming experience </span>in the tech industry.
        </p>
        <p className={classNames(
            'box_content--left_site_text',
            {'showUp': index===1}
            )}>
            <br />I enjoy <span className='bold_text'>testing </span>
            the limits of <span className='bold_text'>my creativity</span>
            <br />by writing scripts and creating new experiences
            <br />You can try it here.
        </p>
        </div>
    </div>
    <div className={classNames(
        'todo_content--right_site',
        {'showUp': index===1}
        )}>
    <a href="https://vvatom.github.io/to-do-list/">
            <img className='ToDo_img' src={ToDo_img} alt="To_do_list_img"/>
            </a>
        </div>
        </>
    )
}