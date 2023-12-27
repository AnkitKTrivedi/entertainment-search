import { Card } from "react-bootstrap";

const Persons = ({ data, onCardSelection }) => {
  return data.map((item, index) => (
    <Card
      className="m-3"
      style={{ cursor: "pointer" }}
      key={item.name + index}
      onClick={() => onCardSelection(item)}
    >
      <Card.Img
        style={{ height: "12rem" }}
        variant="top"
        alt={item.title || item.original_name}
        src={
          item.profile_path
            ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
            : `/Image_not_available.png`
        }
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <strong>Known for:</strong> {item.known_for_department}
        </Card.Text>
      </Card.Body>
    </Card>
  ));
};

export default Persons;
