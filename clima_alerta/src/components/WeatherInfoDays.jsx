import './WeatherInfoDays.css';


function WeatherInfoDays({ weatherDays }) {
    // Verifica se weatherDays e weatherDays.list existem e se list é um array
    if (!weatherDays || !Array.isArray(weatherDays.list)) {
        return null;
    }
    console.log(weatherDays);

    const dailyForecast = {

    }

    for(let forecast of weatherDays.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if(!dailyForecast[date]){
            dailyForecast[date] = forecast
        }
    }

        const nextFiveDays = Object.values(dailyForecast).slice(1,6)
        
        function convertDate(date){
            const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit'})
            
            return newDate
        }

    return (
        <div className='weather-container'>
        <center><h3>Previsão para os próximos 5 dias:</h3></center>
        <div className='weather-list'>
        {nextFiveDays.map(forecast => (
            <div key={forecast.dt} className='weather-item'> 
                <p className='forecast-day'>{convertDate(forecast)}</p>
                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Weather icon" />
                <p>{forecast.weather[0].description}</p>
                <p>Max. {Math.round(forecast.main.temp_min)} ºC / Min. {Math.round(forecast.main.temp_max)} ºC</p>
            </div>
            //Final div weather-item
       
        ))}
         </div>{/*final div weather-list*/}
          
    </div>
    );
}


export default WeatherInfoDays;
