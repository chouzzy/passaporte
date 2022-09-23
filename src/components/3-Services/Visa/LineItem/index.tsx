import { GridItem, Link, Text } from "@chakra-ui/react";

interface LineItemProps {
   LineImage:string,
   LineName:string,
   columns:number[],
   lineData:{
      title:string,
      text:string,
      serviceImage:string
   }
   changePage: (lineData:any) => void
}


export function LineItem({LineImage, LineName, columns, lineData, changePage}:LineItemProps) { 

   function passLineData() {
      changePage(lineData)
   }
   return (
         
         
            <GridItem onClick={passLineData} _hover={{border:'1px solid #4ca7a1', transition:'400ms', boxShadow:'dark-lg'}} cursor='pointer' colSpan={columns} mx='auto' borderRadius={'100%'} w='100%' 
            boxShadow='md'  bgImage={LineImage} bgSize='cover' height={[32,40,40,40]} width={[32,40,40,40]}
            bgPosition='center' position='relative'>

               <Text color='gray.50' position='absolute' w='100%' 
               left='0' right='0' margin='auto' bottom='-10'  fontSize='1em'>
                  {LineName}
               </Text>

            </GridItem>
   )
}