import React from 'react';
import { Link } from 'react-router-dom';

import styles from './transaction-card.module.scss';

import FoodIcon from '../../assets/images/food-icon.svg';
import Entertainment from '../../assets/images/entertainment-icon.svg';
import TransportIcon from '../../assets/images/transport-icon.svg';
import FoodieIcon from '../../assets/images/foodie-icon.svg';
import HouseIcon from '../../assets/images/house-icon.svg';

const Transactions = () => {
  return (
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
          <h5 className={styles.transaction_title}>Uber VIA Flutterwave</h5>
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
          <h5 className={styles.transaction_title}>Netflix subscription</h5>
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
  );
};

export default Transactions;
