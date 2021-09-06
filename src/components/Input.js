// import React from 'react';

// import '../styles/Input.css';

// const Input = ({ handleSearch }) => {
//   return (
//     <div className='input-wrapper'>
//       <input
//         className='search'
//         placeholder='Search...'
//         onChange={handleSearch}
//       />
//     </div>
//   );
// };

// export default Input;

import React, { useContext } from 'react';
import Search from '../utils/Search.svg';
import '../styles/Layout.css';

const Input = ({handleSearch, search, fetchMovies}) => {
const submitForm = (e, search) =>  {
  e.preventDefault()
  fetchMovies(search)
}
	return (
		<div className='search-form'>
            <h1 className ='text'>Explore</h1>
            <div className='search-field'>
            <img src = {Search} className = 'search' alt = ''></img>
            <form onSubmit = {submitForm} >
			<input
				className='form-control'
				onChange={handleSearch}
				placeholder='Search'
			>
            </input>
            <button type ='submit' 
            className='submit-button'
            >Search
             </button>           
             <div className='submit-button2'>
            <img src = {Search} alt =''></img>
            </div>
            </form>
            </div>  
             <div className = 'search-result'>Results for : <span className = 'span-class'>{search}</span></div> 
		</div>        
	);
};
export default Input;