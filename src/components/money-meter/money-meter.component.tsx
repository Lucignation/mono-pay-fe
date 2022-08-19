import { FC } from 'react';

import Progressbar from '../progress-bar/progress-bar.component';

//styles
import styles from './money-meter.module.scss';

type props = {
  title: string;
  amount: string;
  completed: number;
  bgColor: string;
};
const MoneyMeter: FC<props> = ({ title, amount, completed, bgColor }) => {
  return (
    <div className={styles.money_meter_main}>
      <div className={styles.money_meter_sub_heading}>
        <h4 className={styles.money_title}>{title}</h4>
        <p className={styles.money_amount}>{amount}</p>
      </div>
      <div>
        <Progressbar bgColor={bgColor} completed={completed} />
      </div>
    </div>
  );
};

export default MoneyMeter;
