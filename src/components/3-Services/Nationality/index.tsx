import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack, Link } from "@chakra-ui/react";
import { LineItem } from "./LineItem";

interface NationalityProps {
   changePage: (lineData:any) => void
}

export function Nationality({changePage}: NationalityProps) { 
   const lines = [
   {image:'static/img/nat-1.jpg', name:'Serviço 1', cols:[4,4,2,2], 
   lineData:{title: 'Título 1 - What is Lorem Ipsum?', text: 'texto 1 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-1.jpg'}},
   {image:'static/img/nat-2.jpg', name:'Serviço 2', cols:[4,4,2,2], 
   lineData:{title: 'Título 2 - What is Lorem Ipsum?', text: 'texto 2 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-2.jpg'}},
   {image:'static/img/nat-3.jpg', name:'Serviço 3', cols:[4,4,2,2], 
   lineData:{title: 'Título 3 - What is Lorem Ipsum?', text: 'texto 3 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-3.jpg'}},
   {image:'static/img/nat-4.jpg', name:'Serviço 4', cols:[4,4,2,2], 
   lineData:{title: 'Título 4 - What is Lorem Ipsum?', text: 'texto 4 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-4.jpg'}},
   {image:'static/img/nat-5.jpg', name:'Serviço 5', cols:[4,4,2,2], 
   lineData:{title: 'Título 5 - What is Lorem Ipsum?', text: 'texto 5 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-5.jpg'}},
   {image:'static/img/nat-6.jpg', name:'Serviço 6', cols:[4,4,2,2], 
   lineData:{title: 'Título 6 - What is Lorem Ipsum?', text: 'texto 6 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-6.jpg'}},
   {image:'static/img/nat-7.jpg', name:'Serviço 7', cols:[4,4,2,2], 
   lineData:{title: 'Título 7 - What is Lorem Ipsum?', text: 'texto 7 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-7.jpg'}},
   {image:'static/img/nat-8.jpg', name:'Serviço 8', cols:[4,4,2,2], 
   lineData:{title: 'Título 8 - What is Lorem Ipsum?', text: 'texto 8 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage:'static/img/nat-8.jpg'}},
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
         columns={8}
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