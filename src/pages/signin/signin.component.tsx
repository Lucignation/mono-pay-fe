import { FC, useState, useEffect } from 'react';
import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import axios from 'axios';

//styles
import styles from '../../assets/styles/layout.module.scss';

//importing of images
import Logo from '../../assets/images/mono.svg';

type props = {};
const Login: FC<props> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [error, setErrors] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setErrors('');
    }, 2000);
  }, [error]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!email && !password) {
      return setErrors("AgentId/Password can't be empty.");
    }
    const signupObj = {
      email,
      password,
    };

    const res = await axios.post(
      'https://monopay-be.herokuapp.com/api/user/signin',
      signupObj
    );

    console.log(res);
    // console.log(signupObj);
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_heading_info}>
        <img src={Logo} alt='logo' />
        <p className={styles.login_sub_heading}>
          Securely login to your account
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          formType='input'
          placeholder='Email'
          name='email'
          setSignups={setEmail}
          signups={email}
        />
        <Input
          formType='password'
          placeholder='Password'
          name='password'
          setSignups={setPassword}
          signups={password}
        />

        <div className={styles.login_mid_info}>
          <div className={styles.remember_me}>
            <input type='checkbox' name='rememberMe' />
            <span className={styles.remember_text}>Remember me</span>
          </div>

          <span className={styles.login_forgot_password}>
            <a href='/forgot-password'>I forgot my password</a>
          </span>
        </div>

        <Button btnText='LOG IN' btnType='primary' />

        <p className={styles.member_info}>
          Don’t have an account?{' '}
          <span className={styles.member_link}>
            <a href='/signup'>Sign up</a>
          </span>
        </p>
        {error ? <p className={styles.password_error}>{error}</p> : ''}
      </form>
    </div>
  );
};

export default Login;
