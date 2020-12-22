// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  let submittedData;
  // const handleSubmit = data => (submittedData = data) 
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const testCase = {
    username: 'harry',
    password: '123456'
  }

  const usernameElements = screen.getByLabelText(/username/i)
  const passwordElements = screen.getByLabelText(/password/i)

  userEvent.type(usernameElements,testCase.username)
  userEvent.type(passwordElements,testCase.password)

  const submitElements = screen.getByRole('button',{name: /submit/i})
  userEvent.click(submitElements)

  // expect(submittedData).toEqual({
  //   username: testCase.username,
  //   password: testCase.password
  // })

  expect(handleSubmit).toHaveBeenCalledWith(testCase)
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
