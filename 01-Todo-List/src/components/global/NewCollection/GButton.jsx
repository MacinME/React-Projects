export const GButton = ({ setFunction, style, name, testId }) => {
  return (
    <button
    data-testid={ testId }
      onClick={ setFunction }
      className={`flex w-full justify-center items-center text-sm text-white text-center py-3 px-4 my-6 rounded-xl xl:text-base xl:w-auto xl:w-32 ${ style }`}
    >
        { name }
    </button>
  )
}
