import { createIcon, Button, Container, Heading, HStack, Stack, Text, Icon, SimpleGrid, VStack, Box, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Footer from '../components/Footer'
// import Icon from '../components/Icon'
import Layout from '../components/layout'
import { TitleAndMetaTags } from '../components/TitleAndMetaTags'

export default function Overview() {
  const grayTextColor = useColorModeValue('gray.600', 'gray.400');
  const buttonBgColor = useColorModeValue('gray.800', 'gray.50');

  return (
    <Layout>
      <Container maxW="7xl">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 5, md: 5 }}
        >
          <Heading
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            fontWeight='extrabold'
          // lineHeight={'110%'}
          >
            Make Your App Chatty <br />
            <Text as={'span'} color={'blue.400'}>
              Easy Integration <br />
            </Text>
            <Text as={'span'} color={'blue.400'}>
              Fast Development
            </Text>
          </Heading>
          <Stack alignItems={'center'}>
            <HStack>
              {/* <HiCheckCircle /> */}
              <Text color={grayTextColor} fontSize={{ base: 'md', md: 'lg' }}>
                Best solution to integrate chat service to your platform
              </Text>
            </HStack>
            <HStack>
              {/* <HiCheckCircle /> */}
              <Text color={grayTextColor} fontSize={{ base: 'md', md: 'lg' }}>
                Save your developing cost for frontend and backend developments
              </Text>
            </HStack>
            <HStack>
              {/* <HiCheckCircle /> */}
              <Text color={grayTextColor} fontSize={{ base: 'md', md: 'lg' }}>
                Just start with only sample code and then experience chatting on your app
              </Text>
            </HStack>
          </Stack>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'blue'}
              bg={buttonBgColor}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Your First App
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            <Box display={{ base: 'none', md: 'block' }}>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'sm'}
                fontWeight={'extrabold'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting at FREE plan
              </Text>
            </Box>
          </Stack>
        </Stack>

        {/* FEATURES */}
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 36 }}>
          <VStack spacing={2} textAlign="center" my={10}>
            <Heading
              fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
              fontWeight='extrabold'
            >
              Features
            </Heading>
            <Text fontSize="lg" color={grayTextColor}>
              Basic but Essential featues and stable and fast
            </Text>
          </VStack>


          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={5}>
            {features.map((feature) => (
              <Box key={feature.title}>
                <Text
                  // fontFamily={'heading'}
                  fontSize={{ base: 'xl', md: '3xl' }}
                  color={'blue.300'}
                  fontWeight={'extrabold'}
                  mb={3}>
                  {feature.title}
                </Text>
                <Text fontSize={'xl'} color={grayTextColor}>
                  {feature.content}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
      <Footer />
    </Layout>
  )
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

const FeaturesText = ({ children }) => {
  const textColor = useColorModeValue('gray.600', 'gray.200');
  return (
    <Text as={'span'} fontWeight={'bold'} color={textColor}>
      {children}
    </Text>
  );
}
const features = [
  {
    title: 'Text Messages',
    content: (
      <>
        <FeaturesText>Basic Feature</FeaturesText> for chat service
      </>
    ),
  },
  {
    title: 'Image file upload',
    content: (
      <>
        <FeaturesText>Multiple image file upload</FeaturesText> for your users. and <FeaturesText>support thumbnail</FeaturesText> images with on-demand size
      </>
    ),
  },
  {
    title: 'Auto Message Translation',
    content: (
      <>
        <FeaturesText>Real time translation</FeaturesText> for international user in chat room
      </>
    ),
  },
  {
    title: 'Push Notifications',
    content: (
      <>
        <FeaturesText>Easy and Fast</FeaturesText> integration using your FCM credentials
      </>
    ),
  },
  {
    title: 'Multiple Grouping',
    content: (
      <>
        <FeaturesText>Grouping chat list or chat members</FeaturesText> for variant chat service within one app
      </>
    ),
  },
  {
    title: 'Total Missed Badge Count',
    content: (
      <>
        <FeaturesText>Just use badge count for missed messages</FeaturesText> provided from sdk
      </>
    ),
  },
];
