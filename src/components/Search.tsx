import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import styles from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={styles.search}>
      <h2>Buscar por usuário:</h2>
      <p>Conheça os melhores repositórios</p>
      <div className={styles.search_form}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
