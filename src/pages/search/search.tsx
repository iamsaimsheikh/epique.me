import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../layouts/header/Header'
import Sidebar from '../../components/sidebar/sidebar'
import Styles from './search.module.scss'

const search = () => {
  return (
    <>
        <Container className={Styles.searchPageContainer}>
            <Row className={Styles.searchPageGrid}>
                <Col className={Styles.searchPageCol} lg={4}><Sidebar /></Col>
                <Col className={Styles.searchPageCol} lg={8}>
                  <Row><Header /></Row>
                  <Row></Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default search