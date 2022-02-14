import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Lang from '../lib/utils'
import React from 'react'

const Home = () => {
  const t = Lang('home')
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          {t.title}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Emanuel Juricev
            </Heading>
            <p>{t.subName}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/emanuel.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.work}
          </Heading>
          <Paragraph>...</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t.bottomPortfolio}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          {/* <BioSection>
            <BioYear>1984</BioYear>
            Born in Osaka (大阪), Japan.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Completed the Master&apos;s Program in the Graduate School of
            Information Science at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程)
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Worked at Yahoo! Japan (ヤフー株式会社入社)
          </BioSection>
          <BioSection>
            <BioYear>2012 to present</BioYear>
            Works as a freelance
          </BioSection> */}
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>{t.like}</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t.ssnn}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Nobel322" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @nobel322
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/emanuel__jrc" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @emanuel__jrc
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/emanuel_jrc" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @emanuel_jrc
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYouTube}
            >
              My YouTube channel
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid> */}

          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t.bottonPost}
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
