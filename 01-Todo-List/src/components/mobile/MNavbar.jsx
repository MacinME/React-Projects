import { GIcon } from '../global/GIcon';
import { MenuIcons } from './data/MenuIcons';

export const MNavbar = () => {
  return (
    <div className="bg-background_color w-full h-auto py-2 px-5 fixed inset-x-0 bottom-0">
      <div className="flex items-center justify-between gap-5">
        {
          MenuIcons.map(( icon ) => (
            <GIcon 
              key={ icon.id } 
              {...icon}
            />
          ))
        }
      </div>
    </div>
  )
}
