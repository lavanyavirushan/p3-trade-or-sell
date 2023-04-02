import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import myImage from '../src/components/Images/iphone 318.jpeg'
import { Container, Row, Col, Card, Button, ButtonToolbar} from 'react-bootstrap';


function CardComponent({ card }) {
  return (
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src={myImage} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Subtitle>{card.price}</Card.Subtitle>
          <Card.Text>{card.seller}</Card.Text>
          <Card.Text>{card.description}</Card.Text>
          <ButtonToolbar className="justify-content-between">
          <Button variant="primary">Buy Now</Button>
          <Button variant="secondary">Make a Offer</Button>
        </ButtonToolbar>
        </Card.Body>
      </Card>
    </Col>
  );
}

function CardRow({ cards }) {
  return (
    <Container>
      <Row className="justify-content-center">
        {cards.map((card) => (
          <CardComponent key={card.id} card={card} />
        ))}
      </Row>
    </Container>
  );
}

function App() {
  const cards = [
    {
      id: 1,
      title: 'Iphone 13',
      price: '$1099.00',
      seller: 'Mike B',
      description: 'I am selling a iphone 13 max. Comes with a Open box.',
      image: {myImage},
    },
    {
      id: 2,
      title: 'Nike Shirt',
      price: '$25',
      seller: 'Jimmy',
      description: 'Worn a couple of times, size medium, serious inquiries only.',
      image: 'https://picsum.photos/300/200?random=2',
    },
    {
      id: 3,
      title: 'Beats Headphones',
      price: '$250',
      seller: 'Emily',
      description: 'Working condition. I have had these for a couple years and no longer use them.',
      image: 'https://picsum.photos/300/200?random=1',
    },
    {
      id: 4,
      title: 'Ps5',
      price: '$275',
      seller: 'Felix',
      description: 'I am a reseller so I have an extra to sell. I am selling for half the price brand new.',
      image: 'https://picsum.photos/300/200?random=2',
    },
    {
      id: 5,
      title: 'BMW',
      price: '$70,000',
      seller: 'Jacob',
      description: 'Used car with only 35,000km on it. Clean interior looking for a serious buyer!',
      image: 'https://picsum.photos/300/200?random=1',
    },
    {
      id: 6,
      title: 'Rayban Glasses',
      price: '$100',
      seller: 'Laura',
      description: 'brand new glasses, never worn. Comes with the box and original packaging.',
      image: 'https://picsum.photos/300/200?random=2',
    },
  
  ];

  return <CardRow cards={cards} />;
}












export default App;
