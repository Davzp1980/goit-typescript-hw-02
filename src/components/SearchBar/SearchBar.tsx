import { FormEvent, useState } from 'react';
import css from './SearchBar.module.css';

type SearchBarProps = {
  searchImages: (value: string) => void;
  blankSearchFieldMessage: () => void;
};
function SearchBar({ searchImages, blankSearchFieldMessage }: SearchBarProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if ((e.target as HTMLFormElement).searchData.value === '') {
      blankSearchFieldMessage();
      return;
    }
    searchImages((e.target as HTMLFormElement).searchData.value);
    setInputValue('');
  }

  const [inputValue, setInputValue] = useState('');
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchData"
          placeholder="Search images and photos"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
