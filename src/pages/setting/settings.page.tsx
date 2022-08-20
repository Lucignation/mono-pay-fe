import { FC, useState } from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';

import { CgMenuLeft } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';

import styles from './settings.module.scss';
import Button from '../../components/button/button.component';

import { logOut } from '../../store/userReducer';
import { useNavigate } from 'react-router-dom';

type props = {};

const Settings: FC<props> = () => {
  const userCred = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(userCred);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <div className={styles.dashboard_main}>
      <div className={styles.dashboard_sidebar}>
        <Sidebar />
      </div>

      <div
        className={styles.dashboard_sidebar_mobile}
        onClick={handleHamburger}
      >
        {isOpen ? (
          <div>
            <div className={styles.close_navbar_control}>
              <AiOutlineClose />
            </div>
            <Sidebar />
          </div>
        ) : (
          <div className={styles.open_navbar_control}>
            <CgMenuLeft />{' '}
          </div>
        )}
      </div>
      <div onClick={handleLogout}>
        <Button btnText='Logout' btnType='primary' />
      </div>
    </div>
  );
};

export default Settings;
