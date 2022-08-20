import { FC, useState } from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';
import BalanceCard from '../../components/balance-card/balance-card.component';
import MongoGo from '../../components/money-go/money-go.component';

import { CgMenuLeft } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { logOut } from '../../store/userReducer';

import styles from './dashboard.module.scss';

//import icons
import Stats from '../../assets/images/Stats.svg';
import Avatar from '../../assets/images/Bitmap.svg';
import Calendar from '../../assets/images/calendar.svg';
import Threedots from '../../assets/images/threedots.svg';

import { Link } from 'react-router-dom';
import Transactions from '../../components/transaction-card/transaction-card.component';

type props = {};

const Dashboard: FC<props> = () => {
  const userCred = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  console.log(userCred);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
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

      <div className={styles.dashboard_main_content}>
        <div className={styles.dashboard_welcome_corner}>
          <div className={styles.user_greetings}>
            <div className={styles.avatar}>
              <img src={Avatar} alt='user avatar' />
            </div>
            <p>Good Morning, {userCred.user.firstName}</p>
          </div>
          <div className={styles.filter_date}>
            Today <img src={Calendar} alt='filter date' />{' '}
          </div>
        </div>
        <div className={styles.dashboard_stats}>
          <h3>Expense Tracker</h3>
          <img src={Stats} alt='stats' />
        </div>

        <div className={styles.transactions_info}>
          <div className={styles.transactions_heading}>
            <p>Latest Transactions</p>
            <img src={Threedots} alt='more actions' />
          </div>

          <div className={styles.horizontal_line}></div>

          <Transactions />
        </div>
      </div>
      <div className={styles.dashboard_main_right_content}>
        <BalanceCard />

        <MongoGo />
      </div>
    </div>
  );
};

export default Dashboard;
