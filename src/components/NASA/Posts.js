import React, {useEffect, useState} from "react";
import {Container, Row, Button} from "react-bootstrap";
import {PostsRow} from "./PostsRow";

const postsToLoadEachTime = 3;

export function Posts() {

    const [posts, setPosts] = useState([]);
    const [postsCount, setPostsCount] = useState(0);

    function loadPosts() {
        return fetch("https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_NASA_API_KEY + "&count=" + postsToLoadEachTime)
            .then(res => res.json())
            .then(res => {
                let i = postsCount;
                return res.map((element) => {
                    let post = {
                        id: i++,
                        title: element.title,
                        url: element.url,
                        hdUrl: element.hdurl,
                        date: element.date,
                        liked: false
                    }

                    setPostsCount(i);

                    return post;
                });
            });
    }

    useEffect(() => {
        loadPosts()
            .then(newPosts => {
                setPosts([newPosts]);
            })
    }, [])

    function loadMorePosts() {
        loadPosts()
            .then(newPosts => {
                setPosts(posts.concat([newPosts]));
            })
    }

    return (
        <Container>
            {
                posts.map((postsRow, index) => (
                    <PostsRow posts={postsRow} key={index} />
                ))
            }
            <Row>
                <Button style={{marginTop: "25px", marginBottom: "25px"}} variant="outline-dark" onClick={loadMorePosts}>Load More</Button>
            </Row>
        </Container>
    )
}