import { GTabItem } from './GTabItem';

export const GTabs = () => {
  return (
    <div className="col-span-2 flex place-self-start flex-wrap gap-3 bg-background_color sm:col-span-3 lg:col-span-4 xl:col-span-3" >
        <h2 className='w-full text-white text-2xl font-bold mb-5 lg:pt-10'>Collections</h2>
        <GTabItem 
          tabName="Favourites"
        />
        <GTabItem 
          tabName="All Collections"
          active="bg-tab_collection_color"
        />
    </div>
  )
}
