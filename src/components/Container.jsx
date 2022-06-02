const Container = ({ data }) => {
    const location = data.location
    const current = data.current
    const day = 1;
    const tommorrow = data.forecast.forecastday
    

    return <>
        <div className="container">
            <div className="top">
                <div className="left">
                    <div className="location">
                        <p className="bold">{location.name}, {location.region}</p>
                        <small>{location.country}</small>
                    </div>
                    <div className="temp">
                        <h1>{current.temp_f}°F</h1>
                    </div>
                    <div className="description">
                        <p className="bold">{current.condition.text}</p>
                        <img src={current.condition.icon} />
                    </div>
                </div>
                <div className="right">
                    {/* <div className="location">
                        <p className="bold">Tomorrow</p>
                    </div> */}
                    {/* <div className="temp">
                        <h2>{tommorrow.day.maxtemp_f}°F</h2>
                    </div>
                    <div className="description">
                        <p className="bold">{current.condition.text}</p>
                        <img src={current.condition.icon} />
                    </div> */}
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p className="bold">{current.feelslike_f}°F</p>
                    <p>Feels Like</p>
                </div>
                <div className="humidity">
                    <p className="bold">{current.humidity}%</p>
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    <p className="bold">{current.wind_mph} mph {current.wind_dir}</p>
                    <p>Wind </p>
                </div>
            </div>


        </div>
    </>;
};

export default Container;
