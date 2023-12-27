const SearchList = ({ children }) => {
  return (
    <div
      className="sideNav shadow-lg"
      style={{ background: "#0b1f33 !important" }}
    >
      <h2>Search List</h2>
      <hr className="border-3 m-1" />
      {children}
    </div>
  );
};

export default SearchList;
