import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'gray.100')(props),
      bg: mode('white', 'gray.900')(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}



const theme = extendTheme({
  styles,
  config
});


export default theme;