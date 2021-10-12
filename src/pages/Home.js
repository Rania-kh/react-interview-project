import React from 'react'
import '../assets/pages/Home.css'
import Mainbar from '../components/Mainbar';
import CardWithImage from '../components/CardWithImage';
import { Button } from '../components/Button';
import BG from '../assets/images/BG.png';
import BG1 from '../assets/images/BG1.png';
import BG2 from '../assets/images/BG2.png';

function Home() {
    return (
        <div>
            <Mainbar/>
            <CardWithImage 
                image={BG} 
                title="Phasellus scelerisque ultricies mauris faucibus tempus."
                subTitle=" Massa arcu, integer justo et purus, augue. Consequat adipiscing faucibus turpis sollicitudin risus posuere cursus tellus vitae. Integer tortor in amet blandit porttitor quis urna."
                >
                    <Button buttonStyle="btn--blue">
                        Register
                    </Button>
                    <Button buttonStyle="btn--outline">
                        Watch Video
                    </Button>
            </CardWithImage>
            <CardWithImage 
                image={BG1}
                title="Example of How CRM system works"
                subTitle="Enim quam lobortis lectus accumsan at. Risus at magna habitasse nisi, a leo tellus fames gravida. Leo praesent diam aliquet faucibus amet. Sit tempor, at viverra cras at elit phasellus. Morbi volutpat sed nisl accumsan scelerisque consectetur."
                >
            </CardWithImage>
            <CardWithImage 
                image={BG2}
                title="Iaculis fusce leo odio condimentum."
                subTitle="Eget scelerisque diam vulputate vitae, vitae mauris feugiat mauris. Sed ipsum amet eleifend natoque nisl, enim mauris faucibus. Sed non dapibus consectetur facilisis sit dui."
                >
                <Button buttonStyle="btn--blue">
                    Registration
                </Button>
            </CardWithImage>
        </div>
    )
}

export default Home
