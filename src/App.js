import './App.css';

function App() {
  return (
    <div className="App">
      <div className='front'>

      <div className='circle'>
      <div className='circle__eclipse'></div>
      <div className='circle__light'></div>

      <div className='triangle_left'>
        <span className='triangle_left--anim'></span>
        <span className='triangle_left--anim_reverse'></span>
      </div>
      <div className='triangle_right'>
        <span className='triangle_right--anim'></span>
        <span className='triangle_right--anim_reverse'></span>
      </div>

      <span className='circle__blue--anim'></span>
      <span className='circle__blue--anim circle__blue--blur_1'></span>
      <span className='circle__blue--anim circle__blue--blur_2'></span>
      <span className='circle__blue--anim circle__blue--blur_3'></span>
      <span className='circle__blue--anim circle__blue--blur_4'></span>
      <span className='circle__blue--anim circle__blue--white_ray'></span>

      <span className='circle__purple--anim'></span>
      <span className='circle__purple--anim circle__purple--blur_1'></span>
      <span className='circle__purple--anim circle__purple--blur_2'></span>
      <span className='circle__purple--anim circle__purple--blur_3'></span>
      <span className='circle__purple--anim circle__purple--blur_4'></span>
      <span className='circle__purple--anim circle__purple--white_ray'></span>
      </div>
      <div className='circle__photo'></div>
      <div className='triangle_bottom'>
        <span className='triangle_bottom--anim'></span>
        <span className='triangle_bottom--anim_reverse'></span>
      </div>
      </div>
    </div>
  );
}

export default App;
