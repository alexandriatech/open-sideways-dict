import React, { useState } from 'react';
import Table from 'components-shared/Table'
import PropTypes from 'prop-types'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const UpdateWord = gql`
  mutation UpdateWord($wordData: UpdateWordData!){
    updateWord(wordData: $wordData) {
      word
      isPublish
    }
  }
`

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Word',
    dataIndex: 'word',
  },
  {
    title: 'Publish',
    dataIndex: 'isPublish',
    render: (d, wordData) => <PublishToggle initState={d} wordData={wordData}/>
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    align: 'right'
  },
]

const PublishToggle = ({ initState, wordData }) => {
  const { id } = wordData;
  const [toggleState, setToggleState] = useState(initState)
  const [updateWord] = useMutation(UpdateWord, {
    onCompleted: (data) => {
      const { isPublish } = data.updateWord;
      setToggleState(isPublish);
    }
  })

  return (
    <span onClick={() => updateWord({ variables: { wordData: { id, isPublish: !toggleState }}})}>
      {toggleState ? 'True' : 'False'}
    </span>
  )
}

const WordTab = ({ words }) => {
  return <Table columns={columns} data={words} rowKey={'id'}/>
}

WordTab.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      word: PropTypes.string,
      createdAt: PropTypes.string,
      isPublish: PropTypes.bool
    })
  )
}

export default WordTab;