import Page from 'components/Page';
import Typography from 'components/Typography';
import React from 'react';
import "./demo.css";
import {
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';
import RatingStars from './RatingStars';
const Feedback = () => {
    return (
        <Page title="Feed back" breadcrumbs={[{ name: 'Feed back', active: true }]}>
            <Row>
                <Col xl={12} lg={12} md={12}>
                    <Card>
                        <CardBody>
                            <RatingStars />
                            {/* <Form>
                                <FormGroup>
                                    <p><strong>Q1</strong>. Your overall experience with us ?</p>
                                    <Label>
                                        <Input type="radio" name="one" value="a" />Mary was born in England
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <Input type="radio" name="one" value="b" />Mary, who is English, was born in London</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <Input type="radio" name="one" value="c" />English Mary was born in London </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <Input type="radio" name="one" value="d" />London Mary is English born</Label>
                                    <p><strong>Q2</strong>: Mary is English.She was born in London</p>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <Input type="radio" name="two" value="a" />Mary was born in England</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <Input type="radio" name="two" value="b" />Mary, who is English, was born in London</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <Input type="radio" name="two" value="c" />English Mary was born in London</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        <Input type="radio" name="two" value="d" />London Mary is English born</Label>
                                    <input type="submit" />
                                </FormGroup>
                            </Form> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Alert color="success">
                                <Typography type="h4" className="alert-heading">
                                    Well done!
                                </Typography>
                                <Typography>
                                    Aww yeah, you successfully read this important alert message.
                                    This example text is going to run a bit longer so that you can
                                    see how spacing within an alert works with this kind of
                                    content.
                                </Typography>
                                <hr />
                                <Typography className="mb-0">
                                    Whenever you need to, be sure to use margin utilities to keep
                                    things nice and tidy.
                                </Typography>
                            </Alert>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Page>
    );
};

export default Feedback;
