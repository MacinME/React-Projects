import { useEffect } from 'react';
import Plus from '../../../assets/smallPlus.svg'
import { useForm } from '../../../hooks/useForm';
import ALeft from '../assets/aLeft.svg';
import { CItems } from './CItems';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const CTasks = ({ state, setState }) => {
    const { collection: { title, id } } = state;

    const { tasks, setTasks, onGetDataById, onDeleteDataFromLocalStorage, onUpdateLocalStorage } = useLocalStorage(id);
    const { simpleForm, taskName, onInputChange, onResetForm } = useForm({
        id: null,
        taskName: '',
        date: new Date().toLocaleDateString(),
        status: false
    });

    const onAddTask = (e) => {
        e.preventDefault();
        if( taskName.trim().length < 2 ) return;    
        const { collectionTasks } = onGetDataById(id);
        const newValues = [...collectionTasks, {
            ...simpleForm,
            id: Date.now()
        }];

        onUpdateLocalStorage( newValues );
        onResetForm();
    }

    useEffect(() => {
        const data = onGetDataById(id);
        if(data){
            setTasks( data.collectionTasks );
        }
    }, [id])

  return (
    <div className="w-full flex flex-col gap-5 px-4 lg:w-3/6 lg:mx-auto pt-5 lg:pt-20">
        <div className="flex items-center gap-4 rounded-xl">
            <button
                onClick={ () => setState({ status: false, collection: [] }) }
                className='w-10 h-10 bg-navbar_color flex items-center justify-center rounded-xl py-1'
            >
                <img 
                    src={ ALeft } 
                    alt="Icon" 
                    className='w-6'
                />
            </button>
            <p className="text-white texxt-2xl font-bold lg:text-2xl">
                { title }
            </p>
        </div>
        <form
            onSubmit={ onAddTask }
            className="w-full flex items-center gap-3 bg-background_color px-2 rounded-xl border border-gray-700"
        >
            <button
                className="bg-button_color w-8 h-7 text-dark-900 flex items-center justify-center rounded-xl cursor-pointer"
            >
                 <img 
                    src={ Plus } 
                    alt="Icon" 
                    className='w-6 '
                />
            </button>
            <input 
                type="text" 
                placeholder="Add Task"
                onChange={ onInputChange }
                name='taskName'
                value={ taskName }
                className="w-full bg-transparent py-2 text-gray-400 text-sm outline-none focus:text-white"
            />
        </form>

        <div className='flex flex-col gap-3'>
            {
                tasks.map( task => (
                    <CItems
                        key={ task.id }
                        {...task}
                        tasks={ tasks } 
                        onUpdateLocalStorage={ onUpdateLocalStorage }
                        onDeleteDataFromLocalStorage={ onDeleteDataFromLocalStorage }
                    />
                ))
            }
        </div>
    </div>
  )
}
