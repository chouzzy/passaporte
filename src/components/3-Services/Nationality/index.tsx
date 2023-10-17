import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack, Link } from "@chakra-ui/react";
import { LineItem } from "./LineItem";
import { Modal } from "./Modal";
import { Link as Slink } from 'react-scroll'
import { lines } from "./CidadaniaItalianaData";

interface NationalityProps {
   changePage: (lineData: any) => void
}

export function Nationality({ changePage }: NationalityProps) {

   
   const textData = {
      title: <Flex display='inline'> Nacionalidade e <Flex display='inline' color='clubMaldivas'>Cidadania</Flex></Flex>,
      subtitle:
         <Flex display='inline' mx='auto'> Conte conosco para
            <Flex display='inline' color='clubMaldivas'> abrir as portas </Flex>
            de Portugal e da Europa para você, sua família e seus descendentes!
         </Flex>
   }

   return (
      <>

         <Flex
            id='#nationality'
            w='100%'
            fontFamily='Heebo'
            bgRepeat='repeat-x'
            flexDir="column"
            justifyContent='center'
            py={8}
         >
            <Heading fontWeight='300' textAlign='center' mt={4} mb={2} w='100%' textTransform='uppercase'>
               {textData.title}
            </Heading>
            <Flex fontWeight='400' textAlign='center' mb={4} w='100%'>
               {textData.subtitle}
            </Flex>


            <SimpleGrid
               textAlign='center'
               columns={4}
               p={[4, 4, 4, 12]}
               gap={[4, 4, 8, 12]}
            >
               <LineItem key={lines[0].name} changePage={changePage} LineImage={lines[0].image} LineName={lines[0].name} lineData={lines[0].lineData} columns={lines[0].cols} />

               <Modal key={lines[1].name} changePage={changePage} LineImage={lines[1].image} LineName={lines[1].name} lineData={lines[1].lineData} columns={lines[1].cols} />
            </SimpleGrid>

         </Flex>
      </>
   )
}