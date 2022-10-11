import { getGifts } from './../helpers/getGift';
import { useEffect, useState } from 'react';
import { GiftGritItem } from './GiftGritItem';
import { useEffectGifts } from '../hooks/useEffectGifts';
export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useEffectGifts(category);

  if (isLoading) {
    return <h3>...loading</h3>;
  }

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((image) => (
          <GiftGritItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
