import ListGroup from 'react-bootstrap/ListGroup';
import { userTypeDefs } from '../../../server/schema/typeDefs/userTypeDefs'
import { useQuery } from '@apollo/client';
import userResolver from '../../../server/schema/resolvers/user';
const { graphql, buildSchema } = require('graphql');

const MyAccount = () => {

    const {loading, data } = useQuery(userTypeDefs);

    const openAuctions = data?.

    auctions = (Array.forEach())

return (
    <>
    <Container fluid className="container">
        <Row className="d-flex justify-content-center"> 
            <h1>Welcome, user </h1>
        </Row>
        <Row className="d-flex justify-content-center">
    <ListGroup className="myBids">
        <ListGroup.Item>BidTest123</ListGroup.Item>
        <ListGroup.Item>BidTest234</ListGroup.Item>
    </ListGroup>
        </Row>
        <Row className="d-flex justify-content-center">
    <ListGroup className="myAuctions">
        <ListGroup.Item>AucTest123</ListGroup.Item>
        <ListGroup.Item>AucTest234</ListGroup.Item>
    </ListGroup>
    </Row>
    </Container>
    </>
);
};

export default MyAccount;