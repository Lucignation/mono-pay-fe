import { FC, useState } from 'react';

import Sidebar from '../../components/sidebar/sidebar.component';
import BalanceCard from '../../components/balance-card/balance-card.component';
import MongoGo from '../../components/money-go/money-go.component';

import { CgMenuLeft } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';

import styles from './link-account.module.scss';

import LinkAccount from '../../components/link-account/link-account.component';

type props = {};

const LinkAccountPage: FC<props> = () => {
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
      <LinkAccount />
    </div>
  );
};

export default LinkAccountPage;
