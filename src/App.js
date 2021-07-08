import React from "react";
import "./App.css";

const API_KEY = "222ab113a7edf7cb4122d095e1f5198c";

class App extends React.Component {
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <Form weatherMethod={this.gettingWeather} />
      </div>
    );
  }
}

const Form = (props) => {
  return (
    <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="Город" />
      <button>Получить погоду</button>
    </form>
  );
}

export default App;