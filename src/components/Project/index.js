import { Col, Tab, Container, Nav, Row } from "react-bootstrap";
import { Card } from "./card";

//IMPORT IMAGES
import testbg from '../../images/comming-soon.jpg'
import project1 from '../../images/ai.png'
import project4 from '../../images/project1.jpg'
import project2 from '../../images/chat-app.jpg'
import project3 from '../../images/todoApp.jpg'

export const Project = () => {

    const projects1 = [
        {
          title: 'Artificial Intelligence',
          description: 'AI with ReactJs & GroqAI',
          imgUrl:project1,
          linkUrl: 'https://ai-sage-five.vercel.app/'
        },
        {
          title: 'Chat Application',
          description: 'Simple chat application with express and socket.io',
          imgUrl:  project2,
          linkUrl: 'https://simple-app-chat.glitch.me'
        },
        {
          title: 'Todo List Application',
          description: 'Todo List Application with React Redux and Express',
          imgUrl:  project3,
          linkUrl: 'https://mock-test-nrrg1hycz-sekrupman.vercel.app/'
        },
      ];
    const projects2 = [
        {
          title: 'Game Platform',
          description: 'Game Platform with nextJs and node',
          imgUrl:project4,
          linkUrl: 'https://2200872-32-han-eslint-platinum-o0j3epxi1-sekrupman.vercel.app/'
        },
        {
          title: 'Comming Soon',
          description: 'Comming Soon',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Comming Soon',
          description: 'Comming Soon',
          imgUrl:  testbg,
          linkUrl: '#'
        },
      ];
    const projects3 = [
        {
          title: 'Comming Soon',
          description: 'Comming Soon',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Comming Soon',
          description: 'Comming Soon',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Comming Soon',
          description: 'Comming Soon',
          imgUrl:  testbg,
          linkUrl: '#'
        },
      ];
      
    return (
        <div>
            <section className="project" id ='project'>
                <Container>
                    <Row>
                        <Col>
                        <h2>Projects</h2>
                        <p>Explore my web development projects, showcasing creativity and expertise.</p>
<Tab.Container id="project-tabs" defaultActiveKey="first">
    <Nav variant="pills" defaultActiveKey="first">
                         
            <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
    </Nav>
    <Tab.Content>
<Tab.Pane eventKey="first">
    <Row>
        {
        projects1.map((project, index) =>{
            return( 
            <Card
                key={index}
                    {...project}
            />
        )})}
    </Row>
</Tab.Pane>

<Tab.Pane eventKey="second">
<Row>
        {
        projects2.map((project, index) =>{
            return( 
            <Card
                key={index}
                    {...project}
            />
        )})}
    </Row>
</Tab.Pane>
        
<Tab.Pane eventKey="third">
<Row>
        {
        projects3.map((project, index) =>{
            return( 
            <Card
                key={index}
                    {...project}
            />
        )})}
    </Row>
</Tab.Pane>
    </Tab.Content>
</Tab.Container>
                        </Col>
                    </Row>
                </Container>
              </section>
        </div>
    );
}