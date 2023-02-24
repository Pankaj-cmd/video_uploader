import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai"

const Upload = () => {
  return <Container maxW={'container.xl'} p={'16'} h={'100vh'} >
    <VStack color={'purple.600'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form >
            <HStack>
                <Input required={true} type={'file'} 
                css={{"&::file-selector-button":{
                    border:'none',
                    width:"calc(100% + 36px)",
                    height:"100%",
                    marginLeft:"-18px",
                    color:"purple",
                    backgroundColor:"white",
                    cursor:"pointer",
                },
            }}
                />
                <Button colorScheme={'purple'} type={'submit'}>Upload</Button>
            </HStack>

        </form>
    </VStack>


  </Container>
}

export default Upload