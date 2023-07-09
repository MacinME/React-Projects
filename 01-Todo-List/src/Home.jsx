import { useEffect, useRef, useState } from 'react';
import { GContent, GTabs } from './components/global';
import { MHeader, MNavbar } from './components/mobile';
import { DNavbar } from './components/desktop';

export const Home = () => {

  const resizeRef = useRef(null);
  const [boxSize, setBoxsize] = useState(null);

  useEffect(() => {
    const onResize = () => {
      const size = resizeRef.current.offsetWidth;
      setBoxsize(size);
    }

    onResize();

    window.addEventListener('resize', onResize);
  
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])


  return (
    <main 
      ref={ resizeRef }
      className='w-full bg-background_color h-full relative'
    >
      {/* Title */}
      {
        boxSize < 800 ? <MHeader /> : <DNavbar />
      }

      {/* Tabs */}
      <GTabs width={ boxSize } />

      {/* Content */}
      <GContent width={ boxSize } />

      {/* Menu Icons */}
      {
        boxSize < 800 && <MNavbar />
      }
    </main>
  )
}
