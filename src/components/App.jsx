import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { useState } from 'react';

export function App() {
  const [searchName, setSearchName] = useState('');
  const setSearchNameInState = searchName => {
    setSearchName(searchName);
  };
  return (
    <>
      <Searchbar onSubmit={setSearchNameInState} />
      <ImageGallery searchName={searchName} />
    </>
  );
}
