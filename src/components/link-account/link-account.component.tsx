import { FC } from 'react';

import styles from './link-account.module.scss';

import PadLock from '../../assets/images/padlock.svg';

import { BsArrowUpRight } from 'react-icons/bs';

type props = {
  link: boolean;
  setLink: any;
};
const LinkAccount: FC<props> = ({ link, setLink }) => {
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
      <p className={styles.linked_account_link} onClick={() => setLink(!link)}>
        LINK NOW <BsArrowUpRight />
      </p>
    </div>
  );
};

export default LinkAccount;
