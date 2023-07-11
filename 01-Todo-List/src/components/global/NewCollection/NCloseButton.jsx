import Close from '../../../assets/close.svg';

export const NCloseButton = ({ setCollection }) => {
  return (
    <button 
        onClick={ () => setCollection(false)}
        className='w-12 flex items-center justify-center absolute top-0 right-0 border border-red-900 rounded-tr-xl rounded-bl-md hover:bg-red-700'
    >
        <img 
            src={ Close } 
            alt="Icon" 
            className="w-5"
        />
    </button>
  )
}
