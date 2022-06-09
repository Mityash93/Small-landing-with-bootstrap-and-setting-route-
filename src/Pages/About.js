import React, { Component } from 'react'
import { Container, Nav, Col, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
          <Tab.Container 
          id='ledt-tabs-example' defaultActiveKey='first'>
              <Row>
                  <Col sm={3}>
                      <Nav variant='pills' 
                      className='flex-column mt-2'>
                        <Nav.Item>
                            <Nav.Link style={{cursor: 'pointer'}} eventKey='first'>Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{cursor: 'pointer'}} eventKey='second'>Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{cursor: 'pointer'}} eventKey='third'>Programming</Nav.Link>
                        </Nav.Item>
                      </Nav>
                  </Col>
                  <Col sm={9}>
                      <Tab.Content className='mt-3'>
                          <Tab.Pane eventKey='first'>
                            <img 
                            width='100%'
                            height='100%'
                            src='https://cdn.sanity.io/images/599r6htc/localized/7e69ee54e0ffd0e3e3ea67c66847b9ad5b9accaa-1600x929.png?w=1200&q=70&fit=max&auto=format' alt='1'/>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt totam natus quod ex ullam officia fuga aperiam sint a.</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey='second'>
                            <img 
                            width='100%'
                            height='100%'
                            src='https://images.ctfassets.net/ooa29xqb8tix/2IwSz500ZOmoyWWCoc28as/16c9a0ca05d3b125c9df82e0d6522718/DraggedImage.jpeg' alt='2'/>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt totam natus quod ex ullam officia fuga aperiam sint a.</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey='third'>
                            <img 
                            width='100%'
                            height='100%'
                            src='https://camo.githubusercontent.com/a0345f3e46118e06aefbaf91683881a0481d5337f5723ffc6f75d9602541abbc/68747470733a2f2f63646e2e6275696c6465722e696f2f6170692f76312f696d6167652f617373657473253246594a494762346930316a7677305352644c3542742532463766626534383164323064373463656538323765653732353662333761373336' alt='3'/>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt totam natus quod ex ullam officia fuga aperiam sint a.</p>
                          </Tab.Pane>
                      </Tab.Content>
                  </Col>
              </Row>
          </Tab.Container>
      </Container>
    )
  }
}
