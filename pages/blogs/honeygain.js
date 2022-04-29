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

const Blog = () => {
  const t = Lang('blogs')
  return (
    <Layout title="honeygain">
      <Container>
        <Title>Honeygain</Title>
        <P>{t.textHoneygain}</P>
      </Container>
    </Layout>
  )
}

export default Blog
export { getServerSideProps } from '../../components/chakra'
