import React from 'react';

interface Category {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={category.imageSrc}
          className="card-img-top"
          alt={category.title}
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h5 className="card-title">{category.title}</h5>
          <p className="card-text">{category.description}</p>
          <a href="#" className="btn btn-primary">
            View Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

