import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'Sergio',
  description: 'Github repository',
  link:'https://github.com/srosajazz/'
}

export function RepositoryList(){
  return(
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository ={repository} />
        <RepositoryItem repository ={repository} />
        <RepositoryItem repository ={repository} />
        <RepositoryItem repository ={repository} />
      </ul>
    </section>
  );
}