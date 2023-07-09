
export const GTabItem = ({ tabName, active }) => {
  return (
    <div className={ `${ active } ' rounded-xl border w-auto border-gray-700 px-3 py-1.5 cursor-pointer ' ` }>
      <p className='text-sm text-white font-semibold'>{ tabName }</p>
    </div>
  )
}
