import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

//styles
import styles from './bank-account.module.scss';

//importing of images
import Logo from '../../assets/images/mono.svg';

type props = {};
const BankAccount: FC<props> = () => {
  const navigate = useNavigate();

  const [accountName, setAccountName] = useState<string>('');
  const [accountNum, setAccountNum] = useState<number>(0);
  const [bankName, setBankName] = useState<string>('');
  const [amounts, setAmounts] = useState<number>(0);

  const [error, setErrors] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setErrors('');
    }, 2000);
  }, [error]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!accountName || !accountNum || !bankName || !amounts) {
      const notify = () =>
        toast.error('All fields are required', {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      notify();
    }

    const accountNumber = Number(accountNum);
    const amount = Number(amounts);

    const linkAccount = {
      accountName,
      accountNumber,
      bankName,
      amount,
    };

    console.log(linkAccount);

    const token = localStorage.getItem('token');

    const config: any = {
      headers: {
        'x-access-token': token,
      },
    };

    const res = await axios.post(
      'https://monopay-be.herokuapp.com/api/user/link-account',
      linkAccount,
      config
    );
    console.log(res);

    const Linknotify = () =>
      toast.success('Account Linked successfully', {
        theme: 'colored',
        hideProgressBar: true,
        position: 'top-center',
      });
    Linknotify();

    // if (res.status === 200) {
    //   navigate('/');
    // }
  };
  return (
    <div className={styles.bank_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.divide_input}>
          <Input
            formType='input'
            placeholder='Account Name'
            name='accountName'
            setSignups={setAccountName}
            signups={accountName}
          />

          <Input
            formType='number'
            placeholder='Account Number'
            name='accountNum'
            setSignups={setAccountNum}
            signups={accountNum}
          />
        </div>
        <Input
          formType='input'
          placeholder='Bank Name'
          name='bankName'
          setSignups={setBankName}
          signups={bankName}
        />
        <Input
          formType='number'
          placeholder='Amount'
          name='amounts'
          setSignups={setAmounts}
          signups={amounts}
        />

        <Button btnText='LINK NOW' />
      </form>
    </div>
  );
};

export default BankAccount;
