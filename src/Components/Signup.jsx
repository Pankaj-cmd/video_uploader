import { Container, Heading, Input, VStack ,Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
            <Heading textAlign={'center'}>Videos Hub</Heading>
            <Avatar alignSelf={'center'} boxSize={'20'}  />
            <Input placeholder='Name' type={'text'} required focusBorderColor='purple.500' />

            <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500' />

            <Input placeholder='Password' type={'password'} required focusBorderColor='purple.500' />

        <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>
        <Text alignSelf={'flex-end'}>Already User? <Button variant={'link'}><Link to={'/login'}>Log In</Link></Button></Text>
        

        </VStack>
    </form>

  </Container>
}
export default Signup