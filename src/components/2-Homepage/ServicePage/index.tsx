import { Button, Flex, Heading, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { CoinVertical } from "phosphor-react";
import {Link as Slink} from 'react-scroll'

interface ServicePageProps {
   servicePageData:{
      title:string,
      text:string,
      serviceImage:string
   }
   backPage(): any
}

export function ServicePage( {servicePageData, backPage}:ServicePageProps) {
   
   const backButtonOffset = useBreakpointValue({ base: 2800, sm: 2800, md: 2400, lg: 2400, xl: 2400})
   return (
      <Flex bgGradient='linear(135deg, whiteAlpha.900, whiteAlpha.800)' w='100%' mt={[83]}>
         <Flex  flexDir='column'
          alignItems='center'
         bgImage={'static/img/airplane-bg.png'} bgPosition='center' bgSize={'cover'} bgRepeat='no-repeat'
         >

            <Flex w='100%' bg='clubAqua' p={4}> 
               <Text mx='auto' color='white' fontSize='1.8rem' fontWeight='300'> Cidadanias e vistos</Text>
            </Flex>

            <Flex w='100%' flexDir={['column','column','row', 'row']} p={8}>
               
               <Flex w={['100%','100%','70%','50%']} h={[80,80,'','']} borderRadius={4} align={['center','center','flex-start','center','']} justifyContent='center' bgImage={servicePageData.serviceImage} bgPosition='center' bgSize='cover'  borderLeft={'1px solid #34343450'}>
               </Flex>
               
               <Flex w='100%' flexDir='column' h='100%'  px={[2,2,4,8]}>
                  <VStack gap={6} textAlign={['left','left','left','left']} px={8}  borderLeft={'1px solid #34343450'}>
                     <Heading fontWeight='400' w='100%' fontSize='1.6rem' textAlign={'left'}> 
                        {servicePageData.title} 
                     </Heading>
                     <Flex display='inline' fontWeight={400}> {servicePageData.text}</Flex>
                     <Slink to={'#Home'} spy={true} smooth={true} offset={backButtonOffset} duration={500}>
                        <Button
                        mx='auto'
                        size='sm'
                        w={36}
                        borderRadius={2}
                        bg='clubDark'
                        color='gray.50'
                        fontSize='1rem'
                        fontWeight='300'
                        _hover={{bg:'clubAqua'}}
                        onClick={backPage}
                        >
                           Voltar
                        </Button>
                     </Slink>
                  </VStack>
               </Flex>

            </Flex>
         </Flex>
      </Flex>
   )
}