import React from 'react';
import CategoryCard from './ProductCategory';

interface Category {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface CategoryCardListProps {
  categories: Category[];
}

const CategoryCardList: React.FC<CategoryCardListProps> = ({ categories }) => {
  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryCardList;
