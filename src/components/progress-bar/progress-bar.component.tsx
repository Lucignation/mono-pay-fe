import { FC } from 'react';

import styles from './progress-bar.module.scss';

type props = {
  completed: number;
  bgColor: string;
};

interface filter {
  height: string;
  width: string;
  backgroundColor: string;
  borderRadius: string;
  //   textAlign?: string;
}

const ProgressBar: FC<props> = ({ completed, bgColor }) => {
  return (
    <div className={styles.containerStyles}>
      <div className={styles.fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
