import React from 'react'
import {Box, Container, Heading, Image, Stack, Text} from "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingoptions ={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transfrom:'translate(-50% ,-50%)',
  textTransform:'uppercase',
  p:'4',
  size:'4xl'

}

const MyCarousel = () =>(

  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false}>

  <Box w={'full'} h={'80vh'}>
    <Image h={'100vh'} w={'full'} objectFit={'cover'} src={img1} />
    <Heading bgColor={'blackAlpha.600'} color={'white'}
    {...headingoptions}>Welcome to Virtual Reality</Heading>
  </Box>
  <Box w={'full'} h={'100vh'}>
  <Image h={'100vh'} w={'full'} objectFit={'cover'} src={img3} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>Gaming World</Heading>
  </Box>
  <Box w={'full'} h={'100vh'}>
  <Image h={'100vh'} w={'full'} objectFit={'cover'} src={img4} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>Virtual World</Heading>
  </Box>

  </Carousel>
)

const Home = () => {
  return (
    <Box>
    <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'}
        borderBottom={'3px solid'}
        w={'fit-content'} m={'auto'}
        >
            Services
        </Heading>
        <Stack h={'full'} p={'4'} alignItems={'center'} 
        direction={['column','row']} >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-10deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut saepe reiciendis facilis repellendus quia maxime blanditiis, incidunt corrupti nesciunt aperiam tenetur et beatae expedita dolores ratione dolorum repudiandae laborum optio.
                Dolor, reprehenderit maxime exercitationem obcaecati iusto esse consectetur. Quae, necessitatibus! Voluptas et obcaecati doloribus ipsum nesciunt dicta optio magnam error? Molestiae ullam debitis odio ducimus similique perspiciatis adipisci fugit explicabo.
            </Text>
        </Stack>
    </Container>
    </Box>
  )

}
export default Home