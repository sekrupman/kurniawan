import { Col, Tab, Container, Nav, Row } from "react-bootstrap";
import { Card } from "./card";

//IMPORT IMAGES
import testbg from '../../images/testproject.jpeg'
import project1 from '../../images/project1.jpg'


export const Project = () => {

    const projects1 = [
        {
          title: 'NextJs with NodeJs',
          description: 'Description for Project 1',
          imgUrl:project1,
          linkUrl: 'https://2200872-32-han-eslint-platinum-o0j3epxi1-sekrupman.vercel.app/'
        },
        {
          title: 'Project 2',
          description: 'Description for Project 2',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Project 3',
          description: 'Description for Project 3',
          imgUrl:  testbg,
          linkUrl: '#'
        },
      ];
    const projects2 = [
        {
          title: 'Project 4',
          description: 'Description for Project 4',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Project 5',
          description: 'Description for Project 5',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Project 6',
          description: 'Description for Project 6',
          imgUrl:  testbg,
          linkUrl: '#'
        },
      ];
    const projects3 = [
        {
          title: 'Project 7',
          description: 'Description for Project 7',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Project 8',
          description: 'Description for Project 8',
          imgUrl:  testbg,
          linkUrl: '#'
        },
        {
          title: 'Project 9',
          description: 'Description for Project 9',
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