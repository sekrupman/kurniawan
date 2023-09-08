import {Container, Row, Col} from "react-bootstrap"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'

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
                                <img src="../images/reactjs.png" />
                                <h5>React Js</h5>
                              </div>
                              <div className="item">
                                <img src="../images/javascript.png" />
                                <h5>JavaScript</h5>
                              </div>
                              <div className="item">
                                <img src="../images/laravel.png" />
                                <h5>Laravel</h5>
                              </div>
                              <div className="item">
                                <img src="../images/php.png" />
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