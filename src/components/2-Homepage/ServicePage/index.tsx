import { Button, Flex, Heading, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Backpack, CoinVertical } from "phosphor-react";
import { Link as Slink } from 'react-scroll'

interface ServicePageProps {
   servicePageData: {
      title: string | JSX.Element,
      text: string | JSX.Element,
      mode?: string,
      serviceImage: string
   }
   backPage?(): any

   previousPage: string
}

export function ServicePage({ servicePageData, backPage, previousPage }: ServicePageProps) {

   const router = useRouter()

   const visaBackButtonOffset = useBreakpointValue({
      base: 3100,
      sm: 2800,
      md: 2650,
      lg: 2650,
      xl: 2400
   })
   const nationalityBackButtonOffset = useBreakpointValue({
      base: 4200,
      sm: 3800,
      md: 3250,
      lg: 3300,
      xl: 3100
   })

   function returnButton() {

      if (previousPage === 'nacionalidade-portuguesa') {
         router.reload()
      } else if (previousPage === 'nacionalidade-italiana') {
         router.push('/')
      }
   }

   return (
      <Flex
         bgGradient='linear(135deg, whiteAlpha.900, whiteAlpha.800)'
         w='100%'
         mt={[83]}
      >
         <Flex
            flexDir='column'
            bgImage={'static/img/airplane-bg.png'}
            bgPosition='center'
            bgSize={'cover'}
            bgRepeat='no-repeat'
            alignItems='center'
            w='100%'
         >

            <Flex
               w='100%'
               bg='clubAqua'
               p={4}
            >
               <Text
                  mx='auto'
                  color='white'
                  fontSize='1.8rem'
                  fontWeight='300'
               >
                  Cidadanias e vistos
               </Text>

            </Flex>

            <Flex w='100%' flexDir={['column', 'column', 'row', 'row']} p={8}>

               <Flex w={['100%', '100%', '70%', '50%']} h={[80, 80, '', '']} borderRadius={4} align={['center', 'center', 'flex-start', 'center', '']} justifyContent='center' bgImage={servicePageData.serviceImage} bgPosition='center' bgSize='cover'>
               </Flex>

               <Flex w='100%' flexDir='column' h='100%' px={[0, 0, 4, 8]} py={[8, 8, 0, 0]}>
                  <VStack gap={6} textAlign={['left', 'left', 'left', 'left']} px={[0, 0, 8, 8]}
                     borderLeft={['', '', '1px solid #34343450', '1px solid #34343450']}
                  >
                     <Heading fontWeight='400' w='100%' fontSize='1.6rem' textAlign={'left'}>
                        {servicePageData.title}
                     </Heading>

                     <Flex display='inline' fontWeight={400} textAlign='justify'>
                        <Flex pb={8} minW={['100%', '100%', 80, 64]}>
                           <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>
                              <Button
                                 w='100%'
                                 bgColor={'#f4ad51'}
                                 color="white"
                                 borderRadius={2}
                                 _hover={{ bgColor: "clubMaldivas" }}
                              >
                                 FALE COM NOSSA EQUIPE
                              </Button>
                           </Slink>
                        </Flex>
                        {servicePageData.text}
                     </Flex>
                     <Slink to={'#Home'} spy={true} smooth={true} offset={servicePageData.mode == 'nationality' ? visaBackButtonOffset : nationalityBackButtonOffset} duration={0}>
                        <Button
                           mx='auto'
                           size='sm'
                           w={36}
                           borderRadius={2}
                           bg='clubDark'
                           color='gray.50'
                           fontSize='1rem'
                           fontWeight='300'
                           _hover={{ bg: 'clubAqua' }}
                           onClick={returnButton}
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