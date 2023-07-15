import { useState } from 'react';
import Close from '../assets/close.svg';
import PropTypes from 'prop-types';

export const CItems = ({ 
    id, 
    taskName, 
    date,
    status,
    onDeleteDataFromLocalStorage,
    tasks,
    onUpdateLocalStorage
  }) => {

    const [ischecked, setIschecked] = useState( status );

    const onSuccessTask = (evt) => {

      setIschecked(evt.target.checked);

      const updatedTasks = tasks.map( task => {
        if(task.id === id){
          task.status = evt.target.checked;
        }
        return task;
      });
    
      onUpdateLocalStorage(updatedTasks);
    }

  return (
    <div className="bg-navbar_color rounded-xl w-full py-1 px-2">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input 
                  type="checkbox"
                  onChange={ onSuccessTask } 
                  checked={ ischecked }
                  id={ id }
                  className="accent-pink-500 rounded-full"
              />
              <div>
                  <p className={`text-gray-100 text-sm lg:text-base ${ ischecked && "line-through" }`}>{ taskName }</p>
                  <p className="text-gray-400 text-sm">Date: <span className="text-button_color">{ date }</span></p>
              </div>
          </div>

          <button
            onClick={ () => onDeleteDataFromLocalStorage(id) }
            className="text-white"
          >
            <img 
              src={ Close } 
              alt="Icon"
              className="w-4 md:w-6"
            />
          </button>
        </div>
    </div>
  )
}

CItems.propTypes = {
  id: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onDeleteDataFromLocalStorage: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onUpdateLocalStorage: PropTypes.func.isRequired
}