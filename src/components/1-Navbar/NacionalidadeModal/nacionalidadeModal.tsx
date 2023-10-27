import { Flex, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react"
import { nationalities } from "../NavbarData/navbarData"
import Link from "next/link"


export function NacionalidadeModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {nationalities.map(nationality => {
                return (
                    <MenuItem
                        key={nationality.id}
                        bg='clubBlack'
                        borderRadius={1}
                        borderColor='clubMaldivas'
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                        textTransform='uppercase'
                        _hover={{ bg: 'clubCigar' }}
                    >
                        <Link href={nationality.href}>
                            <Flex _hover={{ color: 'white' }}>
                                <Flex w='2px' bg='clubMaldivas' mr={2} display='inline'></Flex>
                                <Text display='inline'> {nationality.name} </Text>
                            </Flex>
                        </Link>
                    </MenuItem>
                )
            })}

        </>
    )
}