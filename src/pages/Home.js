import React from 'react'
import '../assets/pages/Home.css'
import '../assets/components/Title.css'
import Mainbar from '../components/Mainbar';
import CardWithImage from '../components/CardWithImage';
import SectionHeader from '../components/SectionHeader';
import CardWithImageSmall from '../components/CardWithImageSmall'
import CardWithIcon from '../components/CardWithIcon'
import { Button } from '../components/Button';
import BG from '../assets/images/BG.png';
import BG1 from '../assets/images/BG1.png';
import BG2 from '../assets/images/BG2.png';
import CARD from '../assets/images/card.png'
import CARD1 from '../assets/images/card1.png'
import CARD2 from '../assets/images/card2.png'
import ARROW from '../assets/icons/Icosn.png'
import PLAY from '../assets/icons/Icon.png'
import LAYER from '../assets/icons/layer.png'
import RGB from '../assets/icons/rgb.png'
import CMYK from '../assets/icons/cmyk.png'

function Home() {
    return (
        <div>
            <Mainbar/>
            <div>
                <CardWithImage 
                    image={BG} 
                    title="Phasellus scelerisque ultricies mauris faucibus tempus."
                    subTitle=" Massa arcu, integer justo et purus, augue. Consequat adipiscing faucibus turpis sollicitudin risus posuere cursus tellus vitae. Integer tortor in amet blandit porttitor quis urna."
                    >
                        <Button buttonStyle="btn--blue">
                            Register
                        </Button>
                        <Button buttonStyle="btn--outline">
                        <div className="center row">
                            <p>Watch Video </p>
                            <img src={PLAY} alt="ds" className="icon"/> 
                        </div>
                        </Button>
                </CardWithImage>
            </div>
            <div>
                <SectionHeader 
                    title="How it Works"
                    subTitle="Sem ut velit sit hendrerit amet, ultrices suspendisse. Consectetur eu, molestie ac in neque id. Ultrices adipiscing at porttitor et laoreet sed"
                />
                <div className="row center">
                    <CardWithImageSmall 
                        image={CARD1}
                        title="Et ac quam nunc condimentum vitae sed urna ac."
                        subTitle="Nec nulla id eget dolor adipiscing ipsum et, 
                        dignissim. Tellus enim ultrices vitae sit aenean 
                        laoreet rutrum purus. In platea ut lorem tincidunt 
                        elit vulputate"
                        />
                    <CardWithImageSmall 
                        image={CARD}
                        title="Nisl amet urna, a dolor adipiscing."
                        subTitle="Morbi at sed quis libero morbi fames elit. Eleifend 
                        fermentum purus quis pharetra nibh turpis. 
                        Mattis sed est a risus a vitae cursus elit in."
                        />
                    <CardWithImageSmall 
                        image={CARD2}
                        title="In scelerisque sem nisl, varius mauris."
                        subTitle="Amet netus mauris fermentum volutpat nibh 
                        ultrices id dictum viverra. Nunc ac mauris lorem 
                        felis, montes, amet pellentesque mauris. Mi morbi 
                        sit aliquet integer aliquam volutpat tortor ut."
                        />
                    </div>
            </div>
            <div>
                <CardWithImage 
                    image={BG1}
                    title="Example of How CRM system works"
                    subTitle="Enim quam lobortis lectus accumsan at. Risus at magna habitasse nisi, a leo tellus fames gravida. Leo praesent diam aliquet faucibus amet. Sit tempor, at viverra cras at elit phasellus. Morbi volutpat sed nisl accumsan scelerisque consectetur."
                    >
                </CardWithImage>
            </div>
            <div>
            <SectionHeader 
                    title="What problems does our system solve"
                    subTitle="Sapien ut sodales vel massa sociis vitae tortor gravida. Arcu nisl pulvinar scelerisque 
                    risus velit semper. Amet in morbi felis, nisl in habitasse et. Ante quisque egestas 
                    arcu morbi neque varius pretium sed velit."
                />
                <div className="row center">
                    <CardWithIcon 
                        image={LAYER}
                        title="In scelerisque sem nisl, varius mauris."
                        subTitle="Amet netus mauris fermentum volutpat nibh 
                        ultrices id dictum viverra. Nunc ac mauris lorem 
                        felis, montes, amet pellentesque mauris. Mi morbi 
                        sit aliquet integer aliquam volutpat tortor ut."
                        />
                    <CardWithIcon 
                        image={RGB}
                        title="In scelerisque sem nisl, varius mauris."
                        subTitle="Amet netus mauris fermentum volutpat nibh 
                        ultrices id dictum viverra. Nunc ac mauris lorem 
                        felis, montes, amet pellentesque mauris. Mi morbi 
                        sit aliquet integer aliquam volutpat tortor ut."
                        />
                    <CardWithIcon 
                        image={CMYK}
                        title="In scelerisque sem nisl, varius mauris."
                        subTitle="Amet netus mauris fermentum volutpat nibh 
                        ultrices id dictum viverra. Nunc ac mauris lorem 
                        felis, montes, amet pellentesque mauris. Mi morbi 
                        sit aliquet integer aliquam volutpat tortor ut."
                        />
                </div>
            </div>
            <div>
                <CardWithImage 
                    image={BG2}
                    title="Iaculis fusce leo odio condimentum."
                    subTitle="Eget scelerisque diam vulputate vitae, vitae mauris feugiat mauris. Sed ipsum amet eleifend natoque nisl, enim mauris faucibus. Sed non dapibus consectetur facilisis sit dui."
                    >
                    <Button buttonStyle="btn--blue">
                        <div className="center row">
                            <p>Registration</p>
                            <img src={ARROW} alt="ds" className="icon"/> 
                        </div>
                    </Button>
                </CardWithImage>
            </div>
        </div>
    )
}

export default Home
