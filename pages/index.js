import { createIcon, Button, Container, Heading, HStack, Stack, Text, Icon, SimpleGrid, VStack, Box, useColorModeValue, theme, Center, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { HiCheckCircle } from 'react-icons/hi';
import { serialize } from 'next-mdx-remote/serialize'
import Footer from '../components/Footer'
// import Icon from '../components/Icon'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import { TitleAndMetaTags } from '../components/TitleAndMetaTags'
import { Router, useRouter } from 'next/router';
import MDXContent from '../components/MDX.Content';
import { getIndex } from '../lib/post';

export default function Overview({ frontmatter, body, fields }) {
  const grayTextColor = useColorModeValue('gray.600', 'gray.400');
  const buttonBgColor = useColorModeValue('gray.800', 'gray.50');
  const router = useRouter();

  return (
    <Layout>
      <TitleAndMetaTags
        title={frontmatter.title}
        description={frontmatter.subtitle ? frontmatter.subtitle : ''}
        banner={'/img/index-outline.svg'}
        pathname={`${fields.slug}`}
      />
      <MDXContent
        title={frontmatter.title}
        subtitle={frontmatter.subtitle ? frontmatter.subtitle : ''}
        banner={frontmatter.banner ? frontmatter.banner : ''}
        body={body}
        lastUpdatedOn={fields.lastUpdatedOn}
        slug={fields.slug}
      ></MDXContent>
      <Footer />
    </Layout>
    // <Layout>
    //   <Container w={'full'} maxW={'7xl'} p={0} m={0}>
    //     <Center>
    //       <Logo size={'sm'} color={theme.colors.blue[500]} />
    //     </Center>
    //     <Divider my={4} />
    //     <Box
    //     // as={Box}
    //     // textAlign={'center'}
    //     // spacing={{ base: 8, md: 14 }}
    //     // pt={{ base: 5, md: 5 }}
    //     >
    //       <HStack py={2}>
    //         <Heading
    //           fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
    //           fontWeight='bold'
    //         >
    //           Make Your App Chatty !
    //         </Heading>
    //         {/* <Heading
    //           fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
    //           fontWeight='bold'
    //         >
    //           Make Your App Chatty
    //         </Heading> */}
    //       </HStack>



    //       <Stack py={2}>
    //         <HStack>
    //           <HiCheckCircle />
    //           <Text color={grayTextColor} fontSize={{ base: 'md', md: 'lg' }}>
    //             Easy & Fast solution to integrate chat service to your application
    //           </Text>
    //         </HStack>
    //         <HStack>
    //           <HiCheckCircle />
    //           <Text color={grayTextColor} fontSize={{ base: 'md', md: 'lg' }}>
    //             Just use chat ui components provided by react native sdk and then chat data are managed automatically at the cloud server
    //             {/* Save your developing cost for frontend and backend developments */}
    //           </Text>
    //         </HStack>
    //         <HStack>
    //           <HiCheckCircle />
    //           <Text color={grayTextColor} fontSize={{ base: 'md', md: 'lg' }}>
    //             Start with free and then experience chat implementation on your app in several minutes
    //           </Text>
    //         </HStack>
    //       </Stack>

    //       <Center my={6}>
    //         <HStack>
    //           <Button
    //             colorScheme={'blue'}
    //             rounded={'full'}
    //             px={6}
    //             _hover={{
    //               bg: 'blue.500',
    //             }}
    //             onClick={() => router.push('https://dashboard.chatty-cloud.com')}
    //           >
    //             Create Your First App
    //           </Button>
    //           <Button
    //             colorScheme={'blue'}
    //             bg={buttonBgColor}
    //             rounded={'full'}
    //             px={6}
    //             _hover={{
    //               bg: 'gray.500',
    //             }}
    //             onClick={() => router.push('/getting-started/introduction')}
    //           >
    //             Learn more
    //           </Button>
    //         </HStack>

    //       </Center>
    //     </Box>
    //     <Divider my={4} />
    //     <Heading
    //       fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
    //       fontWeight='bold'
    //     >
    //       Install
    //     </Heading>
    //   </Container>
    //   <Footer />
    // </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getIndex();
  const mdxSource = await serialize(post.content)

  return {
    props: {
      frontmatter: post.frontmatter,
      headings: post.headings,
      body: mdxSource,
      fields: {
        slug: post.slug,
        lastUpdatedOn: post.lastUpdatedOn
      }
    }
  }
}

