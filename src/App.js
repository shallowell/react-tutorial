
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

function Gallery(props) {
  const { urls } = props;
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
  const urls =  [
    "https://pixabay.com/get/g0076b8498891a2ff7a3cf4be8a92f869822bfd1d048628e5bd3898eb7991da7932b189400f2fe87721158c47e0a8cd09_640.jpg",
    "https://pixabay.com/get/g2d0a02673ea65bdfd20b0dec3981d0887845099cdb276477a713ee55a430c404c2648ec3a37beb68fb8cb1f80e599179776388a6e2c574368fb438ff3a05e90d_640.jpg",
    "https://pixabay.com/get/g91ab594ca8be803c63b2a210a8b66d1d4228a022e077df5c4af9d31c95b970836a9911d574ede8c4a02d42043c3a5f4ab4ef118483c264418d94179f9fef3b52_640.jpg",
    "https://pixabay.com/get/g87b6898ff1282d375ed446ed2ef50b3671db97bbf9557b1b6b1f49f8b682100c9eb7097c5886e8ced00a8f9774281b3f9e555b2a60bc755ac711867072b7c5ec_640.jpg",
    "https://pixabay.com/get/g1fad87c32a548272c347df0f775f1697168cedffe042234d2d866b6f31a4bfbc11c613cd00620722d24d2c6cf3429db37bc0b3f9d0ce785604e85c61b1031b89_640.jpg",
    "https://pixabay.com/get/g13a71aa394016ea7d34b13c3466ff5b85f8ad34cd7a2567dd37114cc2556fd41ab5ec931d382e7f4b0be18d1b89800b27c66b859d84e54df8f7db33df02f49d7_640.jpg",
    "https://pixabay.com/get/g2a13d8e9e72d6b9308cd406a41a3feacd23f5aa8d62f0389cbaf2cef64368298c5c0776956b513f70cc85f655b672293ce34db6f7e7ccd4315ed1ae28c2321e2_640.jpg",
    "https://pixabay.com/get/g4d1a17b51a4bff37a9f69ae1a141a04d72d5cc5504fa04bb6926691271881820a7de9712948ff05f9b4e3fe5fa9b0ecd_640.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
  ];

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