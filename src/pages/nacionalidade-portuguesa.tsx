import { Navbar } from "../components/1-Navbar";
import { Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { nacionalidadePortuguesa } from "./api/nacionalidadesData";
import { useState } from "react";
import { ServicePage } from "../components/2-Homepage/ServicePage";
import { Footer } from "../components/6-Footer";

interface nationalityService {
    image: string
    name: string
    cols: number[]
    servicePageData: {
        mode?: string
        title: string
        text: JSX.Element | string
        serviceImage: string
    }
}

export default function NacionalidadePortuguesa() {

    const [showMenu, setShowMenu] = useState(true)
    const [servicePage, setServicePage] = useState<nationalityService>()

    function selectNationality(item: nationalityService) {
        setShowMenu(false);
        setServicePage(item)
    }

    return (
        <Container id='#Home' maxW='100vw' minH='100vh' bg='clubDark' p='0' m='0' centerContent>

            <Navbar serviceOn={false} backPage={undefined} />

            {showMenu ?
                <Flex
                    id='#visa'
                    w='100%'
                    minH='100vh'
                    bgGradient='linear(135deg,#0f0f0f, #343434, #0f0f0f)'
                    color='gray.50'
                    fontFamily='Heebo'
                    bgRepeat='repeat-x'
                    flexDir="column"
                    justifyContent='center'
                    py={8}
                    px={2}
                    pt={[32, 32, 24, 24]}
                >
                    <VStack
                        w='100%'
                        textAlign={'center'}
                    >
                        <Heading
                            fontWeight='300'
                            textAlign='center'
                            mt={4}
                            mb={2}
                            textTransform='uppercase'
                        >
                            {nacionalidadePortuguesa.title}
                        </Heading>


                        <SimpleGrid
                            textAlign='center'
                            columns={[1, 1, 4, 4]}
                            py={[12, 4, 4, 12]}
                            gap={[2, 8, 8, 12]}
                        >
                            {nacionalidadePortuguesa.types.map((item) => {
                                return (
                                    <Flex onClick={() => selectNationality(item)} flexDir={'column'} key={item.image} gap={4}>
                                        <Image
                                            src={item.image}
                                            mx='auto'
                                            _hover={{
                                                outline: '1px solid #4ca7a1',
                                                transition: '400ms',
                                                boxShadow: 'dark-lg',
                                                cursor: 'pointer'
                                            }}
                                            boxSize={[32, 40, 40, 48]}
                                            borderRadius={'100%'}
                                            objectFit='cover'
                                            alt={item.name}
                                        />
                                        <Text > {item.name} </Text>
                                    </Flex>
                                )
                            })}
                        </SimpleGrid>
                    </VStack>

                </Flex>
                :
                <>
                    <ServicePage previousPage="nacionalidade-portuguesa" servicePageData={servicePage.servicePageData} />
                    <Footer />
                </>
            }

        </Container >
    )
}