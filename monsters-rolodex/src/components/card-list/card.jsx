import "./card.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monsters ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
