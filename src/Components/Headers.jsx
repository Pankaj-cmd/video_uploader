import React from 'react'
import {Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react"

import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"
const Headers = () => {

const {isOpen,onOpen,onClose} = useDisclosure()

  return (
   <>
    <Button
    zIndex={'overlay'}
    pos={'fixed'}
    top={'4'} left={'4'} colorScheme={'purple'} p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}
    >
        <BiMenuAltLeft size={'20'} />
    </Button>

    <Drawer isOpen={isOpen} placement={'left'} onClose={onClose} >
    <DrawerOverlay />
    <DrawerContent>
        <DrawerHeader>
            VIDEO HUBS
        </DrawerHeader>
        <DrawerBody>
            <VStack>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={"/"}>Home</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={"/videos"}>Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={"/videos?category=free"}>All Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={"/upload"}>Upload Vidoes</Link>
            </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={'20'}  w={'full'} 
            left={'0'} justifyContent={'space-around'}>
                <Button onClick={onClose} colorScheme={'purple'} variant={'solid'}>
                    <Link to={'/login'}>Log In</Link>
                </Button>
                <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
            </HStack>
        </DrawerBody>
    </DrawerContent>


    </Drawer>
   
   </>
  )
}

export default Headers