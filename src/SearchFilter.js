// Sample card from Airbnb
import React from 'react'
import { Wrap, WrapItem, Box, Input, Menu, MenuList, MenuOptionGroup, MenuItemOption, MenuButton, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

class SearchFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFilters: {
        searchTerm: '',
        mealTypes: this.props.mealTypes,
        cuisineTypes: this.props.cuisineTypes,
        cookingStyles: this.props.cookingStyles
      }
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.updateMealTypeFilter = this.updateMealTypeFilter.bind(this)
    this.updateCuisineTypeFilter = this.updateCuisineTypeFilter.bind(this)
    this.updateCookingStyleFilter = this.updateCookingStyleFilter.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
  }

  updateSearchTerm(e) {
    let newSearchFilters = { ...this.state.searchFilters, searchTerm: e.target.value }
    this.setState({ searchFilters: newSearchFilters })
  }

  updateMealTypeFilter(e) {
    let newSearchFilters = {...this.state.searchFilters, mealTypes: e}
    this.setState({ searchFilters: newSearchFilters })
  }

  updateCuisineTypeFilter(e) {
    let newSearchFilters = {...this.state.searchFilters, cuisineTypes: e}
    this.setState({ searchFilters: newSearchFilters })
  }

  updateCookingStyleFilter(e) {
    let newSearchFilters = { ...this.state.searchFilters, cookingStyles: e}
    this.setState({ searchFilters: newSearchFilters })
  }

  handleSearch() {
    this.props.searchRecipes(this.state.searchFilters)
  }

  resetSearch() {
    this.setState({
      searchFilters: {
        searchTerm: '',
        mealTypes: this.props.mealTypes,
        cuisineTypes: this.props.cuisineTypes,
        cookingStyles: this.props.cookingStyles
      }
    })
  }

  render() {
    return (
      <Box w="100%">
        <Wrap justify="center" align="center" spacing="40px">
          <WrapItem>
            <Input
              variant="flushed"
              value={this.state.searchTerm}
              focusBorderColor="tomato"
              placeholder="Search recipes"
              onChange={this.updateSearchTerm}
            />
          </WrapItem>

          <WrapItem>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} variant="ghost">
                Meal Types <ChevronDownIcon />
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup type="checkbox" defaultValue={this.props.mealTypes} onChange={this.updateMealTypeFilter}>
                  {this.props.mealTypes.map((type, index) => {
                    return (<MenuItemOption isChecked={true} value={type} key={index}>{type}</MenuItemOption>)
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </WrapItem>

          <WrapItem>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} variant="ghost">
                Cuisine Types <ChevronDownIcon />
              </MenuButton>
                <MenuList minWidth="240px">
                <MenuOptionGroup type="checkbox" defaultValue={this.props.cuisineTypes} onChange={this.updateCuisineTypeFilter}>
                  {this.props.cuisineTypes.map((type, index) => {
                    return (<MenuItemOption value={type} key={index}>{type}</MenuItemOption>)
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </WrapItem>

          <WrapItem>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} variant="ghost">
                Cooking Styles <ChevronDownIcon />
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup type="checkbox" defaultValue={this.props.cookingStyles} onChange={this.updateCookingStyleFilter}>
                  {this.props.cookingStyles.map((type, index) => {
                    return (<MenuItemOption value={type} key={index}>{type}</MenuItemOption>)
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </WrapItem>

          <WrapItem>
            <Button onClick={this.resetSearch}>Reset</Button>
          </WrapItem>

          <WrapItem>
            <Button variant="outline" onClick={this.handleSearch}>Filter</Button>
          </WrapItem>
        </Wrap>
      </Box>
    )
  }
}

export default SearchFilter
