export const GIcon = ({ icon, style }) => {
  return (
    <div className={`${ style } w-10 flex items-center justify-center h-9 rounded-xl py-4 cursor-pointer lg:w-11 lg:h-11` } >
      <img 
        src={ icon } 
        alt="Icon" 
        className="w-6 lg:w-7"
      />
    </div>
  )
}
