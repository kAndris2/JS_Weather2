import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            cityData: []
        }
    }

    fetchWeather = this.fetchWeather.bind(this);
    handleWeatherResponse = this.handleWeatherResponse.bind(this);

    fetchWeather(cityName) {
        const key = 'VGI4KGKVXS1W2461TTPDAZ1CK';
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=1&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=${key}&locations=${cityName}%20`;
        fetch(url)
        .then(res => res.json())
        .then(this.handleWeatherResponse);
    }

    handleWeatherResponse(response) {
        this.setState({
            loaded: true,
            cityData: response
        });
    }

    componentDidMount() {
        this.fetchWeather(this.props.city);
      }

    render() {
        console.log("!!!!!!!!!!!!!!!");
        if (this.state.loaded) {
            return (
                <>
                <h1>{this.state.cityData.location.address}</h1>
                </>
            );
        }
        else {
            return <h1>Loading...</h1>
        }
    }
}

export default Weather;