import { useEffect } from "react";
import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github.com/users/srosajazz/repos

// const repository = {
//   name: 'Sergio',
//   description: 'Github repository',
//   link:'https://github.com/srosajazz/'
// }

export function RepositoryList(){
  const[repository, setRepository] = useState([]);

  useEffect(() =>{
    fetch('https://api.github.com/users/srosajazz/repos')
    .then(response => response.json())
    .then(data => setRepository(data));
  },[]);


  return(
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repository.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />;  
        })}
      </ul>
    </section>
  );
}