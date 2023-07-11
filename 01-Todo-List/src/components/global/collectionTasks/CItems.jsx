export const CItems = ({ taskName, date }) => {
  return (
    <div className="bg-navbar_color rounded-xl w-full py-1 px-2">
        <div className="flex gap-2">
            <input 
                type="checkbox" 
                className="accent-pink-500 rounded-full"
            />
            <div>
                <p className="text-gray-100 text-sm lg:text-base">{ taskName }</p>
                <p className="text-gray-400 text-sm">Date: <span className="text-button_color">{ date }</span></p>
            </div>
        </div>
    </div>
  )
}
