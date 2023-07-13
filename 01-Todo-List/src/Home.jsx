import { useEffect, useRef, useState } from 'react';
import { GContent } from './components/global';
import { MNavbar } from './components/mobile';
import { DNavbar } from './components/desktop';
import { GNewCollection } from './components/global/NewCollection/GNewCollection';
import { collections } from './components/data/collections';
import { CTasks } from './components/global/collectionTasks/CTasks';
import { useLocalStorage } from './hooks/useLocalStorage';

export const Home = () => {

  const resizeRef = useRef(null);
  const [boxSize, setBoxsize] = useState(null);
  const { onSetData, onGetData } = useLocalStorage();
  const [collection, setCollection] = useState(false);
  const [collectionState, setCollectionState] = useState([]);
    
  const [state, setState] = useState({
    id: null,
    status: false,
    collection: []
  })

  useEffect(() => {

    if(!localStorage.getItem('collections')){
      onSetData(collections);
    } 

    setCollectionState(
      onGetData()
    );

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
      className={`w-full bg-background_color relative overflow-hidden ${ collection && boxSize < 640 ? "h-screen" : "h-full" }`}
    >
      {/* Desktop Menu */}
      {
        boxSize > 1023 && <DNavbar />
      }

      {/* Content */}
      {
        state.status
          ? <CTasks state={ state } setState={ setState } />
          : <GContent setCollection={ setCollection } collectionState={ collectionState } setState={ setState } />
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
