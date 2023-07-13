import { GIcon } from './GIcon';

export const GCollection = ({ id, icon, title, style, collectionTasks, setState}) => {
  return (
    <div 
      onClick={ () => setState({ status: true, collection: { id, title, collectionTasks} }) }
      className="bg-collection_color w-full h-40 p-5 rounded-xl cursor-pointer hover:bg-collection_hover overflow-hidden sm:w-48 sm:h-48" 
    >
        <div className="w-full mb-8 sm:mb-14" >
            <GIcon icon={ icon } style={ style } />
        </div>
        <div className="w-full">
            <p className="text-white text-lg font-bold sm:text-xl" >{ title }</p>
            <div>
                <span className="text-gray-500"> {` ${ collectionTasks.filter(c => c.status).length } / ${ collectionTasks.length }`}</span>
            </div>
        </div>
    </div>
  )
}
