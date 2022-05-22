import React, {useState} from 'react'
import {Row, Col } from 'react-bootstrap'
import Styles from './sidebar.module.scss'
import DefaultUserImage from '../../assets/user.png'

interface IState {
  person : {
    f_name: string,
    l_name: string,
    gender: string,
    age: number
  }[]
}

const Sidebar = () => {

  const [inputText, setInputText] = useState<string>('')

  const [results, setResults] = useState<IState['person']>([])

  const [people, setPeople] = useState<IState['person']>([
    { 
      f_name:"saim",
      l_name: "Sualeh",
      gender: "Male",
      age: 22
    },
    { 
      f_name:"mark",
      l_name: "DeBlanc",
      gender: "Male",
      age: 23
    },
    { 
      f_name:"jennifer",
      l_name: "Houstoun",
      gender: "Male",
      age: 23
    }
  ]);

  const inputTextHandler = (name:string) => {
    setInputText(name)
    if(name === '') {
      setResults([])
    }
    else {
      people.some(person => {
        if(person.f_name.includes(name)){
          results.push(person)
          let uniqueResults = results.filter((x, i, a) => a.indexOf(x) == i)
          setResults([...uniqueResults])
        }
      })
    }
  }


  return (
    <div className={Styles.sidebarContainer}>
      <h4>Who are you looking for?</h4>
      <input className={Styles.textInput} type='text' onChange={e => inputTextHandler(e.target.value)}/>
      <div className={Styles.searchResultContainer}>
        { results.length
          ? 
            results.map(person => 
              (
               <div className={Styles.searchResult}>
                <Row className={Styles.searchResultRow}>
                  <Col className={Styles.avatarCol} lg={4}>
                    <img src={DefaultUserImage} alt='' />
                  </Col>
                  <Col className={Styles.nameCol} lg={8}>{person.f_name}</Col>
                </Row>
              </div>
              )
            )
          : 
              <Row className={Styles.searchResultRow}>
                <Col className={inputText !== '' && results.length < 1 ? Styles.noResult : Styles.none} lg={12}>No Results to Show!</Col>
              </Row> 
        }
      </div>
    </div>
  )
}

export default Sidebar