export const DIcon = ({ icon, style }) => {
  return (
    <div className={`${ style } w-7 h-7 flex items-center justify-center rounded-xl cursor-pointer` } >
      <img 
        src={ icon } 
        alt="Icon" 
        className="w-5"
      />
    </div>
  )
}
