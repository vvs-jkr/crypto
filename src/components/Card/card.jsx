/* eslint-disable react/prop-types */
import { withRuBalance } from "../../helpers/hoc/withRuBalance";
import "./styles.css";

const Card = ({ balance, setBalance }) => {
  //   console.log({ ruBalance });

  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button onClick={setBalance}>Add money</button>
      </div>

      <div className="card-block">
        <p>Satoshi</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default withRuBalance(Card);
