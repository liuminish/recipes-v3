// Sample card from Airbnb
import React from 'react'
import { Box, Badge, Image } from "@chakra-ui/react"

class RecipeCard extends React.Component {
  render() {
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={this.props.recipe.image} alt={this.props.recipe.name} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {this.props.recipe.cookTimeInMins} mins &bull; {this.props.recipe.serving} servings
          </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {this.props.recipe.name}
          </Box>
        </Box>
      </Box>
    )
  }
}

export default RecipeCard
