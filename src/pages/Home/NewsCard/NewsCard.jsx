import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { title, author, rating, image_url, details, _id, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>{details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating className='me-2'
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span>{rating?.number}</span>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye className='me-2'></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;