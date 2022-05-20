import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../layouts/header/Header'
import Sidebar from '../../components/sidebar'
import Styles from './search.module.scss'

const search = () => {
  return (
    <>
        <Header />
        <Container className={Styles.searchPageContainer}>
            <Row className={Styles.searchPageGrid}>
                <Col lg={4}><Sidebar /></Col>
                <Col lg={8}></Col>
            </Row>
        </Container>
    </>
  )
}

export default search