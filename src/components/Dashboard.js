import React, { Component } from 'react';
import Question from './Question';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DashBoard extends Component {
  state = {
    activeTab: '1'
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Unanswered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Answered Questions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              {unansweredQuestions.map(qid =>
                <Col key={qid} sm="5" md="4">
                  <Question id={qid}/>
                </Col>
              )}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {answeredQuestions.map(qid =>
                <Col key={qid} sm="6" md="4">
                  <Question id={qid}/>
                </Col>
              )}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

//src https://react-redux.js.org/using-react-redux/connect-mapstate
//also in chirper project we had the same logic
function mapStateToProps ({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
  return {
    unansweredQuestions : Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions
  }
}

DashBoard.propTypes = {
  answeredPolls : PropTypes.array,
  unansweredPolls : PropTypes.array
};

export default connect(mapStateToProps)(DashBoard)
