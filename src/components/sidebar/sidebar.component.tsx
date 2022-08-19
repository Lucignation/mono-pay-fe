import { FC } from 'react';
import { useLocation, useMatch, Link } from 'react-router-dom';

import Logo from '../../assets/images/log-white.svg';

import styles from './sidebar.module.scss';

type props = {};

const Sidebar: FC<props> = () => {
  const location = useLocation(); //get user's location
  return (
    <div className={styles.sidebar_main}>
      <div className={styles.sidebar_logo}>
        <img src={Logo} alt='Logo' />
      </div>
      <ul className={styles.sidebar_list}>
        <li
          className={
            location.pathname === '/dashboard'
              ? styles.sidebar_item_active
              : styles.sidebar_item
          }
        >
          <Link to='/dashboard' className={styles.sidebar_link}>
            Dashboard{' '}
          </Link>
        </li>
        <li
          className={
            location.pathname === '/expenses'
              ? styles.sidebar_item_active
              : styles.sidebar_item
          }
        >
          <Link to='/expenses' className={styles.sidebar_link}>
            Expense
          </Link>
        </li>
        <li
          className={
            location.pathname === '/wallet'
              ? styles.sidebar_item_active
              : styles.sidebar_item
          }
        >
          <Link to='/wallet' className={styles.sidebar_link}>
            Wallet
          </Link>
        </li>
        <li
          className={
            location.pathname === '/summary'
              ? styles.sidebar_item_active
              : styles.sidebar_item
          }
        >
          <Link to='/summary' className={styles.sidebar_link}>
            Summary
          </Link>
        </li>
        <li
          className={
            location.pathname === '/accounts'
              ? styles.sidebar_item_active
              : styles.sidebar_item
          }
        >
          <Link to='/accounts' className={styles.sidebar_link}>
            Accounts
          </Link>
        </li>
        <li
          className={
            location.pathname === '/settings'
              ? styles.sidebar_item_active
              : styles.sidebar_item
          }
        >
          <Link to='/settings' className={styles.sidebar_link}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
