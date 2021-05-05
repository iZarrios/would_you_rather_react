//src https://naveenda.medium.com/creating-a-custom-404-notfound-page-with-react-routers-56af9ad67807
//Also tyler when making chirper app
import React from "react"
import PropTypes from "prop-types"
import {Button, Card, CardBody, CardHeader} from 'reactstrap';
import CardTitle from "reactstrap/es/CardTitle";

const NotFound = ({ history }) => (
  <Card>
    <CardHeader>404</CardHeader>
    <CardBody>
      <CardTitle>Page Not Found</CardTitle>
      <Button size="small" color="primary" onClick={() => history.push("/")}>
        Bye!
      </Button>
    </CardBody>
  </Card>
);

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default NotFound
