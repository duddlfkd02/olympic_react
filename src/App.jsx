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
  };

  //나라 업데이트 함수
  const updateCountryHandler = (e) => {
    e.preventDefault();
    //나라 이름이 동일하면
    //updatedCountry로 state 바꾸기
    const updatedCountry = countries.find((item) => item.country === country);
    if (updatedCountry) {
      countries.map((newCountry) => {
        return newCountry.gold, newCountry.silver, newCountry.bronze;
      });
    }
    console.log(updatedCountry);
    // find로 나라 이름을 찾은 후 그 값을 새로운 금,은,동으로 바꿔주려고 했음
    // 동일한 나라이름으로 하고 메달 수를 바꿔도 메달 수는 변함 없음
    // 나라이름을 바꾸면 undefined가 뜸
    // 메달 수를 바꿔서 업데이트하는 방법
    // setCountries([...countries, updatedCountry]);
    // setCountries([...updatedCountry]);
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
          <button onClick={updateCountryHandler}>업데이트</button>
        </ul>
      </form>

      <>
        {countries.map((country, index) => (
          <ul key={index} className="medal-result">
            <li className="medal-result-list">{country.country}</li>
            <li className="medal-result-list">{country.gold}</li>
            <li className="medal-result-list">{country.silver}</li>
            <li className="medal-result-list">{country.bronze}</li>
            <button onClick={() => deleteCountryhandler(index)}>삭제</button>
          </ul>
        ))}
      </>
    </div>
  );
};

export default App;
