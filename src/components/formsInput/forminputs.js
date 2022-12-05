import React, { useEffect, useState } from "react";
import Weather from "../weather/wheather";
import './formsinput.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forecast from "../forecast/forecasts";
const FormsInputs = () => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [form, setForm] = useState({
    city: ""
  });
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      toast.error('Please provide the name of City', {
        position: "top-right",
      })
    } else {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=7127da6c58f59f1367ab9185b4db18e6`
      )
        .then(res => res.json())
        .then(result => {
          setWeather({ data: result });
          // console.log(result);
        });
        await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&APPID=7127da6c58f59f1367ab9185b4db18e6`
        )
          .then(response => response.json())
          .then(response => {
            setForecast({ data: response });
            console.log('Forecast results', response);
          });


    }
  }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
  };
  return (
    <>
      <div className="form-detailsData">
        <div class="container">
          <div class="row">
            <div class="input-field col s6">
              <input id="city" type="text" name="city" onChange={(e) => handleChange(e)} />
              <label for="city">City</label>
            </div>
            <div class="input-field col s6">
              <button className="getweather btn" onClick={(e) => weatherData(e)}>
                Submit
              </button>
            </div>
            <ToastContainer />

          </div>

        </div>

      </div>
      {console.log('Weather data', weather)}
      {weather.data != undefined  && forecast.data != undefined ? (
        <div>
          <Weather data={weather.data} />
          <Forecast forecast={forecast.data}/>
        </div>
      ) : null}

    </>
  )









};

export default FormsInputs;
