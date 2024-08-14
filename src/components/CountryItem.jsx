import Button from "./Button";
import style from "./CountryItem.module.css";

const CountryItem = ({ countryItem, deleteCountryhandler }) => {
  const { id, country, gold, silver, bronze } = countryItem;

  return (
    <li className={`${style.medalResultList}`}>
      <p>{country}</p>
      <p>{gold}</p>
      <p>{silver}</p>
      <p>{bronze}</p>
      <Button
        type="button"
        color="#ff6f4b"
        onClick={() => deleteCountryhandler(id)}
      >
        삭제
      </Button>
    </li>
  );
};

export default CountryItem;
