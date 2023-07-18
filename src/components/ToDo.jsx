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
            <br />Classic to-do list application supporting
            <br />saving data locally between sessions.
        </p>
        <p className={classNames(
            'box_content--left_site_text',
            {'showUp': index===1}
            )}>
            <br />Building this project I've learned:
            <br />- saving data in LocalStorage
            <br />- responsive design
            <br />- React hooks
        </p>
        <p className={classNames(
            'box_content--left_site_text',
            {'showUp': index===1}
            )}>
            <br />You can try it <span className='bold_text'>here.</span>
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