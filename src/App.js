import axios from "axios";
import { useState } from "react";
import Container from "./components/Container";
import SearchBar from "./components/SearchBar";
//import './style.css'

function App() {

  const [data, setData] = useState(null)
  const [zipCode, setZipCode] = useState('')

  const url = `https://api.weatherapi.com/v1/forecast.json?key=2d468139df604ef39dc171726223105&q=${zipCode}`

  const searchZipCode = (e) => {
    if (e.key === "Enter") {
      axios.get(url)
        .then((response) => { setData(response.data) })
        .catch(error => alert("Please enter a valid zipcode"))
      setZipCode('')
    }
  }

  return data ? (
    <div className='app'>
      <SearchBar zipCode={zipCode} setZipCode={setZipCode} searchZipCode={searchZipCode} />

      <Container data={data} />
    </div>
  ) : (
    <div className='app'>
      <SearchBar zipCode={zipCode} setZipCode={setZipCode} searchZipCode={searchZipCode} />
    </div>
  );
}

export default App;
