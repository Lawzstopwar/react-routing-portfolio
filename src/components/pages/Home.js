import React from "react";
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profileImage from "../images/profile.image.jpg";



function WithHeaderStyledExample() {
  return (
    <Card className="home-card">
      <Card.Header as="h3">Home Page</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src= {profileImage}style={{ width: '18rem' }} />
      <Placeholder xs={12} bg="success" />
        <Card.Title>Project Title :  React Portolio</Card.Title>
        <Placeholder xs={12} bg="primary" />
        <Card.Text> Name :  Lawrence Stopwar</Card.Text>
        <Placeholder xs={12} bg="danger" />
        <Button variant="Github Page">https://github.com/Lawzstopwar/react-routing-portfolio/settings</Button>
        <Placeholder xs={12} bg="success" />
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;