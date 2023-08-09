import './Portrait.css';

export default function Portrait() {
    return (
        <>
        <div className='circle__light'></div>

        <div className='front'>
          <div className='circle'>

            <div className='triangle_left'>
              <span className='triangle_left--anim'></span>
              <span className='triangle_left--anim_reverse'></span>
            </div>
            <div className='triangle_right'>
              <span className='triangle_right--anim'></span>
              <span className='triangle_right--anim_reverse'></span>
            </div>
          </div>

          <div className='circle__laser'></div>
          <div className='photo'></div>

          <div className='triangle_bottom'>
            <span className='triangle_bottom--anim'></span>
            <span className='triangle_bottom--anim_reverse'></span>
          </div>

        </div>
        </>
    )
}