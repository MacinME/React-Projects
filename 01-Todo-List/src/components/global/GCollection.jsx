import { GIcon } from './GIcon';

export const GCollection = ({ icon, title, quantity, style, width }) => {
  return (
    <div className={`bg-collection_color w-40 h-40 p-5 rounded-xl cursor-pointer hover:bg-collection_hover ${ width > 799 && 'w-48 h-48' }`} >
        <div className={`w-full mb-8 ${ width > 799 && 'mb-12' }`}>
            <GIcon icon={ icon } style={ style } width={ width }  />
        </div>
        <div className='w-full'>
            <p className={`text-white text-lg font-bold ${ width > 800 && 'text-xl' }`} >{ title  }</p>
            <div>
                <span className='text-gray-500'>4/8 done</span>
            </div>
        </div>
    </div>
  )
}
