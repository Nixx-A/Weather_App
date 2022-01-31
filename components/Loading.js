import Loader from 'react-loader-spinner';
import styles from '../styles/Loading.module.css'

export const Loading = () => (
    <div className={styles.loading}>
      <Loader type="TailSpin" color="#00BFFF" height={650} width={100} />
    </div>
  );
  