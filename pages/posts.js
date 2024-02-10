import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbTest from '../public/images/blogs/test-image.jpg'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={42} mb={4}>
          Welcome to my blogs
        </Heading>

        <Section delay={0.3}>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <GridItem title="Test Blog" thumbnail={thumbTest}>
                Flutter todo list and notes taking app.
              </GridItem>
            </Section>
          </SimpleGrid>
        </Section>

        {/* <Section delay={0.5}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="How to Price Yourself as a Freelance Developer"
              thumbnail={thumbHoney}
              href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
            />
            <GridItem
              title="I made my React Native app 50x faster"
              thumbnail={thumbHoney}
              href="https://www.youtube.com/watch?v=vj723NlrIQc"
            />
          </SimpleGrid>
        </Section> */}
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
