import { collections } from '../data/collections';
import { GAddCollection } from './GAddCollection';
import { GCollection } from './GCollection';
import { GTabs } from './GTabs';

export const GContent = () => {
  return (
    <section className="h-2/3 px-4 overflow-y-scroll pb-20 xl:w-3/6 xl:mx-auto xl:h-full lg:overflow-hidden" >
       <div className="bg-background_color w-full grid grid-cols-2 gap-3 pt-10 justify-items-center sm:grid-cols-3 lg:grid-cols-4 xl:justify-items-start xl:grid-cols-3" >
          <GTabs />
        {
              collections.map(( c ) => (
                  <GCollection 
                      key={ c.id }
                      {...c}
                  />
              ))
          }
        <GAddCollection />
       </div>
    </section>
  )
}
