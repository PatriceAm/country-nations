import countryServices from "./services/countryServices";
import {useEffect, useState} from "react";
import Filter from "./components/filter/Filter";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const bb = async () => {
      let here = await countryServices.getAll();
      setAllCountries(here);
    };
    bb();
  }, []);

  return (
    <div>
      <Navbar />
      <p>{allCountries.length && allCountries[0].name}</p>
      <Filter />
    </div>
  );
};

export default App;
