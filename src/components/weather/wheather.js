import React from "react";
import './weather.css'
import moment from 'moment';
import { Button } from 'semantic-ui-react';

function Weather(props) {
  const { data } = props;

  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";

  const refresh = () => {
    window.location.reload();
  }
  return (
    <div className="displayweather">
      <div class="container">
        <div className="col-sm-8">
          <div className="top">
            <p className="header">{data.name}</p>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
          </div>
          <p className="day text-dark">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>

        </div>
        {data.cod != 404 ? (
          <React.Fragment>
            <div className="container">
              <div className="row">

                <div className="col-sm-6">
                  <div className="maincard">
                    <p className="day">{data.weather[0].description}</p>
                    <h1>
                      {" "}
                      {Math.floor(data.main.temp - 273.15)}
                      <sup>o</sup>
                    </h1>
                    {console.log(iconurl)}

                    <img className="weather-icon" src={iconurl} alt="" srcset="" />
                  </div>
                </div>
                <div className="col-sm-6 large-container">
                  <div className="main">
                    <div className="weatherdetails">
                      <div className="">
                        <table>
                          <tr>
                            <td>
                              <h4>High/Low</h4>
                            </td>
                            <td>
                              <span>
                                {Math.floor(data.main.temp_max - 273.15)}/
                                {Math.floor(data.main.temp_min - 273.15)}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Humidity</h4>
                            </td>
                            <td>
                              <span>{data.main.humidity} %</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Pressure</h4>
                            </td>
                            <td>
                              <span>{data.main.pressure} hPa</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Visibility</h4>
                            </td>
                            <td>
                              <span>{data.visibility / 1000} Km</span>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div className="">
                        <table>
                          <tr>
                            <td>
                              <h4>Wind</h4>
                            </td>
                            <td>
                              <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Wind Direction</h4>
                            </td>
                            <td>
                              <span>
                                {data.wind.deg}
                                <sup>o</sup> deg
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Sunrise</h4>
                            </td>
                            <td>
                              <span>
                                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Sunset</h4>
                            </td>
                            <td>
                              <span>
                                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>



                  </div>
                </div>
                <div className="col-sm-6 smallscreen">
                  <div className="main">
                    <div className="weatherdetails">
                      <div className="">
                        <table>
                          <tr>
                            <td>
                              <h4>High/Low</h4>
                            </td>
                            <td>
                              <span>
                                {Math.floor(data.main.temp_max - 273.15)}/
                                {Math.floor(data.main.temp_min - 273.15)}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Humidity</h4>
                            </td>
                            <td>
                              <span>{data.main.humidity} %</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Pressure</h4>
                            </td>
                            <td>
                              <span>{data.main.pressure} hPa</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Visibility</h4>
                            </td>
                            <td>
                              <span>{data.visibility / 1000} Km</span>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div className="">
                        <table>
                          <tr>
                            <td>
                              <h4>Wind</h4>
                            </td>
                            <td>
                              <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Wind Direction</h4>
                            </td>
                            <td>
                              <span>
                                {data.wind.deg}
                                <sup>o</sup> deg
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Sunrise</h4>
                            </td>
                            <td>
                              <span>
                                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Sunset</h4>
                            </td>
                            <td>
                              <span>
                                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>



                  </div>
                </div>



              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="maincard">
            <h2>{data.message}</h2>
          </div>
        )}





      </div>

    </div>
  );
}

export default Weather;
