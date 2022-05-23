import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../layouts/header/Header'
import Sidebar from '../../components/sidebar/sidebar'
import Styles from './search.module.scss'
import UserInfo from '../../components/userInfo'

const search = () => {
  return (
    <>
        <Container className={Styles.searchPageContainer}>
            <Row className={Styles.searchPageGrid}>
                <Col className={Styles.searchPageCol} lg={4}><Sidebar /></Col>
                <Col className={Styles.searchPageCol} lg={8}>
                  <Row><Header /></Row>
                  <Row><UserInfo /></Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default search