import { useEffect, useState } from "react";
import { fetchImages } from "./api";
import { BrowserRouter as HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';


function Header() {
  return (
    <header className="hero is-dark is-bold">
      <HashRouter>
        <div>
          <div className="hero-body">
            <div className="container">
              <h1 className="title"> Coffee Beans Map</h1>
            </div>  
          </div>
          <nav>
                <Link className="topLink" to='/'>Home</Link>
                <Link className="topLink" to="/about">About</Link>
          </nav>
        </div>
      </HashRouter>
    </header>
  );
}

function About() {
  return (
    <div className="is-vcenterd ">
      <h2>About</h2>
      <p>You can find the one you need.</p>
    </div>
  );
}

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { query } = event.target.elements;
    props.onFormSubmit(query.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expand">
            <select name="query" defaultValue="coffee+beans">
              <option value="coffee+beans">Coffee Beans</option>
              <option value="coffee+cup">Coffee Cup</option>
              <option value="java">Java</option>
            </select>
          </div>
        </div>
        <div className="control">
            <button type="submit" className="button is-dark">
              Reload Picture
            </button>
          </div>
      </form>

    </div>
  )
}

function Image(props) {
  return (
    <div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={props.src} alt="coffee beans" />
      </figure>
    </div>
  </div>

  );
}

function Loading() {
  return <div className="loading">Loading...</div>
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />
  }
  return (
    <div className="columns is-vcenterd is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url}/>
          </div>
        );
      })}
    </div>
  );
}

function Main() {
  const [urls, setUrls] = useState(null); 
  useEffect(() => {
    fetchImages("coffee+beans").then((urls) => {
      setUrls(urls);
    });
  }, []);

  function reloadImages(query) {
    fetchImages(query).then((urls) => {
      setUrls(urls);
    });
  }

    return (
      
      <main>
        <section className="section">
          <div className="container">
            <Form onFormSubmit={reloadImages} />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Gallery urls={urls}/>
          </div>
        </section>
      </main>
    );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p> Beans images are retrieved from pixabay</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Main} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App;