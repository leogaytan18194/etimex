import React from 'react'
import { VinosStyles } from '../../../styles/Styles'
import Header from '../../../components/segmentos/Header'
import Container from '../../../components/segmentos/Container'
import HeroContainer from '../../../components/segmentos/HeroContainer'
import Footer from '../../../components/segmentos/Footer'
import Container2 from '../../../components/segmentos/Container2'

const Vinos = () => {
    const data = [
        { id: 1, name: 'Elemento 1', description: 'Descripción del elemento 1' },
        { id: 2, name: 'Elemento 2', description: 'Descripción del elemento 2' },
        { id: 3, name: 'Elemento 3', description: 'Descripción del elemento 3' },
        { id: 4, name: 'Elemento 4', description: 'Descripción del elemento 4' },
      ];

    return (
        <VinosStyles>
            <Header
                logo={"/assets/svg/logo.svg"}
            />
            <HeroContainer
                backgroundImage={"/assets/vinos-y-licores/hVinos2.png"}
                text={"Se único, se audaz"}
            />
            <Container
                inverseOrder={false}
                title={"Vinos"}
                subtitle={"Disponoble en papel"}
                icon1={"/assets/svg/bond.svg"}
                icon1Text={"Bond"}
                icon2={"/assets/svg/shrek.svg"}
                icon2Text={"Twvek"}
                listTitle={"En película"}
                listItems={data}
                backgroundImage={"/assets/vinos-y-licores/cards/card1.png"}
            />
             <Container
                inverseOrder={true}
                title={"Vinos"}
                subtitle={"Disponoble en papel"}
                icon1={"/assets/svg/bond.svg"}
                icon1Text={"Bond"}
                icon2={"/assets/svg/shrek.svg"}
                icon2Text={"Twvek"}
                listTitle={"En película"}
                listItems={data}
                backgroundImage={"/assets/vinos-y-licores/cards/card2.png"}
            />
            <Container
                inverseOrder={false}
                title={"Vinos"}
                subtitle={"Disponoble en papel"}
                icon1={"/assets/svg/bond.svg"}
                icon1Text={"Bond"}
                icon2={"/assets/svg/shrek.svg"}
                icon2Text={"Twvek"}
                listTitle={"En película"}
                listItems={data}
                backgroundImage={"/assets/vinos-y-licores/cards/card3.png"}
            />
            {/* <Container2
                inverseOrder={"inverseOrder"}
                title={"title"}
                description={"description"}
                image={"image"}
            /> */}


            <Footer />

        </VinosStyles>
    )
}

export default Vinos
