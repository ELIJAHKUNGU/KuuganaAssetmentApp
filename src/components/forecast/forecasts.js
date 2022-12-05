import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import {faCaretDown } from '@fortawesome/free-solid-svg-icons'

  import './forecasts.css'

export default function Forecast(props) {


    const { forecast } = props;
    let iconurl = null;
   


    console.log("Forecast Data", forecast);
    const daysweeks = ['Sunday',' Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    const currentday = new Date().getDay();
    const forecastDays = daysweeks.slice(currentday, daysweeks.length).concat(daysweeks.slice(0, currentday));
   
    return (
      <>
       <div className="container">
       <div className="col-sm-12">
       <h4 className="schedule">Forecast 7day</h4>
        <Accordion allowZeroExpanded>
          {forecast.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <div>
                <AccordionItemButton>
                  <div className="daily-item">
                    <span className="day">{forecastDays[idx]}</span>
                    <div className="hidden-text">
                    { iconurl = "http://openweathermap.org/img/wn/" + `${item.cod != 404 ? item.weather[0].icon : null}`}
                    </div>
                   

                    <img className="weather-icon" src={`${iconurl}.png`} alt="" srcset="" />

                    
                    <span className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</span>
                    <span className="description">{item.weather[0].description}
                    <FontAwesomeIcon className="ml-3" icon={faCaretDown} />

                     </span>
                  </div>
                </AccordionItemButton>
              </div>
              <AccordionItemPanel>
                <div className="accordion">
                  <div className="accordion-item">
                    <span>Pressure:</span>
                    <span>{item.main.pressure}</span>
                  </div>
                  <div className="accordion-item">
                    <span>Humidity:</span>
                    <span>{item.main.humidity}</span>
                  </div>
                  <div className="accordion-item">
                    <span>Clouds:</span>
                    <span>{item.clouds.all}%</span>
                  </div>
                  <div className="accordion-item">
                    <span>Wind speed:</span>
                    <span>{item.wind.speed} m/s</span>
                  </div>
                  <div className="accordion-item">
                    <span>Sea level:</span>
                    <span>{item.main.sea_level}m</span>
                  </div>
                  <div className="accordion-item">
                    <span>Feels like:</span>
                    <span>{item.main.feels_like}°C</span>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
       </div>
       </div>
      </>

);

}
