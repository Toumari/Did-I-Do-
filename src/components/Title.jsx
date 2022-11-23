export default function Title(props) {
  return (
    <div>
      <h1 className="app__title">Hello, {props.name}</h1>
      <p className="app__subtitle">
        Enter your daily checks, check them as you go!
      </p>
    </div>
  );
}
