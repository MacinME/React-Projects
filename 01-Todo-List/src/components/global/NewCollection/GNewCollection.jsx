import { useForm } from '../../../hooks/useForm';
import { categories } from './data/catgories';
import { GButton } from './GButton';
import Folder from '../assets/folder.svg';
import { useRef } from 'react';

export const GNewCollection = ({ setCollection, setCollectionState }) => {

    const { collection, category, onInputChange } = useForm({
        category: '',
        collection: ''
    });

    const collectionRef = useRef(null);

    const onAddCollection = (evt) => {
        const getData = JSON.parse(localStorage.getItem('collections')) || [];

        evt.preventDefault();
        if( collection.trim().length < 2 || category.trim().length < 1) {
            return collectionRef.current.style.border = '1px #ff4662 solid';
        };

        onSetLocalStorage( getData, { collection, category } );
        setCollection(false);
    }

    const onSetLocalStorage = (collections, state) => {
        const { collection, category } = state;
        const filtered = categories.filter(c => c.title === category);

        localStorage.setItem('collections', JSON.stringify([...collections, {
            id: Date.now(), 
            title: collection,  
            done: filtered[0].done,
            icon: filtered[0].icon,
            style: filtered[0].style,
            collectionTasks: []
        }]));

        const getData = JSON.parse(localStorage.getItem('collections')) || [];
        
        setCollectionState(getData);
    }

  return (
    <div className="w-screen h-screen backdrop-brightness-50 absolute top-0 left-0 flex justify-center xl:items-start">
        <div className="bg-navbar_color w-full h-64 py-4 px-4 fixed bottom-0 rounded-tl-3xl rounded-tr-3xl mx-4 border border-gray-700 sm:w-96 sm:mt-28 sm:static sm:rounded-3xl">
            <form className="flex flex-col gap-3 py-4">
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="Name"
                        name='collection'
                        value={ collection }
                        onChange={ onInputChange }
                        autoComplete="off"
                        ref={ collectionRef }
                        className="bg-transparent outline-none border border-gray-700 text-white text-md py-3 px-4 border-gray-200 focus:border-purple-400 rounded-xl"
                    />
                </div>
                <div className='flex bg-transparent w-32 border border border-gray-700 rounded-xl py-1 px-2 focus:border-purple-400'>
                    <img src={ Folder } alt="Icon" className='w-5' />
                    <select 
                        name="category" 
                        id="category"
                        onChange={ onInputChange }
                        className='appearance-none bg-navbar_color outline-none text-white text-sm py-1 px-4 border-0 xl:text-base'
                    >
                            <option value="">Category</option>
                        {
                            categories.map((category) => (
                                <option key={ category.id } value={ category.title }>{ category.title }</option>
                            ))
                        }
                    </select>
                </div>
                <div className='flex gap-2'>
                    <GButton 
                        setFunction={ onAddCollection } 
                        style="bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 font-bold hover:bg-gradient-to-r hover:from-pink-400 hover:via-pink-400 hover:to-pink-500"
                        name="Add Task" 
                        testId="addCollection"               
                    />

                    <GButton 
                        setFunction={ () => setCollection( false ) } 
                        style="bg-button_gray xl:font-bold"
                        name="Cancel"                
                    />
                </div>
            </form>
        </div>
    </div>
  )
}
