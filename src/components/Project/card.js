import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';

export const Card = ({ title, description, imgUrl, linkUrl }) => {
    return (
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </a>
        </div>
      </Col>
    );
  };