import './Blog.css'
import Blog_img from '../assets/projects/Blog_img.png';
import MenuContext, {menuItems} from 'context/MenuContext';
import classNames from 'classnames';

export default function Blog({menuItem}) {
    return(
        <>
        <div className={classNames(
            'blog_content--left_site',
            {'showUp': menuItem === menuItems.blog}
            )}>
        <h2 className='blog_header'>Blog</h2>
        <div className='blog_text-box'>
        <p className='box_content--left_site_text'>
            <br />Work in progress.
            <br />
            <br />Soon I would like to invite you to my blog,
            <br />where I will show more of my projects 
            <br />and topics that I have worked on.
        </p>
        </div>
    </div>
    <div className={classNames(
        'blog_content--right_site',
        {'showUp': menuItem === menuItems.blog}
        )}>
            <img className='Blog_img' src={Blog_img} alt="Blog_img"/>
        </div>
        </>
    )
}