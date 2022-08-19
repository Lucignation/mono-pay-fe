import { FC } from 'react';

import BankIcon from '../bank-icon/bank-icon.component';

//import images
import AddIcon from '../../assets/images/add-icon.svg';

//import styles
import styles from './balance-card.module.scss';

type props = {};

const BalanceCard: FC<props> = () => {
  return (
    <div className={styles.balance_main}>
      <h4 className={styles.total_title}>TOTAL BALANCE</h4>
      <h1 className={styles.total_balance}>30,000,000</h1>
      <p className={styles.total_sub_title}>Your balance across all Banks</p>
      <div className={styles.banks_logos}>
        <div className={styles.linked_banks}>
          <div className={styles.linked_bank}>
            <BankIcon bankIcon='https://pbs.twimg.com/profile_images/1420088013841965059/mawEI-xl_400x400.jpg' />
          </div>

          <div className={styles.linked_bank}>
            <BankIcon bankIcon='https://images.africanfinancials.com/ug-sbu-logo.png' />
          </div>

          <div className={styles.linked_bank}>
            <BankIcon bankIcon='https://sterling.ng/wp-content/uploads/2019/02/Sterling_favicon.png' />
          </div>
        </div>
        <div className={styles.add_another_bank}>
          <img src={AddIcon} alt='add another bank' />
        </div>
      </div>
      <div className={styles.unlink_bank}>
        <h4>UNLINK BANK ACCOUNT</h4>
      </div>
    </div>
  );
};

export default BalanceCard;
