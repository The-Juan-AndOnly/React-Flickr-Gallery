import React from 'react';
import SearchForm from './SearchForm';
import Navbar from './Navbar';

const Header = ({ title, fetchQuery }) => {
  return (
    <>
      <h1>{title}</h1>
      <SearchForm fetchQuery={fetchQuery} />
      <Navbar fetchQuery={fetchQuery} />
    </>
  );
};

export default Header;
