import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, Text, VStack, useDisclosure, useInterval } from "@chakra-ui/react";

import Head from "next/head";
import { useEffect, useState } from "react";
import { InitialHome } from "../components/2-Homepage";
import { Homepage } from "../components/2-Homepage/Homepage";
import { Services } from "../components/3-Services";
import { Footer } from "../components/6-Footer";
import WhatsButton from "../components/WhatsButton";
import { lines } from "../components/3-Services/Nationality/CidadaniaItalianaData";


export default function Home() {

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const [firstOpen, setFirstOpen] = useState(true)

  const backgroundsList = [
    { id: 1, image: 'static/img/popup/coliseu.jpg' },
    { id: 2, image: 'static/img/popup/pizzeria.jpg' },
    { id: 3, image: 'static/img/popup/positano.jpg' },
    { id: 4, image: 'static/img/popup/ristorant.jpg' },
    { id: 5, image: 'static/img/popup/veneza.jpg' },
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
  

  function HomeBase() {

    return (
      <>
        <InitialHome changePage={changePage} serviceOn={true} isOpen={firstOpen} onOpen={onOpen} onClose={onClose} firstOpen={firstOpen} setFirstOpen={setFirstOpen} />
       
        <Services changePage={changePage} />
      </>
    )
  }
  const [page, setPage] = useState(HomeBase);


  function changePage(lineData) {
    setPage(ServiceItem(lineData))
  }
  function backPage() {
    setPage(HomeBase)
  }

  function ServiceItem(lineData?) {
    return (
      <Homepage servicePageData={lineData} backPage={backPage} serviceOn={false} isOpen={false} onOpen={onOpen} onClose={onClose} firstOpen={false} setFirstOpen={setFirstOpen} />
    )
  }

  return (
    <>
      <Head>
        <title>Clube do Passaporte</title>
      </Head>
      <Modal isOpen={firstOpen} onClose={() =>  {setFirstOpen(false)}} isCentered>
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

              <ModalCloseButton color='gray.200'/>
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
                        setFirstOpen(false)
                        changePage(lines[0].lineData)
                      }}
                    >
                      Clique aqui e saiba mais!
                    </Button>
                  </VStack>

                </Flex>
              </ModalBody>
            </Flex>
          </ModalContent>
        </Modal>
      {page}
      <Footer />
      <WhatsButton />
      {/* // Homepage basica até o Como conseguir a Cidadania Portuguesa? - botão descubra se é elegivel indo para contacts
    // serviços (nacionalidade e visto)
    // feedbacks
    // About com nossa missão e clube do passaporte é uma empresa */}
    </>
  )
}
