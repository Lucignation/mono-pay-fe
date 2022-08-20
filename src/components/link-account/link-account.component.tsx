import React from 'react';

import styles from './link-account.module.scss';

import PadLock from '../../assets/images/padlock.svg';

import { BsArrowUpRight } from 'react-icons/bs';

const LinkAccount = () => {
  return (
    <div className={styles.linked_account_main}>
      <div className={styles.linked_account_padlock}>
        {' '}
        <img src={PadLock} alt='pad lock' />
      </div>

      <h5 className={styles.linked_account_title}>Final Step</h5>
      <p className={styles.linked_account_sub_title}>
        Link your Bank account in seconds
      </p>
      <p className={styles.linked_account_link}>
        LINK NOW <BsArrowUpRight />
      </p>
    </div>
  );
};

export default LinkAccount;
