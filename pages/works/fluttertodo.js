import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="fluttertodo">
    <Container>
      <Title>
        Todo App (Flutter) <Badge>2022 - 2023 </Badge>
      </Title>
      <P>Flutter todo list and notes taking app.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, IOS</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter</span>
        </ListItem>

        <Meta>Source</Meta>
        <Link href="https://github.com/EmanuelJrc/getx_todo_list/">
          github.com/EmanuelJrc/getx_todo_list/ <ExternalLinkIcon mx="2px" />
        </Link>
      </List>

      <WorkImage src="/images/works/todo1.png"></WorkImage>
      <WorkImage src="/images/works/todo2.png"></WorkImage>
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
