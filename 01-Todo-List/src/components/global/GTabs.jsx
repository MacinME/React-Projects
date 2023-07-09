import { GTabItem } from './GTabItem';

export const GTabs = ({ width }) => {
  return (
    <>

      <div className={`h-auto flex items-center flex-wrap gap-3 bg-background_color px-4 ${ width > 1200 && 'w-3/6 mx-auto' } ${ width > 799 && 'pt-32' }` }>
          {
            width > 799 && <h2 className='w-full text-white text-2xl font-bold mb-10'>Collections</h2>
          }
          <GTabItem 
            tabName="Favourites"
          />
          <GTabItem 
            tabName="All Collections"
            active="bg-tab_collection_color"
          />
      </div>
    </>
  )
}
