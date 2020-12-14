import React from 'react'
import { Link } from 'react-router-dom'
import { useColorMode } from 'react-use-color-mode'
import { Box, IconButton, Button, Flex, Spacer} from "@chakra-ui/react"
import { SearchIcon, HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'

function Navibar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Box bg="tomato" w="100%" p={2} color="white">
        <Flex>
          <Link to="/all-recipes">
            <IconButton
              colorScheme="white"
              variant="inner"
              size="md"
              aria-label="Search database"
              icon={<HamburgerIcon />}
              _hover={{ opacity: 0.5 }}
              _focus={{
                outline: 'none',
              }}
            />
          </Link>
          <Spacer />
          <Link to="/">
            <Button
              colorScheme="white"
              variant="inner"
              size="md"
              aria-label="Search database"
              icon="something"
              _hover={{ opacity: 0.5 }}
              _focus={{outline: 'none'}}
            >
              Recipes
            </Button>
          </Link>
          <Spacer />
          <Button variant="inner" size="md" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Link to="/search">
            <IconButton
              colorScheme="white"
              variant="inner"
              size="md"
              aria-label="Search database"
              icon={<SearchIcon />}
              _hover={{ opacity: 0.5 }}
              _focus={{
                outline: 'none',
              }}
            />
          </Link>
        </Flex>
      </Box>
    </div>
  )

}

export default Navibar;
