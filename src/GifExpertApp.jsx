import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Batman']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={onAddCategory} />
      {categories.map((category) => (
        <GiftGrid category={category} key={category} />
      ))}
    </>
  );
};
