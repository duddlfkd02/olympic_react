import { useState } from "react";
import Button from "./components/Button";
import CountryItem from "./components/CountryItem";
import "../src/App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  //국가 및 메달 추가 배열 함수(button)
  const addCountryHandler = () => {
    if (!country) {
      alert("국가명을 입력해주세요");
      return;
    }

    const newCountry = {
      id: new Date().getTime(),
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    const goldSorted = [...countries, newCountry].sort(
      (a, b) => b.gold - a.gold
    );
    setCountries(goldSorted);
    setCountry("");
  };

  // 국가 입력(input) 함수
  const changeCountryHandler = (e) => {
    setCountry(e.target.value);
  };

  //메달 개수 바꾸는 함수
  const goldMedalCounter = (e) => {
    setGold(+e.target.value);
  };
  const silverMedalCounter = (e) => {
    setSilver(+e.target.value);
  };
  const bronzeMedalCounter = (e) => {
    setBronze(+e.target.value);
  };

  // 나라 삭제 함수
  const deleteCountryhandler = (id) => {
    const deleteCheckAlert = confirm("해당 국가를 삭제하시겠습니까?");
    if (deleteCheckAlert === true) {
      alert("삭제되었습니다.");
      const deleteCountry = countries.filter((country) => {
        return country.id !== id;
      });
      setCountries(deleteCountry);
    } else {
      return false;
    }
  };

  //나라 업데이트 함수
  const updateCountryHandler = () => {
    const newCountries = countries.map((item) => {
      if (item.country === country) {
        return { id: item.id, country, gold, silver, bronze };
      } else {
        alert("업데이트 할 국가가 없습니다.");
        return item;
      }
    });
    const goldSorted = newCountries.sort((a, b) => b.gold - a.gold);
    setCountries(goldSorted);
    setCountry("");
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form-list"
      >
        <ul className="list-box">
          <li className="list">
            <h3>국가명</h3>
            <input
              type="text"
              value={country}
              onChange={changeCountryHandler}
              placeholder="나라명을 입력하세요."
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
        <ul className="medal-result">
          {countries.map((countryItem) => (
            <CountryItem
              key={countryItem.id}
              countryItem={countryItem}
              deleteCountryhandler={deleteCountryhandler}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
