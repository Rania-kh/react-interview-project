import React from 'react'
import '../assets/pages/Home.css'
import '../assets/components/Title.css'
import Mainbar from '../components/Mainbar';
import Footer from '../components/Footer';
import CardWithImage from '../components/CardWithImage';
import SectionHeader from '../components/SectionHeader';
import CardWithImageSmall from '../components/CardWithImageSmall'
import CardWithIcon from '../components/CardWithIcon'
import { Button } from '../components/Button';
import {
    // images
    BG,
    BG1,
    BG2,
    CARD,
    PIC,
    CARD1,
    CARD2,
    // icons
    ARROW,
    LAYER,
    RGB,
    CMYK,
    PLAY
} from '../assets';

function Home() {
    return (
        <div>
            {/* search bar with logo */}
            <Mainbar/>
            <div>
                {/* fist section */}
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
            {/* How it works section */}
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
            {/* third section */}
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
            {/* image with blue background */}
            <div className="blue-background row">
                <img src={PIC} alt="ds" className="img-above"/>
                <div className="align-end">
                    <div className="text-container"> 
                        <p className="title white-text">Hac id pellentesque fermentum lobortis.</p>
                        <p className="gray-text">Nam leo libero pellentesque fringilla etiam diam, quis augue. Urna a sed nunc blandit luctus sit consequat. Nascetur lobortis malesuada cursus porttitor velit adipiscing vulputate commodo. Vulputate et hendrerit at posuere nunc, bibendum mauris suspendisse vitae.</p>
                        <Button buttonStyle="btn--orange" buttonSize="btn--medium">
                            <div className="center row">
                                <p>Become a Seller</p>
                                <img src={ARROW} alt="ds" className="icon"/> 
                            </div>
                        </Button>
                    </div>
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
            <div>
                {/* footer */}
                <Footer/>
            </div>
        </div>
    )
}

export default Home
