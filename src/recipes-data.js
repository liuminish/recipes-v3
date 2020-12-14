const mealTypes = ['Breakfast/brunch', 'Dessert/Snacks', 'Dinner']
const cuisineTypes = ['Chinese', 'Filipino', 'Korean']
const cookingStyles = ['Easy', 'Panfried', 'Steamed', 'Vegetarian']

const recipes = [
  {
    'name': 'Vinegar Pork Trotters',
    'image': '',
    'mealType': 'Dinner',
    'cuisineType': 'Chinese',
    'cookingStyle': '',
    'serving': 2,
    'cookTimeInMins': 30,
    'ingredients': {
        'Main': ['1.9kg of pork front trotters', '2 tablespoons of sesame oil', '200g of ginger(lightly smashed)', '150g palm sugar / brown sugar', '1 teaspoon salt', '750ml of Chan Kong Thye vinegar(red label)', '6 hard - boiled eggs(optional)'],
        'Garnish': ['sliced scallions / spring onions(optional)']
      },
    'instructions': [
      'Put pork trotters in a pot of room temperature water and bring to boil',
      'After water has come to a boil, continue boiling for 5 - 10 minutes before draining water and rinsing the pork trotters',
      'In a dry pot, fry 2 tablespoons of sesame oil with 200g of lightly smashed ginger until fragrant',
      'Add 750ml of vinegar, 350ml of water and blanched pork trotters.Cover pot and bring to boil.',
      'When boiling, lower heat and simmer for 1.5 hours',
      'Add brown sugar and salt to taste',
      'Serve with sliced scallions / spring onions(optional)',
    ],
    'chef': 'Min',
    'notes': 'Can use quail eggs instead of chicken eggs',
    'source': 'https://youtu.be/CV1_GKOLPMs',
    'tags': ['pork', 'vinegar', 'ginger']
  },
  {
    'name': 'Bellpepper Mushrooms',
    'image': '',
    'mealType': 'Dinner',
    'cuisineType': 'Chinese',
    'cookingStyle': ['Easy','Stirfry','Vegetarian'],
    'serving': 2,
    'cookTimeInMins': 30,
    'ingredients': {
      'Main': ['enoki mushrooms', 'oyster mushrooms', 'shitake mushrooms', 'shimeji mushrooms', 'bell peppers', '1 yellow onion'],
      'Sauce': ['1 chicken stock cube', '1 teaspoon oyster sauce', '5 tablespoon water'],
      'Starch slurry': ['1 tablespoon cornstarch', '1 tablespoon water'],
    },
    'instructions': [
      'Thinly slice onion',
      'Slice mushrooms and bell peppers into bite - sized pieces',
      'Prepare sauce and starch slurry by mixing ingredients together',
      'Stir fry mushrooms with some oil in pan over high heat until 80% done',
      'Add onions and bell peppers and fry for a while',
      'Add a pinch of salt and some black pepper, along with sauce and bring to boil',
      'Add starch slurry to liking',
    ],
    'chef': 'Min',
    'notes': 'Types of mushrooms used can vary, same with bell peppers',
    'source': 'https://youtu.be/V1Ads-jTOeQ',
    'tags': []
  },
  {
    'name': 'Korean Spam Pancakes',
    'image': '',
    'mealType': 'Dessert/Snacks',
    'cuisineType': 'Korean',
    'cookingStyle': ['Easy', 'Panfried'],
    'serving': 2,
    'cookTimeInMins': 30,
    'ingredients': {
      'Pancake batter': ['1 can of spam', '1 carrot', 'green onion', 'onion', '1 teaspoon minced garlic', '2 eggs', 'flour(suitable amount)'],
      'garnish': ['sliced red and green chilli peppers']
    },
    'instructions': [
      'Mash spam',
      'Chop carrot, green onion, onion finely.',
      'Mix all batter ingredients with some salt and pepper.',
      'Pan fry pancakes in pan with some oil, add a slice of red and green chilli peppers on the pancakes for garnish.',
    ],
    'chef': 'Min',
    'notes': 'Can soak spam in boiling water first to make it less salty. Can add other kinds of vegetables as well',
    'source': 'https://youtu.be/60dvg9Hr_HM',
    'tags': ['spam', 'onion', 'pancake']
  },
  {
    'name': 'Panfried Tofu',
    'image': '',
    'mealType': 'Dinner',
    'cuisineType': 'Chinese',
    'cookingStyle': ['Easy','Panfry','Vegetarian'],
    'serving': 2,
    'cookTimeInMins': 30,
    'ingredients': {
      'Batter': ['flour', 'egg'],
      'Main': ['sliced firm tofu'],
      'Dipping sauce': ['sliced red and green chilli peppers'],
      'Garnish': ['1 tablespoon soy sauce', '1 tablespoon vinegar', '0.5 tablespoon chilli flakes'],
    },
    'instructions': [
      'Slice tofu into suitable slices about 1.5cm thick',
      'Dry tofu using paper towels',
      'Prepare eggwash by beating eggs in a bowl',
      'Coat tofu slices in flour and egg',
      'Panfry coated tofu',
      'Place 1 sliced red chilli pepper and 1 sliced green chilli pepper on one side of sliced tofu when pan - frying as garnish',
    ],
    'chef': 'Min',
    'notes': '',
    'source': 'https://youtu.be/mFMgJKOo9Tk',
    'tags': []
  },
  {
    'name': '',
    'image': '',
    'mealType': '',
    'cuisineType': '',
    'cookingStyle': '',
    'serving': 2,
    'cookTimeInMins': 30,
    'ingredients': {
      'main': [],
      'garnish': []
    },
    'instructions': [
      '',
    ],
    'chef': 'Min',
    'notes': '',
    'source': '',
    'tags': []
  },
]

export { mealTypes, cuisineTypes, cookingStyles, recipes }
