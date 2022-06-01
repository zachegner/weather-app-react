const Container = ({ data }) => {
    const location = data.location
    const current = data.current

    return <>
        <div className="container">
            <div className="top">
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
