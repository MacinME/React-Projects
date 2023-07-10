import { useEffect, useRef, useState } from 'react';
import { GContent } from './components/global';
import { MNavbar } from './components/mobile';
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
      className="w-full bg-background_color h-full relative"
    >
      {/* Desktop Menu */}
      {
        boxSize > 1023 && <DNavbar />
      }

      {/* Content */}
      <GContent />

      {/* Mobile Menu */}
      {
        boxSize < 1024 && <MNavbar />
      }
    </main>
  )
}
