import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface ServicePageProps {
   servicePageData:{
      title:string,
      text:string,
      serviceImage:string
   }
   backPage(): any
}

export function ServicePage( {servicePageData, backPage}:ServicePageProps) {
   
   return (
      <Flex w='100%' mt={24} flexDir='column' bg='gray.50' alignItems='center'>

         <Flex w='100%' bg='clubDark' p={4}> 
            <Text mx='auto' color='gray.50' fontSize='1.6rem' fontWeight='300'> {servicePageData.title}</Text>
         </Flex>

         <Flex w='100%' flexDir={['column','column','row', 'row']} alignItems='center'>
            <Flex w={['100%','100%','50%','50%']} h='100%' p={[4,12,12,16]} bg='clubAqua' justifyContent='center'>
               <Image src={servicePageData.serviceImage} boxSize={['400px']} objectFit='cover' />
            </Flex>
            <Flex w='100%' flexDir='column' h='100%'>
               <VStack h='100%' gap={6} p={[4,12,12,24]}>
                  <Heading fontWeight='400'> {servicePageData.title} </Heading>
                  <Text> {servicePageData.text}</Text>
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
               </VStack>
            </Flex>

         </Flex>
      </Flex>
   )
}