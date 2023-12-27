import { Col, Image, Row } from "react-bootstrap";

const Details = ({ data }) => {
  return (
    <Row className="p-2">
      <Col sm={4}>
        <Image
          src={
            data.poster_path || data.profile_path
              ? `https://image.tmdb.org/t/p/original/${
                  data.profile_path || data.poster_path
                }`
              : `/Image_not_available.png`
          }
          height={300}
          width={280}
          alt={data.name || data.original_title}
        />
      </Col>
      <Col sm={8} className="p-3">
        <p>
          <strong>Name: </strong> {data.name || data.original_title}
        </p>
        {(data.release_date || data.first_air_date) && (
          <p>
            <strong>Release Date: </strong>{" "}
            {data.release_date || data.first_air_date}
          </p>
        )}
        {data.birthday && (
          <p>
            <strong>Birthday: </strong> {data.birthday}
          </p>
        )}

        {data.place_of_birth && (
          <p>
            <strong>Place of Birth: </strong> {data.place_of_birth}
          </p>
        )}
        {data.known_for_department && (
          <p>
            <strong>Known for: </strong> {data.known_for_department}
          </p>
        )}

        {data.homepage && (
          <p>
            <strong>Page: </strong> <a href={data.homepage}>{data.homepage}</a>
          </p>
        )}
        {data.biography && (
          <p>
            <strong>Biography</strong>: {data.biography}
          </p>
        )}
        {data.overview && (
          <p>
            <strong>Overview: </strong>
            {data.overview}
          </p>
        )}
      </Col>
    </Row>
  );
};

export default Details;
