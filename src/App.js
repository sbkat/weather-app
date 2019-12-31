import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '9521166e48e8976c994c638e8f5de239';
class App extends React.Component {
  getWeather = async() => {
    // arrow allows to use this keyword in place on constructor before calling it
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}&units=metric
    `);
    const data = await api_call.json();

  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
