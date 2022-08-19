import { FC } from 'react';

import MoneyMeter from '../money-meter/money-meter.component';

import Threedots from '../../assets/images/threedots.svg';
import styles from './money-go.module.scss';

type props = {};
const MongoGo: FC<props> = () => {
  return (
    <div className={styles.money_go_list}>
      <div className={styles.money_go_heading}>
        <p className={styles.money_go_title}>Where your money go</p>
        <img src={Threedots} alt='more actions' />
      </div>

      <div className={styles.money_go_horizontal_line}></div>
      <MoneyMeter
        title='Food and Drinks'
        amount='872.400'
        completed={45}
        bgColor='FFB1B1'
      />

      <MoneyMeter
        title='Shopping'
        amount='1.378.200'
        completed={45}
        bgColor='FFB1B1'
      />

      <MoneyMeter
        title='Hosuing'
        amount='928.500'
        completed={45}
        bgColor='FFB1B1'
      />

      <MoneyMeter
        title='Transportation'
        amount='420.700'
        completed={45}
        bgColor='FFB1B1'
      />
    </div>
  );
};

export default MongoGo;
