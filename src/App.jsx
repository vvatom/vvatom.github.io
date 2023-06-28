import PalmsFront from 'components/PalmsFront';
import './App.css';
import Palms from 'components/PalmsBack';
import Portrait from 'components/Portrait';
import MenuPortrait from 'components/MenuPortrait';
import ContentBox from 'components/ContentBox';

function App() {
  return (
    <div className="App">

      <div className='portfolio'>

        <Palms />
        <Portrait />
        <MenuPortrait/>
        <PalmsFront />

        <div className='shadow--top' />
      </div>

      <div className='content'>
      <ContentBox/>
        <div className='shadow--bottom' />
      </div>
    </div>
  );
}

export default App;
