import SmallPlus from '../../assets/smallPlus.svg';

export const GAddCollection = ({ width }) => {
  return (
    <div className={`border-dotted border-2 border-gray-700 w-40 h-24 flex justify-center items-center rounded-xl cursor-pointer ${ width > 799 && 'w-48 h-24' }`}>
      <img 
        src={ SmallPlus } 
        alt="Icon" 
        className='w-6'
      />
    </div>
  )
}
