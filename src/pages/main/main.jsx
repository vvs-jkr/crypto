/* eslint-disable react/prop-types */
import Card from "../../components/Card/card";
import CoinsList from "../../components/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins, setCoins }) => {

  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;
