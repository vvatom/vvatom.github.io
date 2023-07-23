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
                        <br /><span className='bold_text'>"Rick & Morty - characters"</span>
                        <br />Overview of a random character from
                        <br />the television show "Rick and Morty"
                        <br />implemented based on the Rick and Morty API.
                    </p>
                    <p className={classNames(
                        'box_content--left_site_text',
                        { 'showUp': index === 0 }
                    )}>
                        <br />Building this project I've learned:
                        <br />- fetching data from the REST API
                        <br />- CSS animations
                        <br />- working with audio in React environment
                    </p>
                    <p className={classNames(
                        'box_content--left_site_text',
                        { 'showUp': index === 0 }
                    )}>
                        <br />You can try it <span className='bold_text'>here</span>
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