import { useRef, useState } from 'react';
import Plus from '../../../assets/smallPlus.svg'
import { useForm } from '../../../hooks/useForm';
import ALeft from '../assets/aLeft.svg';
import { CItems } from './CItems';

export const CTasks = ({ tasks, setTasks }) => {

    const { collection: { title, id } } = tasks;
    const initialValues = JSON.parse(localStorage.getItem('collections')).filter( t => t.id === id)[0].collectionTasks;

    const formRef = useRef(null);
    const [displayTasks, setDisplayTasks] = useState( initialValues );

    const { simpleForm, onInputChange, taskName, onResetForm } = useForm({
        id: null,
        taskName: '',
        date: new Date().toLocaleDateString()
    });

    const onAddTask = (e) => {
        e.preventDefault();
        if( taskName.trim().length < 2 ) return;    

        const getData = JSON.parse( localStorage.getItem('collections') );
        const newTasks = getData.map((c) => {
            if(c.id === id){
                c.collectionTasks = [...c.collectionTasks, {
                    ...simpleForm,
                    id: Date.now()
                }];
            }
            return c;
        });

        localStorage.setItem('collections', JSON.stringify( newTasks ));
        const getTasks = JSON.parse(localStorage.getItem('collections'));
        const getTask = getTasks.filter( t => t.id === id);
        setDisplayTasks( getTask[0].collectionTasks  );
        onResetForm();
    }

  return (
    <div className="w-full flex flex-col gap-5 px-4 lg:w-3/6 lg:mx-auto pt-5 lg:pt-20">
        <div className="flex items-center gap-4 rounded-xl">
            <button
                onClick={ () => setTasks({ status: false, collection: [] }) }
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
            ref={ formRef }
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
                displayTasks.map( task => (
                    <CItems 
                        key={ task.id } 
                        {...task}
                    />
                ))
            }
            
        </div>
    </div>
  )
}
