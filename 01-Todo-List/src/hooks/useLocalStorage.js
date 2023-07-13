import { useState } from 'react';

const keyName = 'collections';

export const useLocalStorage = (idCollection) => {

    const [tasks, setTasks] = useState([]);

    // Set data at local sotrage 
    const onSetData = (dataUpdated) => {
        return localStorage.setItem(keyName, JSON.stringify(dataUpdated));
    }

    // Get data from local sotrage 
    const onGetData = () => {
        return JSON.parse( localStorage.getItem(keyName));
    }

    // Main function to update the local sotrage data
    const onUpdateLocalStorage = (updatedTasks) => {
        const updateData = onGetData().map((collection) => {
            if(collection.id === idCollection){
                collection.collectionTasks = updatedTasks;
            }
            return collection;
        });

        onSetData(updateData);
        setTasks( updatedTasks );
    }

    // Delete an item from local storage
    const onDeleteDataFromLocalStorage = (idTask) => {
        const updatedTasks = tasks.filter( task => {
            if(task.id !== idTask){
              return task
            }
        });
        onUpdateLocalStorage(updatedTasks);
    }

    // Find a collection
    const onGetDataById = (id) => {
        return onGetData().find((data) => data.id === id);
    }

  return {
    tasks,
    setTasks,
    onSetData,
    onGetData,
    onGetDataById,
    onUpdateLocalStorage,
    onDeleteDataFromLocalStorage
  }
}
