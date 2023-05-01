import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const EditorsInside = () => {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={first}/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={second}/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={third}/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default EditorsInside;