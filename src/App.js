import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Navibar from './Navibar.js'
import Mainpage from './Mainpage.js'
import AllRecipes from './AllRecipes.js'
import SingleRecipe from './SingleRecipe.js'

import { mealTypes, cuisineTypes, cookingStyles, recipes } from './recipes-data.js'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: recipes,
      mealTypes: mealTypes,
      cuisineTypes: cuisineTypes,
      cookingStyles: cookingStyles,

      currentRecipe: {},
    }

    this.searchRecipes = this.searchRecipes.bind(this)
    this.updateCurrentRecipe = this.updateCurrentRecipe.bind(this)
  }

  searchRecipes(searchTerms) {
    console.log('searching for', searchTerms)
  }

  updateCurrentRecipe(input) {
    this.setState({currentRecipe: this.state.recipes[input.index]})
    console.log('setting recipe as current', this.state.recipes[input.index])
  }

  render() {
    return (
      <div className="App">
        <Navibar />

        <Switch>
          <Route path='/' exact>
            <Mainpage />
          </Route>
          <Route path='/all-recipes' exact>
            <AllRecipes
              recipes={this.state.recipes}
              mealTypes={this.state.mealTypes}
              cuisineTypes={this.state.cuisineTypes}
              cookingStyles={this.state.cookingStyles}
              searchRecipes={this.searchRecipes}
              updateCurrentRecipe={this.updateCurrentRecipe}
            />
          </Route>
          <Route path='/search' exact>
            <Mainpage />
          </Route>
          <Route path='/recipe' exact>
            <SingleRecipe
              currentRecipe={this.state.currentRecipe}
            />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App
