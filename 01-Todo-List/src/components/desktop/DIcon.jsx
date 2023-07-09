
export const DIcon = ({ icon, style }) => {
  return (
    <div className={`${ style } w-8 flex items-center justify-center h-7 rounded-xl py-4 cursor-pointer` } >
      <img 
        src={ icon } 
        alt="Icon" 
        className='w-5'
      />
    </div>
  )
}
