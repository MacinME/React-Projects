import { useEffect, useState } from 'react';
import DoneIcon from '../global/assets/done.svg';

export const GProgressBar = ({ progressEndValue, totalTasks }) => {

    
    const [progressValue, setProgressvalue] = useState(0);

    useEffect(() => {

        const intervalDuration = 100;

        const progress = setInterval(() => {
            setProgressvalue( (prevProgress) => {
                if(prevProgress >= progressEndValue){
                    clearInterval( progress );
                    return progressEndValue;
                }
                return prevProgress + 1;
            });
        },intervalDuration);
    
      return () => {
        clearInterval( progress );
      }
    }, [progressEndValue])

    const progress = ((progressValue - 0) / (totalTasks - 0)) * 100;

  return (
    <div className="circular-progress" style={{ background: `conic-gradient( 
        #4d5bf9 ${ progress * 3.6}deg,
        #cadcff ${ progress * 3.6}deg
    )`}}>
        <div 
            className="circular-value" 
        >{ progress > 99 &&  <img src={ DoneIcon } alt="Icon" className='w-4' /> }</div>
    </div>
  )
}
