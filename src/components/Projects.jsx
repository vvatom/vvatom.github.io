import classNames from 'classnames'
import './Projects.css'
import RickMorty from './RickMorty'
import ToDo from './ToDo'
import MenuContext, { menuItems } from 'context/MenuContext';

export default function Projects({ index, menuItem }) {

    return (

        <>
            <div className='header_projects_box'>
                <h2 className={classNames(
                    'header_projects',
                    { 'showUp': menuItem === menuItems.projects }
                )}>Projects</h2>
            </div>

            {index === 0 ? <RickMorty index={index} menuItem={menuItem} /> : null}
            {index === 1 ? <ToDo index={index} menuItem={menuItem} /> : null}
        </>
    )
}