import { useEffect } from 'react';
import SquareLoader from 'react-spinners/SquareLoader';
import { css } from '@emotion/react';
import Fade from 'react-reveal/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGithubRepos } from '../../../actions';
import './styles.scss';
import './animations.scss';

const Works = () => {
  // store dispatch hook in const (hooks can only be called inside the body of the function)
  const dispatch = useDispatch();
  // get githubRepos value from the state
  const githubRepos = useSelector((state) => state.githubRepos);
  // get isLoadingGithubRepos value from the state
  const isLoadingGithubRepos = useSelector((state) => state.isLoadingGithubRepos);
  useEffect(() => {
    // When this component is mount check if data are already loaded
    if (githubRepos[0] === undefined) {
      // if not fetch data from github API
      dispatch(fetchGithubRepos());
    }
  }, []);

  // https://www.davidhu.io/react-spinners/ using a spinner to manage loading API
  // To set spinner properties I get isDarkTheme boolean value from the state
  const theme = useSelector((state) => state.isDarkTheme);
  const override = css`
  display: block;
  margin: 0 auto;
  background-color: ${theme ? '#66ff66' : '#fff'};`;

  // Inside the returned JSX a loading page is displayed while retrieving data from API
  return (
    <div className="works" id="works">
      {isLoadingGithubRepos && (
        <div className="works__loader">
          <SquareLoader loading css={override} size={50} />
          <h1 className="works__loader__title">Chargement...</h1>
        </div>
      )}
      {!isLoadingGithubRepos && githubRepos[0] !== undefined && (
      <>
        <Fade duration={1000} delay={200} left distance="30%">
          <h1 className="pageBackground">works</h1>
        </Fade>
        <Fade duration={1000} delay={200} right distance="10%">
          <h1 className="works__title">Mes
            <span> réalisations</span>
          </h1>
        </Fade>

        <div className="works__reposContainer">
          {githubRepos.map((repo) => (
            <div key={repo.id} id={repo.id} className="works__repoCard">
              <div className="works__repoCard__top">
                <p>{repo.name}</p>
              </div>
              <div key={repo.id} className="works__repoCard__under">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >Voir sur GitHub
                </a>
                {repo.homepage !== '' && repo.homepage !== 'https://adrian-larenaudie.com' && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                >Voir le site
                </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  );
};

export default Works;
