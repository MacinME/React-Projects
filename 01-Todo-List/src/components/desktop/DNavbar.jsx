import { DIcon, Profile } from './';
import Plus from '../../assets/plus.svg';
import Magnifying from '../../assets/magnifying.svg';
import Bell from '../../assets/bell.svg';

export const DNavbar = () => {
  return (
    <div className="w-full bg-navbar_color h-16 px-8 py-5 flex items-center justify-between fixed">
        <div>
            <ul>
                <li className='text-white text-lg font-semibold'>Collections</li>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
            <DIcon 
                icon={ Plus } 
                style='bg-gradient-to-r from-pink-500 via-pink-600 to-purple-400 nav'
            />
            <DIcon icon={ Magnifying } />
            <DIcon icon={ Bell } />
            <Profile />
        </div>
    </div>
  )
}
