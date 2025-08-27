# Recipe Finder - Your Culinary Companion

A beautiful and modern web application that helps you discover delicious recipes with detailed cooking instructions. Built with HTML, CSS, and JavaScript.

## Features

- 🍳 **Recipe Database**: 8 delicious recipes with detailed ingredients and instructions
- 🔍 **Smart Search**: Search recipes by name, description, category, or ingredients
- 🏷️ **Quick Tags**: Click on popular food categories for instant results
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📋 **Detailed Instructions**: Step-by-step cooking instructions for each recipe
- ⏱️ **Cooking Time**: Know exactly how long each recipe takes to prepare
- 🎯 **Difficulty Levels**: Easy, medium, and hard difficulty indicators

## Recipes Included

1. **Spaghetti Carbonara** - Classic Italian pasta dish
2. **Chicken Tikka Masala** - Creamy Indian curry
3. **Chocolate Cake** - Decadent dessert
4. **Caesar Salad** - Fresh and crisp salad
5. **Margherita Pizza** - Traditional Italian pizza
6. **Beef Stir Fry** - Quick and healthy Asian dish
7. **Fish Tacos** - Fresh and flavorful Mexican dish
8. **Vegetable Curry** - Hearty vegetarian option

## How to Use

1. **Open the App**: Simply open `index.html` in your web browser
2. **Browse Recipes**: All recipes are displayed in a beautiful grid layout
3. **Search**: Use the search bar to find specific recipes or ingredients
4. **Quick Tags**: Click on popular tags like "Pasta", "Chicken", "Cake", etc.
5. **View Details**: Click on any recipe card to see full ingredients and instructions
6. **Close Modal**: Click the X button or outside the modal to return to the main view

## File Structure

```
recipe-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality and recipe data
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and recipe management
- **Font Awesome**: Beautiful icons throughout the interface
- **Google Fonts**: Poppins font family for modern typography

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Getting Started

1. Download or clone the files to your local machine
2. Open `index.html` in your preferred web browser
3. Start exploring recipes!

## Features in Detail

### Search Functionality
- Search by recipe name (e.g., "pasta", "chicken")
- Search by ingredients (e.g., "tomato", "cheese")
- Search by category (e.g., "dessert", "main course")
- Real-time filtering as you type

### Recipe Cards
Each recipe card displays:
- Recipe name and description
- Cooking time
- Difficulty level (Easy/Medium/Hard)
- Beautiful hover effects

### Recipe Details Modal
When you click on a recipe, you'll see:
- Complete ingredient list with measurements
- Step-by-step cooking instructions
- Serving size information
- Cooking time and difficulty level

### Responsive Design
- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: Single column layout
- Optimized touch interactions

## Customization

### Adding New Recipes
To add new recipes, edit the `recipes` array in `script.js`:

```javascript
{
    id: 9,
    name: "Your Recipe Name",
    description: "Recipe description",
    time: "30 minutes",
    difficulty: "easy", // or "medium", "hard"
    servings: 4,
    ingredients: [
        "Ingredient 1",
        "Ingredient 2",
        // ... more ingredients
    ],
    instructions: [
        "Step 1",
        "Step 2",
        // ... more steps
    ],
    category: "your-category"
}
```

### Styling Customization
- Modify colors in `styles.css`
- Change fonts by updating the Google Fonts link
- Adjust animations and transitions
- Customize the gradient background

## Future Enhancements

Potential features for future versions:
- User accounts and favorites
- Recipe ratings and reviews
- Nutritional information
- Recipe sharing functionality
- Print-friendly recipe cards
- Recipe scaling (adjust servings)
- Cooking timer integration
- Recipe categories and filtering

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to contribute by:
- Adding new recipes
- Improving the UI/UX
- Adding new features
- Fixing bugs
- Improving documentation

---

**Enjoy cooking with Recipe Finder!** 🍽️
