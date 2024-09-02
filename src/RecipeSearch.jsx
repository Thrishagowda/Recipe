import React, { useState } from 'react';
import './RecipeSearch.css'; // Make sure the CSS file path is correct

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipe, setRecipe] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock data for demonstration purposes
    const mockRecipes = {
      'pasta': 'Delicious pasta with tomato sauce, garlic, and fresh basil.',
      'pizza': 'Classic Margherita pizza with fresh mozzarella, tomatoes, and basil.',
      'salad': 'Healthy green salad with avocado, cucumber, and lemon vinaigrette.',
    };

    const result = mockRecipes[query.toLowerCase()] || 'Recipe not found.';
    setRecipe(result);
  };

  return (
    <div className="recipe-search-container">
      <h1 className="title">Recipe Finder</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Submit</button>
      </form>
      {recipe && <p className="recipe-description">{recipe}</p>}
    </div>
  );
};

export default RecipeSearch;
