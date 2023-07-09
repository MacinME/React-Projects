export const GIcon = ({ icon, style, width }) => {
  return (
    <div className={`${ style } ${ width > 999 && 'w-12 h-12' } w-10 flex items-center justify-center h-9 rounded-xl py-4 cursor-pointer` } >
      <img 
        src={ icon } 
        alt="Icon" 
        className={`w-6 ${ width > 999 && 'w-7' } `}
      />
    </div>
  )
}
