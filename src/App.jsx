import PalmsFront from 'components/PalmsFront';
import './App.css';
import Portrait from 'components/Portrait';
import MenuPortrait from 'components/MenuPortrait';
import ContentBox from 'components/ContentBox';
import MenuContentBox from 'components/MenuContentBox';
import MenuContext, { menuItems } from 'context/MenuContext';
import { useState } from 'react';
import PalmsBack from 'components/PalmsBack';

function App() {
  const [menuItem, setMenuItem] = useState(menuItems.about)

  return (
    <MenuContext.Provider value={{ menuItem, setMenuItem }}>
      <div className="App">

        <div className='portfolio'>

          <PalmsBack />
          <Portrait />
          <MenuPortrait />
          <PalmsFront />

          <div className='shadow--top' />
        </div>

        <div className='content'>
          <ContentBox />
          <div className='shadow--bottom' />
        </div>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
