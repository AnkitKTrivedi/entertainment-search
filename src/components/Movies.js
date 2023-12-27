import { Card } from "react-bootstrap";

const Movies = ({ data, onCardSelection }) => {
  return data.map((item, index) => (
    <Card
      className="mt-3"
      key={item.name + index}
      style={{ cursor: "pointer" }}
      onClick={() => onCardSelection(item)}
    >
      <Card.Img
        style={{ height: "18rem" }}
        variant="top"
        alt={item.title || item.original_name}
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
            : `/Image_not_available.png`
        }
      />
      <Card.Body>
        <Card.Title>{item.title || item.original_name}</Card.Title>
        <Card.Text className="text-truncate">
          <strong>Overview:</strong> <em>{item.overview}</em>
        </Card.Text>
        <Card.Text>
          <strong>Release Date:</strong>
          {item.release_date || item.first_air_date}
        </Card.Text>
      </Card.Body>
    </Card>
  ));
};

export default Movies;
