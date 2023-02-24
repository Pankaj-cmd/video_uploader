import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
   <Box p={'4'} bgColor={'blackAlpha.900'} minH={'40'} color={'white'}>
    <Stack direction={['column','row']} alignItems={'center'}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']} >
                Subscribe to get Updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input outline={'none'} focusBorderColor={'black'} border={'none'} borderRadius={'none'} placeholder='Enter your email here...'/>
            <Button p={'0'} variant={'ghost'} colorScheme={'telegram'}><AiOutlineSend  size={'20'}/></Button>
        </HStack> 
        </VStack>
        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>

        <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Videos Hubs
        </Heading>
        <Text>All Right Reserved</Text>
        </VStack>
        <VStack w={'full'}>

            <Heading size={'md'} textTransform={'uppercase'}>Social media</Heading>

            <Stack direction={['column' ,'row']}>

                <Button variant={'outline'} color={'red.600'} > <a href='https://www.youtube.com/' target={'_blank'} >YouTube</a></Button>

                <Button variant={'outline'} color={'telegram.900'}><a target={'_blank'} href='https://www.instagram.com/'>Instagram</a></Button>

                <Button variant={'solid'} color={'blackAlpha.900'}><a target={'_blank'} href='https://github.com/Pankaj-cmd'>Github</a></Button>

            </Stack>
        </VStack>
        
    </Stack>
   


   </Box>
  )
}

export default Footer