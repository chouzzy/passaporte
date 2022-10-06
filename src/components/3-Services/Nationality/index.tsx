import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack, Link } from "@chakra-ui/react";
import { LineItem } from "./LineItem";

interface NationalityProps {
   changePage: (lineData:any) => void
}

export function Nationality({changePage}: NationalityProps) { 
   const lines = [
   {image:'static/img/sefarad.jpg', name:'Sefardita', cols:[4,4,2,2], 
   lineData:{title: 'Título 1 - What is Lorem Ipsum?', text: 'texto 1 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-1.jpg'}},
   {image:'static/img/passport.jpg', name:'Via Direta', cols:[4,4,2,2], 
   lineData:{title: 'Título 2 - What is Lorem Ipsum?', text: 'texto 2 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-2.jpg'}},
]

   const textData = {
      title:<Flex display='inline'> Nacionalidade e <Flex display='inline' color='clubMaldivas'>Cidadania</Flex></Flex>,
      subtitle:
      <Flex display='inline' mx='auto'> Conte conosco para abrir as portas
      <Flex display='inline' color='clubMaldivas'> abrir as portas </Flex>
      de Portugal e da Europa para você, sua família e seus descendentes!
      </Flex>
   }

   return (
      <>
      
      <Flex
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
         p={[4,4,4,12]}
         gap={[4,4,8,12]}
         >
            {lines.map( item => {
               return (
                     <LineItem key={item.name} changePage={changePage} LineImage={item.image} LineName={item.name} lineData={item.lineData} columns={item.cols}/>
               )
            })}
         </SimpleGrid>

      </Flex>
      </>
   )
}