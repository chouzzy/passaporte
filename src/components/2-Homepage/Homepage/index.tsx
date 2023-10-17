import { Button, Container, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, Text, VStack, useInterval } from "@chakra-ui/react";
import { useState } from "react";
import { Navbar } from "../../1-Navbar";
import { Banner } from "../Banner";
import { ServicePage } from "../ServicePage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { lines } from "../../3-Services/Nationality/CidadaniaItalianaData";

interface HomepageProps {
   serviceOn: any,
   backPage?(): any,
   servicePageData?: {
      title: string,
      text: string,
      serviceImage: string
   }
   changePage?: (lineData: any) => void
   isOpen: boolean
   onOpen: () => void
   onClose: () => void
   firstOpen:boolean
   setFirstOpen: any
}

export function Homepage({ serviceOn, backPage, servicePageData, changePage, isOpen, onOpen, onClose, firstOpen, setFirstOpen  }: HomepageProps) {
   // useEffect( () => alert('Site em construção 🚜'),[])
   // const [background, setBackground] = useState('bg1')
   // const backgrounds = ['bg1', 'bg2', 'bg3']

   const [isModalOpen, setIsModalOpen] = useState(true)
   const [changeIt, setChangeIt] = useState(false)

   // useEffect( () => {
   //    console.log('changeitttt')
   //    if (changeIt === true) {
   //       setTimeout(() => { changePage(lines[0].lineData)  }, 3000)
   //    }
   // }, [changeIt])

   const backgroundsList = [
      { id: 1, image: 'static/img/popup/coliseu.png' },
      { id: 2, image: 'static/img/popup/pizzeria.png' },
      { id: 3, image: 'static/img/popup/positano.png' },
      { id: 4, image: 'static/img/popup/ristorant.png' },
      { id: 5, image: 'static/img/popup/veneza.png' },
   ]

   const [background, setBackground] = useState(0)

   const [count, setCount] = useState(0);

   useInterval(() => {
      setCount(count + 1);
      nextBackground()
   }, 3320);

   function nextBackground() {
      if (background < backgroundsList.length - 1) {
         setBackground(background + 1)
      } else {
         setBackground(0)
      }
   }

   function goToItaly() {
      setFirstOpen()
      onClose()
      changePage(lines[0].lineData)
   }


   return (
      <>
         <Container id='#Home' maxW='100vw' bg='clubDark' p='0' m='0' centerContent>
            <Navbar serviceOn={serviceOn} backPage={backPage} />

            {/* <Modal isOpen={isOpen} onClose={onClose} isCentered>

               <ModalContent
                  minW={'50vw'}
                  maxW={['90vw', '80vw', '60vw', '50vw']}
                  minH={'50vh'}
                  p={0}
                  bgImage={backgroundsList[background].image}
                  bgColor='clubDark'
                  bgSize={'cover'}
                  bgPos={'center'}
               >
                  <Flex maxW={'100%'} h='100%' zIndex='0' >

                     <ModalCloseButton color='gray.200' />
                     <ModalBody p={0} h='100%'>

                        <Flex h='100%' w='100%' alignItems='center'>

                           <VStack textAlign={'center'} w='100%' p={8} gap={[40, 28, 28, 28]}>

                              <Flex flexDir={'column'}>

                                 <Heading
                                    fontWeight={400}
                                    color='white'
                                    px={4}
                                    pt={4}
                                    w='100%'
                                    fontSize={['2.2rem']}
                                 >

                                    <b style={{ color: 'white' }}> Obtenha</b> <b style={{ color: '#038040' }}> sua</b> <b>cidadania</b> <b style={{ color: '#CD212A' }}>italiana!</b>
                                 </Heading>
                                 <Text
                                    fontWeight={400}
                                    fontSize='1.2rem'
                                    color='white'
                                    p={[4, 4, 0, 0]}
                                    w='100%'>
                                    Descubra se você tem direito!
                                 </Text>
                              </Flex>

               
                              <Button
                                 bg={'#038040de'}
                                 color='gray.100'
                                 _hover={{ textDecoration: 'none', bgColor: '#CD212Add' }}
                                 onClick={() => { 
                                    goToItaly()
                                 }}
                              >
                                 Clique aqui e saiba mais!
                              </Button>
                           </VStack>

                        </Flex>
                     </ModalBody>
                  </Flex>
               </ModalContent>
            </Modal> */}
            {serviceOn ? <Banner />
               :
               <ServicePage servicePageData={servicePageData} backPage={backPage} />
            }

         </Container>
      </>
   )
}