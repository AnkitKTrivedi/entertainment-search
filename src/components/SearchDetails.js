import { Container } from "react-bootstrap";

const SearchDetails = ({ children, listData }) => {
  return (
    <Container className="bg shadow-lg searchDetails ">
      <h2>Search Details</h2>
      <hr className="border-3 m-1" />
      {children ? (
        children
      ) : listData.length ? (
        <h5>Select card from list to get more info</h5>
      ) : (
        "No data found"
      )}
    </Container>
  );
};

export default SearchDetails;
