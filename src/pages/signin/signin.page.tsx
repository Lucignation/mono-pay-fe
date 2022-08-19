import { FC, useState, useEffect } from 'react';
import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { LoginContext } from '../../App';

//styles
import styles from '../../assets/styles/layout.module.scss';

//importing of images
import Logo from '../../assets/images/mono.svg';

type props = {};
const Login: FC<props> = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!email && !password) {
      const notify = () =>
        toast.error("Email/Password can't be empty.", {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      notify();
    }

    if (password.length < 6) {
      const errorNotify = () =>
        toast.error('kindly check the password', {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      errorNotify();
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

    if (res.status === 200) {
      navigate('/dashboard');
    }
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
            <p className={styles.remember_text}>Remember me</p>
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
      </form>
    </div>
  );
};

export default Login;
