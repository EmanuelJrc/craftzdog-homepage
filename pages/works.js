import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTodo from '../public/images/works/thumb_todo.png'
import thumbWeather from '../public/images/works/weather2.png'

import Lang from '../lib/utils'
const Works = () => {
  const t = Lang('work')
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.work}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="fluttertodo"
              title="Todo App (Flutter)"
              thumbnail={thumbTodo}
            >
              {t.textTodo}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {t.titleLearning}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="weatherapp"
              thumbnail={thumbWeather}
              title="Weather App"
            >
              {t.textWeather}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
