import countryServices from "./services/countryServices";
import {useEffect, useState} from "react";
import Filter from "./components/filter/Filter";
import Navbar from "./components/navbar/Navbar";
import Inputs from "./components/inputs/Inputs";

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
      <Inputs />
      <Filter allCountries={allCountries} />
    </div>
  );
};

export default App;
