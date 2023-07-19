import { useEffect } from 'react';
import PropTypes from 'prop-types';
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
        <div className="w-full bg-background_color flex flex-col gap-3 fixed top-0 left-0 py-4 px-3 lg:w-3/6 lg:top-12 lg:left-1/4">
            <div className="flex items-center gap-4 rounded-xl">
                <button
                    data-testid="back"
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
                aria-label="form"
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
                    id='taskName'
                    onChange={ onInputChange }
                    name='taskName'
                    value={ taskName }
                    className="w-full bg-transparent py-2 text-gray-400 text-sm outline-none focus:text-white"
                />
            </form>
        </div>

        <div className='flex flex-col gap-3 pt-28 pb-24'>
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

CTasks.propTypes = {
    state: PropTypes.object.isRequired,
    setState: PropTypes.func.isRequired
}