import PropTypes from 'prop-types';
import { GIcon } from './GIcon';
import { GProgressBar } from './GProgressBar';

export const GCollection = ({ id, icon, title, style, collectionTasks, setState}) => {

  const doneTasks = collectionTasks.filter(c => c.status).length;
  const totalTasks = collectionTasks.length;

  return (
    <div 
      data-testid="collection"
      onClick={ () => setState({ status: true, collection: { id, title, collectionTasks} }) }
      className="bg-collection_color w-full h-40 p-5 rounded-xl cursor-pointer hover:bg-collection_hover overflow-hidden sm:w-48 sm:h-48" 
    >
        <div className="w-full mb-8 sm:mb-14" >
            <GIcon icon={ icon } style={ style } />
        </div>
        <div className="w-full">
            <p className="text-white text-lg font-bold sm:text-xl" >{ title }</p>
            <div className="flex justify-between items-center">
                <span className="text-gray-500"> {` ${ doneTasks } / ${ totalTasks }`}</span>

                <GProgressBar progressEndValue={ doneTasks } totalTasks={ totalTasks } />
            </div>
        </div>
    </div>
  )
}

GCollection.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  collectionTasks: PropTypes.array.isRequired,
  setState: PropTypes.func.isRequired
}
