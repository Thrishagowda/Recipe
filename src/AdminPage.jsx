import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css'; // Your custom styles

const AdminPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    imageUrl: ''
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
  };

  const handleInputChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const addRecipe = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes', newRecipe);
      fetchRecipes();
      setNewRecipe({ name: '', imageUrl: '' , ingredients: '', instructions: '' });
    } catch (error) {
      console.error('Error adding recipe', error);
    }
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      await axios.put(`/api/recipes/${id}`, updatedRecipe);
      fetchRecipes();
    } catch (error) {
      console.error('Error updating recipe', error);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`/api/recipes/${id}`);
      fetchRecipes();
    } catch (error) {
      console.error('Error deleting recipe', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Manage Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image"/>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={() => updateRecipe(recipe.id, recipe)}>Update</button>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
      <h2>Add New Recipe</h2>
      <form onSubmit={addRecipe} className="add-recipe-form">
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleInputChange}
          placeholder="Recipe Name"
          required
        />
        <textarea
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleInputChange}
          placeholder="Ingredients"
          required
        />
        <textarea
          name="instructions"
          value={newRecipe.instructions}
          onChange={handleInputChange}
          placeholder="Instructions"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={newRecipe.imageUrl}
          onChange={handleInputChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AdminPage;
