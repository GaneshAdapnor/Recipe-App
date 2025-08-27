# Recipe Finder - Your Culinary Companion

A beautiful and modern web application that helps you discover delicious recipes with detailed cooking instructions. Built with HTML, CSS, and JavaScript.

## Features

- 🍳 **Comprehensive Recipe Database**: 27+ delicious recipes including Indian cuisine
- 🔍 **Smart Search**: Search recipes by name, description, category, or ingredients
- 🏷️ **Quick Tags**: Click on popular food categories for instant results
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📋 **Detailed Instructions**: Step-by-step cooking instructions for each recipe
- ⏱️ **Cooking Time**: Know exactly how long each recipe takes to prepare
- 🎯 **Difficulty Levels**: Easy, medium, and hard difficulty indicators
- 👥 **Smart Servings Adjustment**: Automatically recalculate ingredients and cooking time for different serving sizes
- 🛡️ **Admin Controls**: Secure admin access for recipe image management
- 🖼️ **Dynamic Images**: Google-powered recipe images with admin override capability

## Recipe Categories

### International Cuisine
1. **Spaghetti Carbonara** - Classic Italian pasta dish
2. **Chocolate Cake** - Decadent dessert
3. **Caesar Salad** - Fresh and crisp salad
4. **Margherita Pizza** - Traditional Italian pizza
5. **Beef Stir Fry** - Quick and healthy Asian dish
6. **Fish Tacos** - Fresh and flavorful Mexican dish

### Indian Cuisine (27 Recipes)

#### Vegetarian Dishes (12)
1. **Paneer Butter Masala** - Creamy tomato-based curry with soft paneer
2. **Palak Paneer** - Fresh spinach curry with homemade cheese
3. **Chole (Chickpea Curry)** - Spicy and tangy chickpea curry
4. **Rajma (Kidney Bean Curry)** - Creamy kidney bean curry
5. **Aloo Gobi (Potato & Cauliflower)** - Simple dry curry
6. **Veg Biryani** - Aromatic rice with mixed vegetables
7. **Dal Tadka / Dal Fry** - Comforting yellow lentils
8. **Baingan Bharta (Smoked Eggplant)** - Smoky roasted eggplant curry
9. **Masala Dosa** - Crispy fermented rice crepes
10. **Idli Sambar** - Soft steamed rice cakes with lentil soup
11. **Veg Pulao** - Fragrant rice with vegetables
12. **Bhindi Masala (Okra Curry)** - Crispy okra with spices
13. **Malai Kofta** - Vegetable dumplings in creamy gravy
14. **Veg Manchurian** - Crispy vegetable dumplings
15. **Stuffed Paratha** - Whole wheat flatbreads with various fillings

#### Non-Vegetarian Dishes (13)
1. **Chicken 65** - South Indian deep-fried spicy chicken
2. **Mutton Rogan Josh** - Rich Kashmiri lamb curry
3. **Mutton Biryani** - Flavorful rice with mutton pieces
4. **Mutton Korma** - Slow-cooked lamb in cashew gravy
5. **Keema Pav** - Minced mutton with buttered bread
6. **Fish Curry** - Tangy coconut or mustard-based curry
7. **Fish Fry** - Crispy marinated fish
8. **Prawn Masala** - Spicy prawns in onion-tomato gravy
9. **Prawn Biryani** - Biryani layered with juicy prawns
10. **Egg Curry** - Boiled eggs in spicy gravy
11. **Egg Bhurji** - Indian-style scrambled eggs
12. **Chicken Kebab** - Skewered grilled chicken
13. **Tandoori Chicken** - Charcoal-grilled marinated chicken

## How to Use

1. **Open the App**: Simply open `index.html` in your web browser
2. **Browse Recipes**: All recipes are displayed in a beautiful grid layout
3. **Search**: Use the search bar to find specific recipes or ingredients
4. **Quick Tags**: Click on popular tags like "Pasta", "Chicken", "Cake", "Indian", etc.
5. **View Details**: Click on any recipe card to see full ingredients and instructions
6. **Adjust Servings**: Click "Adjust" next to servings to modify quantities and cooking time
7. **Close Modal**: Click the X button or outside the modal to return to the main view

## Advanced Features

### Smart Servings Adjustment
- **Dynamic Ingredient Calculation**: Automatically recalculates ingredient quantities
- **Cooking Time Adjustment**: Updates cooking time proportionally
- **Smart Formatting**: Converts small values to fractions for readability
- **Unit Preservation**: Maintains all measurement units and formatting
- **Real-time Updates**: Changes are applied immediately

**How to use:**
1. Open any recipe
2. Click "Adjust" next to the servings count
3. Enter desired number of servings (1-20)
4. Click "Apply" to see updated ingredients and cooking time

### Admin Features
- **Secure Access**: Admin-only image URL controls
- **Image Management**: Override default recipe images
- **Password Protection**: Secure admin authentication
- **Visual Indicators**: Admin mode badge when logged in

**How to access admin mode:**
1. Press `Ctrl + Shift + A` to open admin login
2. Enter password: `recipeapp2024`
3. Look for "Admin Mode" badge in header
4. Image URL controls will be visible in recipe modals

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
- **Google Custom Search API**: Dynamic recipe images

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
- Search by recipe name (e.g., "pasta", "chicken", "biryani")
- Search by ingredients (e.g., "tomato", "cheese", "paneer")
- Search by category (e.g., "indian", "vegetarian", "dessert")
- Real-time filtering as you type

### Recipe Cards
Each recipe card displays:
- Recipe name and description
- Cooking time
- Difficulty level (Easy/Medium/Hard)
- Beautiful hover effects
- Dynamic recipe images

### Recipe Details Modal
When you click on a recipe, you'll see:
- Complete ingredient list with measurements
- Step-by-step cooking instructions
- Adjustable serving size with smart recalculation
- Cooking time and difficulty level
- Admin image controls (when logged in)

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
    id: 50,
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

## Admin Configuration

### Admin Access Methods
1. **Keyboard Shortcut**: `Ctrl + Shift + A`
2. **URL Parameter**: Add `?admin=true` to URL
3. **Local Storage**: Set `localStorage.setItem('adminKey', 'recipeapp2024')`
4. **Cookie**: Set `admin=true` cookie

### Admin Password
- Default password: `recipeapp2024`
- Can be modified in the `showAdminLogin()` function

## Future Enhancements

Potential features for future versions:
- User accounts and favorites
- Recipe ratings and reviews
- Nutritional information
- Recipe sharing functionality
- Print-friendly recipe cards
- Cooking timer integration
- Recipe categories and filtering
- Multi-language support
- Recipe import/export
- Shopping list generation

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
