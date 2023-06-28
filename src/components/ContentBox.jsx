import './ContentBox.css';

export default function ContentBox() {
    return (
        <div className='box_content'>
            <div className='box_content--top_background'>
                {/* <div className='box_content--top_anim' /> */}
            </div>
            <div className='box_content--bottom_background'>
                <div className='box_content--bottom_anim' />
            </div>
            <div className='box_content--right_background'>
                <div className='box_content--right_anim' />
            </div>
            <div className='box_content--left_background'>
                <div className='box_content--left_anim' />
            </div>
        </div>
    )
}