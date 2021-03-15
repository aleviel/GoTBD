import {Col, Row} from "reactstrap";
import React from "react";

const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md={{size: 6, offset: 0}}>
                {left}
            </Col>
            <Col md={{size: 6, offset: 0}}>
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;