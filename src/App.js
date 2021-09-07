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

function Image() {
  return (
    <div className="card">
    <div className="card-image">
      <figure className="image">
        <img 
          src="https://pixabay.com/get/ge09473721943fd8598509062d92b2f671009114b29f5d8ca76b650bcec256e586179eee68d9ddea47d370e89f9dd0b571a6fa1e0ff5e9fffc62985b669435247_640.jpg"
          alt="coffee beans"
        />
      </figure>
    </div>
  </div>

  );
}

function Gallery() {
  return (
    <div className="columns is-vcenterd is-multiline">
      <div className="column is-3">
        <Image />
      </div>
    </div>
  );
}

function Main() {
    return (
        <main>
          <section className="section">
            <div className="container">
              <Gallery />
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