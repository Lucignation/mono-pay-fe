import { FC, useState, useEffect } from 'react';

// import HandleIcon from '../public/images/icons/handleicon.svg';
// import EyeIcon from '../public/images/icons/eyeicon.svg';
// import HideEye from '../public/images/icons/eyehide.svg';
import styles from './input.module.scss';

type props = {
  formType?: string;
  placeholder?: string;
  signups: any;
  setSignups: any;
  name: string;
};

const Input: FC<props> = ({
  formType,
  placeholder,
  name,
  setSignups,
  signups,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const handleSignup = () => {

  // }

  const showTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {formType === 'password' ? (
        <div className={styles.singleInput}>
          <input
            type={formType}
            placeholder={placeholder}
            className={styles.input}
            name={name}
            value={signups}
            onChange={(e) => setSignups(e.target.value)}
          />
        </div>
      ) : (
        <div className={styles.singleInput}>
          <input
            type={formType}
            placeholder={placeholder}
            className={styles.input}
            name={name}
            value={signups}
            onChange={(e) => setSignups(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
