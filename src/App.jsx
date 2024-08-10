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
    console.log(newCountry);
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
    console.log(deleteCountry);
    setCountries([...deleteCountry]);
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
          <button onClick={addCountryHandler}>국가 추가</button>
          <button>업데이트</button>
        </ul>
      </form>

      <>
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              {country.country}
              {country.gold}
              {country.silver}
              {country.bronze}
              <button onClick={() => deleteCountryhandler(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default App;
