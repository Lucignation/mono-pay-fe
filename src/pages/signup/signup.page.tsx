import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

//styles
import styles from '../../assets/styles/layout.module.scss';

//importing of images
import Logo from '../../assets/images/mono.svg';

type props = {};
const Signup: FC<props> = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
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

    if (!firstName || !lastName || !email || !password) {
      return setErrors("AgentId/Password can't be empty.");
    }
    const signupObj = {
      firstName,
      lastName,
      email,
      password,
    };

    const res = await axios.post(
      'https://monopay-be.herokuapp.com/api/user/signup',
      signupObj
    );
    console.log(res);

    if (res.status === 200) {
      navigate('/');
    }
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_heading_info}>
        <img src={Logo} alt='logo' />
        <p className={styles.login_sub_heading}>
          Track all your bank expenses in one place
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.divide_input}>
          <Input
            formType='input'
            placeholder='First Name'
            name='firstName'
            setSignups={setFirstName}
            signups={firstName}
          />

          <Input
            formType='input'
            placeholder='Last Name'
            name='lastName'
            setSignups={setLastName}
            signups={lastName}
          />
        </div>
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

        <Button btnText='GET STARTED' />

        <p className={styles.member_info}>
          Already have an account?{' '}
          <span className={styles.member_link}>
            <a href='/'>Sign in</a>
          </span>
        </p>
        {error ? <p className={styles.password_error}>{error}</p> : ''}
      </form>
    </div>
  );
};

export default Signup;
