import React, {useState, useEffect} from "react";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {Heart, HeartFill} from "react-bootstrap-icons";

export function Post({post}) {

    const [postToShow, setPostToShow] = useState(post);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setPostToShow(post);
    }, [post])

    function onLoadImage() {
        setImageLoaded(true);
        window.scrollTo(0, document.body.scrollHeight);
    }

    function likePost() {
        post.liked = !post.liked;
        setPostToShow({...post});
    }

    return (
        <Card>
            {
                imageLoaded ?  "" : <Spinner animation="border" />
            }
            <Card.Img style={imageLoaded ? {} : {visibility:  "hidden" }} src={postToShow.url} onLoad={onLoadImage} />
            <Card.Body>
                <Card.Title>{postToShow.title}</Card.Title>
                <Container>
                    <Row>
                        <Col>
                            <Button variant={"outline-light"} onClick={likePost}>
                                {post.liked ? <HeartFill color={"red"}/> :
                                    <Heart color={"red"}/>
                                }
                            </Button>
                        </Col>
                        <Col>
                            {postToShow.date}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}