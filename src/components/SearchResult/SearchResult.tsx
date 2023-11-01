import React from 'react';
import { useDispatch } from "react-redux";
import styles from './SearchResult.module.css'
import { updateCard } from "../../slices/addCard.js";

type SearchResultPropsType = {
  name: string,
  email: string,
  phone: string
}

const SearchResult: React.FC<SearchResultPropsType> = ({name, email, phone}) => {
  const dispatch = useDispatch();

  const handleSearchResultClick = () => {
    const data = {
      name,
      email,
      phone,
      about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }
    dispatch(updateCard(data))
    console.log('CLICK', name, email);
  }

  return (
    <div className={styles.container} onClick={handleSearchResultClick}>
      <div className={styles.image}>
        {/*<img src="/img/no-image.png" alt={name}/>*/}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span><br />
        <span className={styles.email}>{email}</span>
      </div>
    </div>
  );
};

export default SearchResult;
