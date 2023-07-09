import { collections } from '../data/collections';
import { GAddCollection } from './GAddCollection';
import { GCollection } from './GCollection';

export const GContent = ({ width }) => {
  return (
    
    <section className={`${ width > 1200 && ' w-3/6 mx-auto h-full' } ${ width < 800 && ' overflow-y-scroll pb-20' } h-2/3 px-4`} >
       <div className={`${ width < 800 && 'justify-items-center' } bg-background_color w-full grid grid-cols-2 gap-3 pt-10 pb-3 ${ width > 799 && 'grid-cols-3 '} ${ width > 999 && 'justify-items-start'}`}>

       {
            collections.map(( c ) => (
                <GCollection 
                    key={ c.id }
                    width={ width }
                    {...c}
                />
            ))
        }
       <GAddCollection width={ width } />

       </div>

    </section>
  )
}
