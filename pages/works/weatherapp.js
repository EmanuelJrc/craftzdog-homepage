import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="weatherapp">
      <Container>
        <Title>
          Weather App <Badge>2021 </Badge>
        </Title>
        <P>
          Weather App created from a tutorial where I learned more about React
          and Javascript
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, Reactjs</span>
          </ListItem>

          <Meta>Presentation</Meta>
          <Link href="https://github.com/Nobel322/WeatherApp/">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </List>

        <WorkImage src="/images/works/weather1.png"></WorkImage>
        <WorkImage src="/images/works/weather2.png"></WorkImage>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
