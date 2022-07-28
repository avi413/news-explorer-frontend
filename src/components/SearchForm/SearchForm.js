import './SearchForm.css';

function SearchForm(props) {
  const { children } = props;
  return <form className='search-form'>{children}</form>;
}

export default SearchForm;
