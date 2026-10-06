import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import WeatherData from '../WeatherData/WeatherData'

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <WeatherData
        day={props.day}
        conditions={props.conditions}
        time={props.time}
      />

      <WeatherIcon
        img={props.img}
        imgAlt={props.imgAlt}
      />
    </div>
  )
}

export default WeatherForecast