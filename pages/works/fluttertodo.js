import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Lang from '../../lib/utils'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const t = Lang('works')
  return (
    <Layout title="fluttertodo">
      <Container>
        <Title>
          Todo App (Flutter) <Badge>2022 - 2023 </Badge>
        </Title>
        <P>{t.textTodo}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android, IOS</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter</span>
          </ListItem>

          <Meta>Presentation</Meta>
          <Link href="https://github.com/Nobel322/getx_todo_list/">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </List>

        <WorkImage src="/images/works/todo1.png"></WorkImage>
        <WorkImage src="/images/works/todo2.png"></WorkImage>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
