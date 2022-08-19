import { FC, useState } from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';
import BalanceCard from '../../components/balance-card/balance-card.component';
import MongoGo from '../../components/money-go/money-go.component';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';

import styles from './dashboard.module.scss';

//import icons
import Stats from '../../assets/images/Stats.svg';
import Avatar from '../../assets/images/Bitmap.svg';
import Calendar from '../../assets/images/calendar.svg';
import Threedots from '../../assets/images/threedots.svg';
import FoodIcon from '../../assets/images/food-icon.svg';
import Entertainment from '../../assets/images/entertainment-icon.svg';
import TransportIcon from '../../assets/images/transport-icon.svg';
import FoodieIcon from '../../assets/images/foodie-icon.svg';
import HouseIcon from '../../assets/images/house-icon.svg';
import { Link } from 'react-router-dom';

type props = {};

const Dashboard: FC<props> = () => {
  const userCred = useSelector((state: RootState) => state.user);

  console.log(userCred.user);
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
            Close <Sidebar />
          </div>
        ) : (
          <div>open</div>
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

          <div className={styles.transactions_list}>
            <div className={styles.transactions_item}>
              <img src={FoodIcon} alt='food transaction' />
              <div className={styles.transaction_detail}>
                <h5 className={styles.transaction_title}>Jumia Food</h5>
                <p className={styles.transaction_time_date}>
                  11-11-2021 &#8226; 10:12am &#8226; Credit
                </p>
              </div>
              <h4 className={styles.transaction_amount}>-10800</h4>
            </div>

            <div className={styles.transactions_item}>
              <img src={TransportIcon} alt='transportation transaction' />
              <div className={styles.transaction_detail}>
                <h5 className={styles.transaction_title}>
                  Uber VIA Flutterwave
                </h5>
                <p className={styles.transaction_time_date}>
                  11-11-2021 &#8226; 6:10pm &#8226; Credit
                </p>
              </div>
              <h4 className={styles.transaction_amount}>-185750</h4>
            </div>

            <div className={styles.transactions_item}>
              <img src={FoodieIcon} alt='food transaction' />
              <div className={styles.transaction_detail}>
                <h5 className={styles.transaction_title}>
                  Our Eden life Subscription
                </h5>
                <p className={styles.transaction_time_date}>
                  11-11-2021 &#8226; 5:40pm &#8226; Credit
                </p>
              </div>
              <h4 className={styles.transaction_amount}>-56000</h4>
            </div>

            <div className={styles.transactions_item}>
              <img src={Entertainment} alt='food transaction' />
              <div className={styles.transaction_detail}>
                <h5 className={styles.transaction_title}>
                  Netflix subscription
                </h5>
                <p className={styles.transaction_time_date}>
                  11-11-2021 &#8226; 5:12pm &#8226; Debit
                </p>
              </div>
              <h4 className={styles.transaction_amount}>-35200</h4>
            </div>

            <div className={styles.dashboard_view_all_link}>
              <Link to='/dashboard'>VIEW ALL &gt;</Link>
            </div>
          </div>
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
