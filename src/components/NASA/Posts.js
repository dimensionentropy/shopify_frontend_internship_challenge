import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Post} from "./Post";

const postsToLoadEachTime = 3;

export function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_NASA_API_KEY + "&count=" + postsToLoadEachTime)
            .then(res => res.json())
            .then(res => {
                let i = 0;
                setPosts(res.map((element) => {
                    return {
                        id: i++,
                        title: element.title,
                        url: element.url,
                        hdUrl: element.hdurl
                    }
                }));
            })
    }, [])

    return (
        <Container>
            <Row>
            {
                posts.map(element => (
                    <Col key={element.id}>
                        <Post post={element} />
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}