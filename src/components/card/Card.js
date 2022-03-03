import "./Card.scss";

const Card = ({firstCountry}) => {
  console.log(firstCountry, typeof firstCountry);
  const {name, population, flags, region, capital} = firstCountry;

  return (
    <div className="card__container">
      <img src={flags.png} />
      <div className="card__container__details">
        <h4>{name}</h4>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
