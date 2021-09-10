import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title"> Coffee Beans Map</h1>
        </div>  
      </div>
    </header>
  );
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

    return (
      <main>
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
      <Main />
      <Footer />
    </div>
  )
}

export default App;