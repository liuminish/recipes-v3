import React from 'react'
import { Link } from 'react-router-dom'
import { Wrap, WrapItem, Box, Heading, Center } from "@chakra-ui/react"

import RecipeCard from './RecipeCard.js'
import SearchFilter from './SearchFilter.js'

class AllRecipes extends React.Component {
  render() {
    return (
      <div>
        <Center h="100px">
          <Heading>All Recipes</Heading>
        </Center>

        <Box m={5} />

        <SearchFilter
          searchRecipes={this.props.searchRecipes}
          mealTypes={this.props.mealTypes}
          cuisineTypes={this.props.cuisineTypes}
          cookingStyles={this.props.cookingStyles}
        />

        <Box m={5} />

        <Box w="100%">
          <Wrap justify="center">
            {this.props.recipes.map((recipe, index) => {
              return (
                <Link to='/recipe' key={index} onClick={() => {this.props.updateCurrentRecipe({index})}} >
                  <WrapItem>
                    <RecipeCard
                      recipe={recipe}
                    />
                  </WrapItem>
                </Link>
              )
            })}
          </Wrap>
        </Box>
      </div>
    )
  }
}

export default AllRecipes;
