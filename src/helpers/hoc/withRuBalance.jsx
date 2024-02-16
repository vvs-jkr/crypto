/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
export const withRuBalance = (Component) => {
  return (props) => {
    const { balance } = props;
    const ruBalance = balance * 93;
    return <Component {...props} ruBalance={ruBalance} />;
  };
};
