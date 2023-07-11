import { NCloseButton } from './NCloseButton';
import { useForm } from '../../../hooks/useForm';
import { categories } from './data/catgories';
import { NAddButton } from './NAddButton';

export const GNewCollection = ({ setCollection, setCollectionState }) => {

    const { collection, category, onInputChange } = useForm({
        category: '',
        collection: ''
    });

    const onAddCollection = (evt) => {
        const getData = JSON.parse(localStorage.getItem('collections')) || [];

        evt.preventDefault();
        if( collection.trim().length < 2 || category.trim().length < 1) return;

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
            style: filtered[0].style
        }]));

        const getData = JSON.parse(localStorage.getItem('collections')) || [];
        
        setCollectionState(getData);
    }

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center xl:items-start">
        <div className="bg-navbar_color w-full h-64 py-4 px-2 rounded-xl mx-4 border border-gray-700 relative sm:w-96 xl:mt-20">
            <form className="flex flex-col gap-3 py-4">
                <label className="w-full text-gray-200 text-sm font-semibold ml-4 xl:text-base">Category</label>
                <select 
                    name="category" 
                    id="category"
                    onChange={ onInputChange }
                    className='bg-background_color outline-none border border-gray-700 text-white text-md py-1 px-4 border-0 border-b border-gray-200 focus:border-purple-400'
                >
                    <option value="">Select category</option>
                    {
                        categories.map((category) => (
                            <option key={ category.id } value={ category.title }>{ category.title }</option>
                        ))
                    }
                </select>
                <div className="flex flex-col gap-2">
                    <label className="w-full text-gray-200 text-sm font-semibold ml-4 xl:text-base">Collection</label>
                    <input 
                        type="text" 
                        placeholder="Name"
                        name='collection'
                        value={ collection }
                        onChange={ onInputChange }
                        className="bg-transparent outline-none border border-gray-700 text-white text-md py-1 px-4 border-0 border-b border-gray-200 focus:border-purple-400"
                    />
                </div>
                <NAddButton onAddCollection={ onAddCollection } />
            </form>
            <NCloseButton setCollection={ setCollection } />
        </div>
    </div>
  )
}
