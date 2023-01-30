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
import { Title, BlogImage, Meta } from '../../components/blog'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Lang from '../../lib/utils'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Blogs = () => {
  const t = Lang('blogs')
  return (
    <Layout title="testblog">
      <Container>
        <Title>
          Lorem Ipsum <Badge>2022 - 2023 </Badge>
        </Title>
        <P>{t.textTodo}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Lorem Ipsum, Lorem Ipsum</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Lorem Ipsum</span>
          </ListItem>

          <Meta>Presentation</Meta>
          <Link href="">
            Lorem Ipsum <ExternalLinkIcon mx="2px" />
          </Link>
        </List>

        <BlogImage src="/images/blogs/test-image.jpg"></BlogImage>
        <BlogImage src="/images/blogs/test-image.jpg"></BlogImage>
      </Container>
    </Layout>
  )
}

export default Blogs
export { getServerSideProps } from '../../components/chakra'
