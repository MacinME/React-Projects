import { useEffect, useState } from 'react';
import Close from '../assets/close.svg';

export const CItems = ({ 
    id, 
    taskName, 
    date, 
    status, 
    idCollection,
    updateLocalStorage 
  }) => {

  const [ischecked, setIscChecked] = useState( status );
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('collections'));
    const collection = getData.find(c => c.id === idCollection);
    if(collection){
      setTasks(collection.collectionTasks);
    }
  }, [idCollection])

  const onCheckInput = (evt) => {
    setIscChecked(evt.target.checked);
    const updatedTasks = tasks.filter( task => {
      if(task.id === id){
        task.status = evt.target.checked;
      }
      return task;
    });

    updateLocalStorage(updatedTasks);
  }

  const onDeleteTask = (idTask) => {
    const updatedTasks = tasks.filter( task => {
        if(task.id !== idTask){
          return task
        }
    });

    updateLocalStorage(updatedTasks);
}

  return (
    <div className="bg-navbar_color rounded-xl w-full py-1 px-2">
        <div className="flex justify-between">
          <div className='flex gap-2'>
            <input 
                  type="checkbox"
                  onChange={ onCheckInput } 
                  checked={ ischecked }
                  className="accent-pink-500 rounded-full"
              />
              <div>
                  <p className={`text-gray-100 text-sm lg:text-base ${ ischecked && 'line-through' }`}>{ taskName }</p>
                  <p className="text-gray-400 text-sm">Date: <span className="text-button_color">{ date }</span></p>
              </div>
          </div>

          <button
            onClick={ () => onDeleteTask(id) }
            className='text-white'
          >
            <img 
              src={ Close } 
              alt="Icon"
              className='w-4 md:w-6' 
            />
          </button>
        </div>
    </div>
  )
}
