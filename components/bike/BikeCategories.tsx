'use client';

import { useState, useEffect } from 'react';
import { Product } from "@/sanity/types";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { BikeCard } from '@/components/bike/BikeCard';

type BikeCategoriesProps = {
  bikes: Product[];
};

const prices = { maxPrice: 900, minPrice: 100};


export const BikeCategories = ({ bikes }: BikeCategoriesProps) => {

  const [category, setCategory] = useState('');
  const [filteredBikes, setFilteredBikes] = useState<Product[]>([]);
  const [price, setPrice] = useState(prices.maxPrice);

  const bikesCategories = [...new Set(bikes.flatMap(bike => bike.categories).map(cat => cat?.name))];
  const bikesByCategory = ['all', ...bikesCategories];
    

  const filteredItems = (length: number) =>{
    if (length === 0) return 'Items: 0';
    if (length === 1) return 'Item: 1';
    return `Items: ${length}`;
  };

  const handleSelectCategory = (cat: string) => {
    if (cat === 'all') return setCategory('');
    setCategory(cat);
  };

  useEffect(() => {
    const filtered = bikes.filter(bike => {
      const categoryMatch = !category ? !!bikes : bike.categories?.some(cat => cat.name === category);
      const priceMatch = +bike.price! <= price;
      return categoryMatch && priceMatch;
    });
    
    setFilteredBikes(filtered);
  }, [category, price, bikes]);
 
  return (
    <section className='py-2'>
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px+1fr] gap-4">
          <aside className="mb-8 p-4">
            <RadioGroup
              defaultValue={'all'}
              className='mb-8 w-full grid max-sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4'
              color='accent'
            >
              {bikesByCategory.map(cat => (
                <div key={cat} className="flex items-center gap-2">
                  <RadioGroupItem 
                    id={cat}
                    value={cat as string}
                    onClick={() => handleSelectCategory(cat as string)} 
                  />
                  <label 
                    htmlFor={cat}
                    className='cursor-pointer'
                  >
                    {cat?.toUpperCase()}
                  </label>
                </div>
                ))
              }
            </RadioGroup>

            <div className="max-w-[14rem]">
              <div className='mb-4 text-lg font-medium flex justify-between items-center'>
                <p>
                  Max Price: <span className='font-semibold text-accent'>${price}</span>
                </p>
                <p className='space-x-2'>
                  {filteredItems(filteredBikes.length)}
                </p>
              </div>
              <Slider
                min={prices.minPrice}
                max={prices.maxPrice}
                step={10}
                value={[price]}
                onValueChange={val => setPrice(val[0])}
              />
            </div>

          </aside>

          <section className='w-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {filteredBikes.map(bike => (
                <BikeCard key={bike._id} bike={bike} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
