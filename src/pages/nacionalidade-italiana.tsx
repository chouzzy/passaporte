import { useRouter } from "next/router";
import { ServicePage } from "../components/2-Homepage/ServicePage";
import { lines } from "../components/3-Services/Nationality/CidadaniaItalianaData";
import { Navbar } from "../components/1-Navbar";
import { Container } from "@chakra-ui/react";
import { Footer } from "../components/6-Footer";


export default function NacionalidadeItaliana() {

    return (
        <Container id='#Home' maxW='100vw' bg='clubDark' p='0' m='0' centerContent>
            <Navbar serviceOn={false} backPage={undefined}/>
            <ServicePage previousPage="nacionalidade-italiana" servicePageData={lines[0].lineData} />
            <Footer redirectURL='obrigado-whatsapp-cidadania-italiana' />
        </Container>
    )
}