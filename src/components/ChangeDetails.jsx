export default function ChangeDetails(props) {
  let name = "";
  let city = "";

  return (
    <div className="name__input">
      <h1>Enter your details:</h1>
      <input
        className="name__input__field"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => (name = e.target.value)}
      />
      <input
        className="city__input__field"
        type="text"
        placeholder="Enter your city"
        onChange={(e) => (city = e.target.value)}
      />
      <div
        className="app__name__submit__btn"
        onClick={(event) => {
          props.handleNameSet(name);
          props.handleCitySet(city);
        }}
      >
        Submit
      </div>
    </div>
  );
}
