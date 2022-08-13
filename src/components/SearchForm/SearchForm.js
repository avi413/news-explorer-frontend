import './SearchForm.css';

function SearchForm(props) {
  const { children, handleClick } = props;
  return (
    <form className='search-form' onSubmit={handleClick}>
      {children}
    </form>
  );
}

export default SearchForm;
