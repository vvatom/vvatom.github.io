import './RickMorty.css'
import Rick_n_Morty from '../assets/projects/Rick_n_Morty.png';
import classNames from 'classnames';
import MenuContext, { menuItems } from 'context/MenuContext';

export default function RickMorty({ index, menuItem }) {
    return (
        <>
            <div className='rickmorty_content--left_site'>
                <div className='rickmorty_text-box'>
                    <p className={classNames(
                        'box_content--left_site_text',
                        { 'showUp': index === 0 }
                    )}>
                        <br /><span className='bold_text'>"Rick & Morty - charcters"</span>
                        <br />It's a web where i use async functions
                        <br />to connect with Rick&Morty database.
                    </p>
                    <p className={classNames(
                        'box_content--left_site_text',
                        { 'showUp': index === 0 }
                    )}>
                        <br />As a dedicated problem-solver, I'm looking
                        <br />for an opportunity to gain my first hands-on
                        <br /><span className='bold_text'>programming experience </span>in the tech industry.
                    </p>
                    <p className={classNames(
                        'box_content--left_site_text',
                        { 'showUp': index === 0 }
                    )}>
                        <br />I enjoy <span className='bold_text'>testing </span>
                        the limits of <span className='bold_text'>my creativity</span>
                        <br />by writing scripts and creating new experiences
                        <br />You can try it here.
                    </p>
                </div>
            </div>
            <div className={classNames(
                'rickmorty_content--right_site',
                { 'showUp': index === 0 }
            )}>
                <a href="https://vvatom.github.io/rick-and-morty-lottery/">
                    <img className='Rick_and_Morty' src={Rick_n_Morty} alt="Rick_n_Morty" />
                </a>
            </div>
        </>
    )
}