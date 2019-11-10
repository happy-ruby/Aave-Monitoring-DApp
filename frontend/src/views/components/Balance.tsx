import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

// Components
import Token from './Token'

interface Props {
  token: string
}

const Balance = (props: Props) => {
  return (
    <Col className="pb-5 balance" lg={6} xl={4}>
      <Card className="shadow">
        <CardHeader>
          <Row className="align-items-center">
            <Col>
              <Token size={30} token={props.token} />
              <span className="ml-2 font-weight-bold">$0.00</span>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <p className="details">
            Deposit (APR): <span className="float-right text-gray">0.00%</span>
          </p>
          <hr className="my-3" />
          <p className="details">
            Stable Borrow (APR):{' '}
            <span className="float-right text-gray">0.00%</span>
          </p>
          <hr className="my-3" />
          <p className="details">
            Variable Borrow (APR):{' '}
            <span className="float-right text-gray">0.00%</span>
          </p>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Balance
