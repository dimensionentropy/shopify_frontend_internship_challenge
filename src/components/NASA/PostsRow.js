import {Col, Row} from "react-bootstrap";
import {Post} from "./Post";
import React from "react";

export function PostsRow({posts}) {
    return (
        <Row>
            {
                posts.map(element => (
                    <Col key={element.id}>
                        <Post post={element} />
                    </Col>
                ))
            }
        </Row>
    )
}