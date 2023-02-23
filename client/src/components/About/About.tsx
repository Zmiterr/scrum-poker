import {
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
} from '@chakra-ui/react';
import React from 'react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { ChakraLogo } from '../ChakraLogo/ChakraLogo';
import { BsChatQuote } from 'react-icons/bs';
import { ReactComponent as UndrawImageFocus } from '../../assets/images/undraw/image-focus.svg';

const About = (): JSX.Element => {
  return (
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
                  <UndrawImageFocus height="1rem" />
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
  );
};

export default About;
