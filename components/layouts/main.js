import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelFoxLoader from '../voxel-fox-loader'

const LazyVoxelFox = dynamic(() => import('../voxel-fox'), {
  ssr: false,
  loading: () => <VoxelFoxLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Emanuel's homepage" />
        <meta name="author" content="Emanuel Juricev" />
        <meta name="author" content="nobel322" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@emanuel__jrc" />
        <meta name="twitter:creator" content="@emanuel__jrc" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Emanuel Juricev's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Emanuel Juricev - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelFox />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
