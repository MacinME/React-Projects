import image from '../../assets/user.png';

export const Profile = () => {
  return (
    <div
        className='w-10 rounded-full'
    >
        <img 
            src={ image } 
            alt="user Profile" 
            className='w-10 rounded-full'
        />
    </div>
  )
}
