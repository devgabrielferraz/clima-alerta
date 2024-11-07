import './WeatherInfo.css'

function WeatherInfo({ weather }) {
    // Verificação para garantir que o objeto weather está completo antes de tentar acessar propriedades aninhadas
    if (!weather || !weather.weather || weather.weather.length === 0) {
        return null;
    }

    return (
        <div className='weather-container'>
            <h1>{weather.name}</h1>

                <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
                <h3>{Math.round(weather.main.temp)} ºC</h3>
                </div> {/*Div da imagem 'icone do tempo' */} 

            <div className='description'>
            <p>Max. {Math.round(weather.main.temp_max)} ºC</p>
            <p>Min. {Math.round(weather.main.temp_min)} ºC</p>
            <p>{weather.weather[0].description}</p>
            </div>

            <div className='details'>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)} ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>{/*Final Div Informações 'Umidade,etc' */}
        </div>
    );
}

export default WeatherInfo;
