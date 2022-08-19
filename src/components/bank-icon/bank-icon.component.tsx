import { FC } from 'react';

import Gtb from '../../assets/images/gtb.svg';

//import styles
import styles from './bank-icon.module.scss';

type props = {
  bankIcon?: string; //this can used to different img url of banks to this component
};

const BankIcon: FC<props> = ({ bankIcon }) => {
  console.log(bankIcon);
  return (
    <div className={styles.bank_icon_container}>
      <img src={bankIcon} alt='bank' />
    </div>
  );
};

export default BankIcon;
