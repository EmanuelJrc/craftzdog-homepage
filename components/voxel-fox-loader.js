import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const FoxSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const FoxContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-fox"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-100px']}
    w={[280, 480, 540]}
    h={[280, 480, 540]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <FoxContainer>
      <FoxSpinner />
    </FoxContainer>
  )
}

export default Loader
