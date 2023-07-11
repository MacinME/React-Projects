import { useEffect, useRef, useState } from 'react';
import { GContent } from './components/global';
import { MNavbar } from './components/mobile';
import { DNavbar } from './components/desktop';
import { GNewCollection } from './components/global/NewCollection/GNewCollection';
import { collections } from './components/data/collections';
import { CTasks } from './components/global/collectionTasks/CTasks';

export const Home = () => {

  const resizeRef = useRef(null);
  const [boxSize, setBoxsize] = useState(null);
  const [collection, setCollection] = useState(false);
  const [collectionState, setCollectionState] = useState(
    JSON.parse(localStorage.getItem('collections')) || []
  );
  
  const [tasks, setTasks] = useState({
    id: null,
    status: false,
    collection: []
  })

  const onSetLocalStorage = () => {
    if(!localStorage.getItem('collections')){
      localStorage.setItem('collections', JSON.stringify(collections));
    }
    return;
  }

  onSetLocalStorage();

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
      {
        tasks.status
          ? <CTasks tasks={ tasks } setTasks={ setTasks } />
          : <GContent setCollection={ setCollection } collectionState={ collectionState } setTasks={ setTasks } />
      }
      
      {/* Mobile Menu */}
      {
        boxSize < 1024 && <MNavbar />
      }

      {/* Form Component */}
      {
        collection && 
          <GNewCollection 
            setCollection={ setCollection } 
            setCollectionState={ setCollectionState }
          />
      }
    </main>
  )
}
