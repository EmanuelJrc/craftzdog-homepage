import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTodo from '../public/images/works/thumb_todo.png'
import thumbWeather from '../public/images/works/weather2.png'
import thumbSpoti from '../public/images/works/spoti.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* Flutter todo app */}
          <Section>
            <WorkGridItem
              id="fluttertodo"
              title="Todo App (Flutter)"
              thumbnail={thumbTodo}
            >
              Flutter todo list and notes taking app.
            </WorkGridItem>
          </Section>
          {/* Weather app */}
          <Section>
            <WorkGridItem
              id="spotify"
              title="Spotify Recommendation"
              thumbnail={thumbSpoti}
            >
              Spotify track recommendation program written in Python.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Learning projects
          </Heading>
        </Section>

        {/* Weather app */}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="weatherapp"
              thumbnail={thumbWeather}
              title="Weather App"
            >
              App that lets you know the weather of your location.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
