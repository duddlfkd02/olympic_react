import { useState } from "react";
import "../src/App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  //국가 및 메달 추가 배열 함수(button)
  const addCountryHandler = (e) => {
    e.preventDefault();
    const newCountry = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    setCountries([...countries, newCountry]);
  };

  // 국가 입력(input) 함수
  const changeCountryHandler = (e) => {
    setCountry(e.target.value);
  };

  //메달 개수 바꾸는 함수
  const goldMedalCounter = (e) => {
    setGold(e.target.value);
  };
  const silverMedalCounter = (e) => {
    setSilver(e.target.value);
  };
  const bronzeMedalCounter = (e) => {
    setBronze(e.target.value);
  };

  // 나라 삭제 함수
  const deleteCountryhandler = (e) => {
    const deleteCountry = countries.filter((country, index) => {
      return e !== index;
    });
    setCountries([...deleteCountry]);
    alert("삭제되었습니다.");
  };

  //나라 업데이트 함수
  const updateCountryHandler = (e) => {
    e.preventDefault();
    const newCountries = countries.map((item) => {
      if (item.country === country) {
        return { country, gold, silver, bronze };
      } else {
        return item;
      }
    });
    setCountries(newCountries);
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <form className="form-list">
        <ul className="list-box">
          <li className="list">
            <h3>국가명</h3>
            <input
              type="text"
              value={country}
              onChange={changeCountryHandler}
            />
          </li>
          <li>
            <h3>금메달</h3>
            <input type="number" value={gold} onChange={goldMedalCounter} />
          </li>
          <li>
            <h3>은메달</h3>
            <input type="number" value={silver} onChange={silverMedalCounter} />
          </li>
          <li>
            <h3>동메달</h3>
            <input type="number" value={bronze} onChange={bronzeMedalCounter} />
          </li>
          <Button type="button" onClick={addCountryHandler}>
            국가추가
          </Button>
          <Button type="button" onClick={updateCountryHandler}>
            업데이트
          </Button>
        </ul>
      </form>

      <div>
        {countries.map((country, index) => (
          <ul key={index} className="medal-result">
            <li className="medal-result-list">
              <p>{country.country}</p>
              <p>{country.gold}</p>
              <p>{country.silver}</p>
              <p>{country.bronze}</p>
              <Button
                type="button"
                color="#ff6f4b"
                onClick={() => deleteCountryhandler(index)}
                className="deleteBtn"
              >
                삭제
              </Button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;

const Button = ({ children, onClick, color }) => {
  if (color) {
    return (
      <button
        style={{
          backgroundColor: color,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
};
