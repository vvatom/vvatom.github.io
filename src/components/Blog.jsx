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
            <br /><span className='bold_text'>"Tasks list"</span>
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