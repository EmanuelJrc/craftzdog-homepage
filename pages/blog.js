import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import Lang from '../lib/utils'
import thumbRollercoin from '../public/images/contents/roller.jpg'
import thumbHoney from '../public/images/contents/honey.jpeg'
import thumbFaucet from '../public/images/contents/thumnail-faucets.png'

const Blog = () => {
  const t = Lang('blog')
  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h3" fontSize={42} mb={4}>
          {t.commingSoon}
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Rollercoin - Crypto Mining Simulator Game That Pays!!"
              thumbnail={thumbRollercoin}
              href="https://read.cash/@emanuel_jrc/rollercoin-crypto-mining-simulator-game-that-pays-787981bd"
            />
            <GridItem
              title="Honeygain, earn money passively"
              thumbnail={thumbHoney}
              href="https://read.cash/@emanuel_jrc/honeygain-earn-money-passively-4ad59a28"
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Crypto Faucets - About Them And The Best Ones I Use"
              thumbnail={thumbFaucet}
              href="https://read.cash/@emanuel_jrc/crypto-faucets-about-them-and-the-best-ones-i-use-60bf7209"
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

export default Blog
export { getServerSideProps } from '../components/chakra'
