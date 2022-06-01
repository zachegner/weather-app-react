const Container = ({ data }) => {
    const location = data.location
    const current = data.current

    return <>
        <div className="container">
            <div className="top">
                <div className="location">
                    <p><strong>{location.name}, {location.region}</strong></p>
                    <small>{location.country}</small>
                </div>
                <div className="temp">
                    <h1>{current.temp_f}°F</h1>
                </div>
                <div className="description">
                    <p><strong>{current.condition.text}</strong></p>
                    <img src={current.condition.icon} />
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p>Feels Like: <strong>{current.feelslike_f}°F</strong></p>
                </div>
                <div className="humidity">
                    <p>Humidity: <strong>{current.humidity}%</strong></p>
                </div>
                <div className="wind">
                    <p>Wind Speed: <strong>{current.wind_mph}</strong> mph <strong>{current.wind_dir}</strong></p>
                </div>
            </div>
        </div>
    </>;
};

export default Container;
