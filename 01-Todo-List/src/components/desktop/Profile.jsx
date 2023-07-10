import image from '../../assets/user.png';

export const Profile = () => {
  return (
    <div
        className="w-8 rounded-full cursor-pointer"
    >
        <img 
            src={ image } 
            alt="user Profile" 
            className="w-8 rounded-full"
        />
    </div>
  )
}
