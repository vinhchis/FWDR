import styles from "../App.module.css"; 
function UserPic() { 
  return ( 
    <div> 
      <img 
        className={styles["profile-pic"]} 
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        alt="Mark" 
      /> 
    </div> 
  ); 
} 

export default UserPic;