import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Header, Form, Button, Input } from './Searchbar.styled';
function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChangeInput = e => setSearch(e.target.value);

  const handleSubmitInput = e => {
    e.preventDefault();
    onSubmit(search);
  };
  return (
    <Header>
      <Form onSubmit={handleSubmitInput}>
        <Input
          type="text"
          placeholder="Search images and photos"
          value={search}
          onChange={handleChangeInput}
        />

        <Button type="submit">
          <span style={{ fontSize: '12px', color: '#260033' }}>
            <BsSearch style={{ fill: '#260033', marginRight: '5px' }} />
            Search
          </span>
        </Button>
      </Form>
    </Header>
  );
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
