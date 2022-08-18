import { FC } from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';

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

type props = {
  btnText?: string;
  btnType?: string;
};

const Dashboard: FC<props> = ({ btnText, btnType }) => {
  return (
    <div className={styles.dashboard_main}>
      <Sidebar />
      <div className={styles.dashboard_main_content}>
        <div className={styles.dashboard_welcome_corner}>
          <div className={styles.user_greetings}>
            <div className={styles.avatar}>
              <img src={Avatar} alt='user avatar' />
            </div>
            <p>Good Morning, Olu</p>
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
          </div>
        </div>
      </div>
      <div className={styles.dashboard_main_right_content}></div>
    </div>
  );
};

export default Dashboard;
