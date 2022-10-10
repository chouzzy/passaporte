import { Flex, GridItem, Image, Link, Text } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

interface LineItemProps {
   LineImage:string,
   LineName:any,
   columns:number[],
   lineData:{
      title:any,
      text:any,
      serviceImage:any
   }
   changePage: (lineData:any) => void
}


export function LineItem({LineImage, LineName, columns, lineData, changePage}:LineItemProps) { 

   function passLineData() {
      changePage(lineData)
   }
   return (
         
      <GridItem w='100%' colSpan={columns} cursor='pointer'>
         <Slink to={'#Home'}>
            <GridItem onClick={passLineData} mx='auto' w='100%' h='100%'
             bgSize='cover' bgPosition='center' py={2}>
               <Image src={LineImage} mx='auto' _hover={{border:'1px solid #4ca7a1', transition:'400ms', boxShadow:'dark-lg'}} height={[32,40,40,40]} width={[32,40,40,40]} borderRadius={'100%'}/>
                  
               {LineName}

            </GridItem>
         </Slink>
      </GridItem>
   )
}