import { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

import bannerImg from '../../images/banner.png';


export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate =['Web Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random()*100)
    const period = 2000

    const scrollToContact = () => {
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    useEffect(()=> {
        let ticker = setInterval(()=> {
            tick()
        }, delta)
        return () =>{clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting&&updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum +1)
            setDelta(500)
        }
     }
    return(
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12}md={6}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>{`Hi I'm Ignatius Kurniawan`}<div className='wrap'>{text}</div></h1>
                        <p>I'm a web developer passionate about creating beautiful and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I turn ideas into digital experiences. Explore my projects below, and let's build something amazing together.</p>
                    <button onClick={scrollToContact} style={{
                            background: "transparent",
                            border: "none",
                            color:'white'
                    }}>Let's connect<ArrowRightCircle size={40} /></button>
                    </Col>
                    <Col xs={12}md={6} xl={5}>
                    <img src={bannerImg} alt="Banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}