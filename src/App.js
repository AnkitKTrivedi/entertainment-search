import { Container } from "react-bootstrap";
import "./App.css";
import NavbarHeader from "./components/Navbar";
import SearchList from "./components/SearchList";
import SearchDetails from "./components/SearchDetails";
import { useState } from "react";
import Persons from "./components/Persons";
import Movies from "./components/Movies";
import Details from "./components/Details";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchText, setSearchText] = useState("");
  const [listData, setListData] = useState([]);
  const [selectedData, setSelectedData] = useState();
  console.log(
    "process.env.REACT_APP_BASE_URL",
    process.env,
    process.env.REACT_APP_BASE_URL
  );
  const onCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
    setListData([]);
    setSearchText("");
    setSelectedData(null);
  };

  const onSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const onSearchClick = () => {
    const uri = `${process.env.REACT_APP_BASE_URL}/search/${selectedCategory}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;

    fetch(uri).then(async (res) => {
      const { results } = await res.json();
      setListData(results);
    });
  };

  const onCardSelection = (selectedCard) => {
    const uri = `${process.env.REACT_APP_BASE_URL}/${selectedCategory}/${selectedCard.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    fetch(uri).then(async (res) => {
      const data = await res.json();
      setSelectedData(data);
    });
  };

  return (
    <>
      <NavbarHeader
        onCategorySelect={onCategorySelect}
        onSearchTextChange={onSearchTextChange}
        onSearchClick={onSearchClick}
        selectedCategory={selectedCategory}
        searchText={searchText}
      />
      <Container className="d-flex fluid">
        <SearchList>
          {selectedCategory === "person" && (
            <Persons data={listData} onCardSelection={onCardSelection} />
          )}
          {(selectedCategory === "movie" || selectedCategory === "tv") && (
            <Movies data={listData} onCardSelection={onCardSelection} />
          )}
          {!listData.length && <p>No data found.</p>}
        </SearchList>
        <SearchDetails listData={listData}>
          {selectedData && <Details data={selectedData} />}
        </SearchDetails>
      </Container>
    </>
  );
}

export default App;
