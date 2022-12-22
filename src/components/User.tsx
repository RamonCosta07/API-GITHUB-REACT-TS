import { userProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import styles from './User.module.css';

const User = ({
  login,
  avatar_url,
  followers,
  location,
  following,
}: userProps) => {

  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={styles.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
