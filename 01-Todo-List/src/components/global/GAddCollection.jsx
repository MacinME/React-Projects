import SmallPlus from '../../assets/smallPlus.svg';

export const GAddCollection = () => {
  return (
    <div className="border-dotted border-2 border-gray-700 w-full h-24 flex justify-center items-center rounded-xl cursor-pointer sm:w-48 sm:h-24">
      <img 
        src={ SmallPlus } 
        alt="Icon" 
        className="w-6"
      />
    </div>
  )
}
