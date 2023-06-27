import PalmsFront from 'components/PalmsFront';
import './App.css';
import Palms from 'components/PalmsBack';
import Portrait from 'components/Portrait';

function App() {
  return (
    <div className="App">

      <div className='portfolio'>

        <Palms />
        
        <Portrait />
        <PalmsFront />

        <div className='shadow--top' />
      </div>

      <div className='content'>
        <div className='shadow--bottom' />
      </div>
    </div>
  );
}

export default App;
