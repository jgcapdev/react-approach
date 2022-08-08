import { Routes, Route, Link, NavLink, useParams, Outlet } from 'react-router-dom';

// https://reactrouter.com/docs/en/v6/getting-started/overview

const Home = () => {
  return <h1>Esto es el home</h1>;
};

const Principal = () => {
  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

  return (
    <div>
      <h1>Listado de elementos</h1>

      <ul>
        {elementos.map((elem) => (
          <li key={elem}>
            <Link to={`/elementos/${elem}`}>{elem}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const About = () => {
  return <h1>Esto es el about</h1>;
};

const NotFound = () => {
  return <h1>404 Not Found</h1>;
};

const Elemento = () => {
  const { elemento } = useParams();
  return (
    <div>
      <h1>Elemento: {elemento}</h1>
      <Link to="details">Ir a los detalles</Link>
      <Outlet />
    </div>
  );
};

const ElementoDetail = () => {
  const { elemento } = useParams();
  return (
    <div>
      <h1>Detalles del elemento: {elemento}</h1>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <Link to="/principal">Principal</Link>
        <Link to="/about">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/about" element={<About />} />
        <Route path="/elementos/:elemento" element={<Elemento />}>
          <Route path="details" element={<ElementoDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
