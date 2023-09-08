import {Container, Row, Col} from "react-bootstrap"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'

//IMPORT images
import react from '../../images/reactjs.png'
import javascript from '../../images/javascript.png'
import laravel from '../../images/laravel.png'
import php from '../../images/php.png'

export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                            As a web developer, I possess a diverse set of skills that enable me to create exceptional digital experiences.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                              <div className="item">
                                <img src={react} />
                                <h5>React Js</h5>
                              </div>
                              <div className="item">
                                <img src={javascript} />
                                <h5>JavaScript</h5>
                              </div>
                              <div className="item">
                                <img src={laravel} />
                                <h5>Laravel</h5>
                              </div>
                              <div className="item">
                                <img src={php} />
                                <h5>PHP</h5>
                              </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}