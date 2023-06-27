import './PalmsBack.css';

export default function PalmsBack() {
    return (
        <div className='palms'>
            <div className='leaves_left'>
                <div className='leaves_left--six'></div>
                <div className='leaves_left--one'></div>
                <div className='leaves_left--two'></div>
            </div>
            <div className='leaves_right'>
                <div className='leaves_right--six'></div>
                <div className='leaves_right--one'></div>
                <div className='leaves_right--two'></div>
            </div>
        </div>
    )
}