import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="spotify_recommends">
    <Container>
      <Title>
        Spotify Recommendation <Badge> 2024 </Badge>
      </Title>
      <P>
        Spotify track recommendation program written in Python. Can recommend
        tracks based on the one you are currently listening to.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>

        <Meta>Presentation</Meta>
        <Link href="https://github.com/EmanuelJrc/Spotify-recommendation">
          Github <ExternalLinkIcon mx="2px" />
        </Link>
      </List>

      <WorkImage src="/images/works/spoti2.png"></WorkImage>
      <WorkImage src="/images/works/spoti3.png"></WorkImage>
      {/*
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
*/}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
