import "./Inputs.scss";

const Inputs = () => {
  return (
    <div className="inputs__container">
      <div>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div>
        <select>
          <option>Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Inputs;
