import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGithubRepos } from '../../../actions';
import './styles.scss';

const Works = () => {
  // store dispatch hook in const (hooks can only be called inside the body of the function)
  const dispatch = useDispatch();
  // get githubRepos value from the state
  const githubRepos = useSelector((state) => state.githubRepos);
  console.log(githubRepos);
  // get isLoadingGithubRepos value from the state
  const isLoadingGithubRepos = useSelector((state) => state.isLoadingGithubRepos);
  useEffect(() => {
    // When this component is mount check if data are already loaded
    if (githubRepos[0] === undefined) {
      // if not fetch data from github API
      dispatch(fetchGithubRepos());
    }
  }, []);

  // Inside the returned JSX a loading page is displayed while retrieving data from API
  return (
    <div className="works" id="works">
      <h1 className="pageBackground">works</h1>
      {isLoadingGithubRepos && <> <h1 style={{ fontSize: '8rem' }}>CHARGEMENT DES REPOS</h1> </> }
      {!isLoadingGithubRepos && githubRepos[0] !== undefined && (
      <>
        <h1 className="works__title">Mes
          <span> réalisations</span>
        </h1>
        <div className="works__reposContainer">
          {githubRepos.map((repo) => (
            <a
              key={repo.id}
              className="works__repoCard"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >{repo.name}
            </a>
          ))}
        </div>
      </>
      )}
    </div>
  );
};

export default Works;
