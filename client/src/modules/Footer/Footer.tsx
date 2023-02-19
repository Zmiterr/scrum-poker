import {
  Flex,
  HStack,
  IconButton,
  Link,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { ChakraLogo } from '../../components/ChakraLogo/ChakraLogo';
import { BsChatQuote } from 'react-icons/bs';

export const Footer = (): JSX.Element => {
  const cMode = useColorMode();

  return (
    <Flex
      bg={cMode.colorMode === 'light' ? 'gray.400' : 'gray.700'}
      height="100%"
      align="center"
      px="2"
      justify="space-between"
    >
      <HStack>
        <Popover>
          <PopoverTrigger>
            <IconButton aria-label="info" icon={<InfoOutlineIcon />} />
          </PopoverTrigger>
          <Portal>
            <PopoverContent width="fit-content">
              <PopoverBody>
                <UnorderedList ml="0" style={{ listStyle: 'none' }}>
                  <ListItem>
                    <Link
                      href="https://chakra-ui.com"
                      display="flex"
                      alignItems="center"
                      gridGap="1"
                      flexDirection="row"
                      isExternal
                    >
                      <ChakraLogo h="1rem" pointerEvents="none" />
                      <Text>powered by Chakra UI</Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="https://undraw.co"
                      display="flex"
                      alignItems="center"
                      gridGap="1"
                      flexDirection="row"
                      isExternal
                    >
                      {/*<UndrawImageFocus height="1rem" />*/}
                      <Text>illustrations from unDraw</Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="https://github.com/lukePeavey/quotable"
                      display="flex"
                      alignItems="center"
                      gridGap="1"
                      flexDirection="row"
                      isExternal
                    >
                      <BsChatQuote />
                      <Text>quotes from quotable</Text>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </HStack>
    </Flex>
  );
};
