import React, { useState } from "react";
import { Row, Button, Card, Form } from "react-bootstrap";
import moment from "moment";
import "moment/locale/tr";

function Comments() {
  const [text, setText] = useState("");
  const changeText = (text) => setText(text);

  const [comments, setComments] = useState([
    {
      text: "Deneme yorum içeriği",
      date: new Date(),
    },
    {
      text: "Deneme yorum içeriği",
      date: new Date(),
    },
  ]);
  const addComment = (text) => {
    changeText("");
    setComments((comments) => [...comments, { text, date: new Date() }]);
  };
  const removeComment = (index) => {
    const copyComments = [...comments];
    copyComments.splice(index, 1);
    setComments(copyComments);
  };

  return (
    <Row id="comments">
      <hr />
      <Row>
        <h2 className="about-header">Yorumlar</h2>
      </Row>
      <Row>
        {comments.map((comment, index) => (
          <Card style={{ margin: 5 }} key={index}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {"Ziyaretçi - " + moment(comment.date).format("LLL")}
                &nbsp;&nbsp;
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeComment(index)}
                >
                  Sil
                </Button>
              </Card.Subtitle>
              <Card.Text className="comments-text">{comment.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Yorum Ekle</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={text}
            onChange={(e) => changeText(e.target.value)}
          />
          <br />
          <Button variant="primary" size="lg" onClick={() => addComment(text)}>
            Yorum Ekle
          </Button>
        </Form.Group>
      </Row>
    </Row>
  );
}

export default Comments;
