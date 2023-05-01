import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from '../EditorsInside/EditorsInside';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { title, category_id, image_url, details } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft>  All News in this Category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInside></EditorsInside>
        </div>
    );
};

export default News;