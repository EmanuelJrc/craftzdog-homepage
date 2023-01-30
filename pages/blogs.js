import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BlogGridItem } from '../components/grid-item'
import { GridItem } from '../components/grid-item'
import Lang from '../lib/utils'
import thumbTest from '../public/images/blogs/test-image.jpg'

const Blogs = () => {
  const t = Lang('blogs')
  return (
    <Layout title="Blogs">
      <Container>
        <Heading as="h3" fontSize={42} mb={4}>
          {t.commingSoon}
        </Heading>

        <Section delay={0.3}>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <BlogGridItem
                id="testblog"
                title="Test Blog"
                thumbnail={thumbTest}
              >
                {t.textTodo}
              </BlogGridItem>
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

export default Blogs
export { getServerSideProps } from '../components/chakra'
