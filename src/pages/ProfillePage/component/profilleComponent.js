import React from "react";
import axios from "axios";
import "../ProfillePage.css";

const FetchGitHub = () => {
  const [repos, setRepos] = React.useState([]);

  const api = "https://api.github.com/users/Rogamis/repos";

  React.useEffect(() => {
    axios.get(api).then((res) => {
      setRepos(res.data);
    });
  }, []);

  return (
    <div className="componentRepos">
      <h1 style={{ color: "white" }}> Respos </h1>
      {repos.map((rep) => {
        return (
          <div className="repo">
            <div className="repo-header">
              <div className="repo-header-name">{rep.name}</div>
              <div className="repo-header-stars">
                Количество звезд: {rep.stargazers_count}
              </div>
            </div>
            <div className="repo-last-commit">
              Последний коммит: {rep.updated_at}
            </div>
            <a href={rep.html_url} className="repo-link">
              Ссылка на репозиторий: {rep.html_url}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default FetchGitHub;
