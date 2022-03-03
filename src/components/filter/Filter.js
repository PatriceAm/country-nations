import Card from "../card/Card";
import "./Filter.scss";

const Filter = ({allCountries}) => {
  const firstCountry = allCountries[49];

  return (
    <div className="filter__container">
      {allCountries &&
        allCountries.map((country) => {
          return <Card key={country.name} firstCountry={country} />;
        })}
    </div>
  );
};

export default Filter;
