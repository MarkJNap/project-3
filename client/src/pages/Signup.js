import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function Signup() {
  return (
    <section className="">
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550, height: 500 }}>
          <Header as="h2" color="blue" textAlign="center">
            Create an account
          </Header>
          <Form size="large">
            <Segment stacked textAlign="left">
              <Form.Input
                fluid
                label="Username"
                icon="user"
                iconPosition="left"
                placeholder="User"
              />
              <Form.Input
                fluid
                label="Email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                label="Password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button color="green" size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Login Here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </section>
  );
}
