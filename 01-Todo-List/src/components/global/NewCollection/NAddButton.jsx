export const NAddButton = ({ onAddCollection }) => {
  return (
    <button
        onClick={ onAddCollection }
        className="flex w-full bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 justify-center items-center text-sm text-white text-center py-2 px-4 my-6 rounded-xl font-bold"
    >
        Add collection
    </button>
  )
}
