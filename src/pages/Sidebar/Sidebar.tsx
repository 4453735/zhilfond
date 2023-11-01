import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import styles from './Sidebar.module.css'
import SearchResult from "../../components/SearchResult/SearchResult.tsx";
import { updateCard } from "../../slices/addCard.js";


type ObjectDataType = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: {},
  company: {}
}

const Sidebar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<ObjectDataType[]>([]);
  const [message, setMessage] = useState<string>('Начните поиск');

  const dispatch = useDispatch();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }




  console.log(search);
  console.log('RESULT', searchResult);

  useEffect(() => {
    if (search.length === 0) {
      setSearchResult([]);
      setMessage('Начните поиск');
      const data = {
        name: 'none',
        email: 'none',
        phone: 'none',
        about: 'none',
      }

      dispatch(updateCard(data))
      return;
    }

    // Разделите входную строку на отдельные запросы, разделенные запятыми
    const queries = search.split(',').map((query) => query.trim());

    // Выполните поиск для каждого запроса
    Promise.all(
      queries.map((query) =>
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((res) => res.json())
          .then((data) => data.filter((obj: ObjectDataType) => obj.name.toUpperCase().includes(query.toUpperCase())))
      )
    )
      .then((searchResultsArray: ObjectDataType[][]) => {
        const flattenedResults: ObjectDataType[] = searchResultsArray.flat();
        if (flattenedResults.length === 0) {
          setMessage('Ничего не найдено');
        }
        setSearchResult(flattenedResults);
      });

    // if (search.length > 0) {
    //   fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const searchResults = data.filter((obj: ObjectDataType) => obj.name.toUpperCase().includes(search.toUpperCase()));
    //
    //     if (searchResults.length === 0) {
    //       setMessage('Ничего не найдено');
    //     }
    //
    //     console.log('DATA', data);
    //     console.log('SEARCH RESULTS', searchResults);
    //     setSearchResult(searchResults);
    //   })
    // }
  }, [search])

  return (
    <div className={styles.searchBlock}>
      <h2 className={styles.header}>Поиск сотрудников</h2>

      <input onChange={handleSearch} className={styles.input}/>

      <h2 className={styles.header}>Результаты</h2>
      {searchResult.length >= 1
        ? searchResult.map((obj: ObjectDataType) => (<SearchResult name={obj.name} email={obj.email} phone={obj.phone}/>))
        : (<p>{message}</p>)}
    </div>
  );
};

export default Sidebar;
