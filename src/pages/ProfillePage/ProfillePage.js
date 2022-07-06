import React from "react";
import axios from "axios";
import "./ProfillePage.css";

const ProfillePage = () => {
    const [repos, setRepos] = React.useState([])
    
    React.useEffect(() => {
        axios.get(`https://api.github.com/users/Rogamis/repos`)
        .then(res => {
        setRepos(res.data)
    })
}, [])

    return (
      <div className="componentRepos">
        <h1> Respos </h1>
        {repos.map((rep) => {
          return (
            <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name">{rep.name}</div>
                <div className="repo-header-stars">Количество звезд: {rep.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">Последний коммит: {rep.updated_at}</div>
            <a href={rep.html_url} className="repo-link">Ссылка на репозиторий: {rep.html_url}</a>
        </div>
          );
        })}
      </div>
    );
}

export default ProfillePage
