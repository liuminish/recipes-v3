import React from 'react'
import { Box, Heading, Center, Grid, GridItem, Image } from "@chakra-ui/react"

class SingleRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      inputOpacity: false
    }

  }

  render() {
    const {
      name,
      image,
      mealType,
      cuisineType,
      cookingStyle,
      serving,
      cookTimeInMins,
      ingredients,
      instructions,
      chef,
      notes,
      source,
      tags
    } = this.props.currentRecipe
    return (
      <Box>

        <Center h="100px">
          <Heading>{name}</Heading>
        </Center>

        <Center>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem colSpan={1} bg="papayawhip">
              <Image
                boxSize="250px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt={name}
                fallbackSrc="https://via.placeholder.com/150"
              />
            </GridItem>

            <GridItem colSpan={1} bg="papayawhip" />
            <GridItem colSpan={2} bg="tomato" />
          </Grid>
        </Center>
      </Box>
    )
  }
}

export default SingleRecipe;
