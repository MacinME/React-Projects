import { GIcon } from './GIcon';

export const GCollection = ({ icon, title, done, quantity, style }) => {
  return (
    <div className="bg-collection_color w-full h-40 p-5 rounded-xl cursor-pointer hover:bg-collection_hover overflow-hidden sm:w-48 sm:h-48" >
        <div className="w-full mb-8 sm:mb-14" >
            <GIcon icon={ icon } style={ style } />
        </div>
        <div className="w-full">
            <p className="text-white text-lg font-bold sm:text-xl" >{ title }</p>
            <div>
                <span className="text-gray-500">{ done }</span>
            </div>
        </div>
    </div>
  )
}
