import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="coursewebsite">
    <Container>
      <Title>
        Course Website <Badge> 2024 </Badge>
      </Title>
      <P>
        Made this project while learning about web dev for a school project. I
        had to make a multipage website to display the knowledge I had with the
        basic HTML and CSS without using any frameworks. For some time I was
        thinking between a portfolio sort of website or something similar but in
        the end decided to make this website that would be like course website
        where people would buy courses and learn web development. Honestly it
        isn&apos;t the best project I ever made but it was a good learning
        experience and I had a fun time making it.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>

        <Meta>Source</Meta>
        <Link href="https://github.com/EmanuelJrc/LearnWebDev">
          github.com/EmanuelJrc/LearnWebDev <ExternalLinkIcon mx="2px" />
        </Link>
      </List>

      <WorkImage src="/images/works/course.png"></WorkImage>
      <WorkImage src="/images/works/course_phone.png"></WorkImage>
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
