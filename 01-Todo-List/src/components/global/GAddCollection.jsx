import SmallPlus from '../../assets/smallPlus.svg';
import PropTypes from 'prop-types';

export const GAddCollection = ({ setCollection }) => {
  return (
    <button 
      onClick={ () => setCollection((value) => !value) }
      className="border-dotted border-2 border-gray-700 w-full h-24 flex justify-center items-center rounded-xl cursor-pointer sm:w-48 sm:h-24 hover:bg-collection_hover"
    >
      <img 
        src={ SmallPlus } 
        alt="Icon" 
        className="w-6"
      />
    </button>
  )
}

GAddCollection.propTypes = {
  setCollection: PropTypes.func.isRequired
}
