import './styles.scss';

const Home = () => {
  console.log('Ici c\'est la home page');
  return (
    <div className="home" id="home">
      <h1 className="pageBackground">home</h1>
      <h1 className="home__title">
        Bienvenue sur mon site,
        <br />
        je suis
        <span> Adrian</span>
      </h1>
      <p className="home__subtitle">
        Développeur Web Front-End / React
      </p>
      <p className="home__dynamicWords">Rigueur</p>
    </div>
  );
};

export default Home;
