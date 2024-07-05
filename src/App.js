import { useEffect } from 'react';
import './App.css';

import CustomMarkDown from './components/CustomMarkDown';



function App() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ height }, '*');
    };

    // Send height on load
    sendHeight();

    // Send height on resize
    window.addEventListener('resize', sendHeight);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', sendHeight);
    };
  }, []);

  return (<>
    
    <CustomMarkDown></CustomMarkDown>
    </>
  );
}

export default App;
