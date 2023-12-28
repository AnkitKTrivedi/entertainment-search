import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

const options = [
  { label: "Person", value: "person" },
  { label: "Movies", value: "movie" },
  { label: "TV Shows", value: "tv" },
];

const NavbarHeader = ({
  onCategorySelect,
  onSearchTextChange,
  onSearchClick,
  selectedCategory,
  searchText,
}) => {
  const isSearchDisabled =
    !selectedCategory || selectedCategory === "Select Category";
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          What are you searching for in entertainment?
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Form className="d-flex justify-content-evenly">
            <select
              className="form-select me-2"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={onCategorySelect}
            >
              <option defaultValue={-1}>Select Category</option>
              {options.map((item, index) => (
                <option key={item + index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <Form.Control
              type="search"
              placeholder={
                isSearchDisabled ? "Select category first" : "Enter search text"
              }
              className="me-4"
              aria-label="Search"
              style={{ width: "auto" }}
              onChange={onSearchTextChange}
              disabled={isSearchDisabled}
            />
            <Button
              variant="outline-success"
              onClick={onSearchClick}
              disabled={!searchText}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
