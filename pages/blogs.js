import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Lang from '../lib/utils'
import thumbRollercoin from '../public/images/contents/roller.jpg'
import thumbHoney from '../public/images/contents/honey.jpeg'
import thumbFaucet from '../public/images/contents/thumnail-faucets.png'

const Blogs = () => {
  const t = Lang('blog')
  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h3" fontSize={42} mb={4}>
          {t.commingSoon}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="honeygain"
              thumbnail={thumbHoney}
              title="Honeygain"
            >
              {t.textWeather}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.3}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <WorkGridItem
              title="Crypto Faucets - About Them And The Best Ones I Use"
              thumbnail={thumbFaucet}
              href="https://read.cash/@emanuel_jrc/crypto-faucets-aout-them-and-the-best-ones-i-use-60bf7209"
            />
            {/* <GridItem
              title="I stopped setting a financial goal for my SaaS"
              thumbnail={thumbHoney}
              href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
            /> */}
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
