import React, {useState, useEffect} from "react";
import {Card} from "react-bootstrap";

export function Post({post}) {

    const [postToShow, setCardToShow] = useState(post);

    useEffect(() => {
        setCardToShow(post);
    }, [post])

    return (
        <Card>
            <Card.Img src={postToShow.url} />
            <Card.Body>
                <Card.Title>{postToShow.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}