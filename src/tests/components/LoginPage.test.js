
import configureMockStore from 'redux-mock-store'
import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from '../../components/LoginPage'
import configureStore from '../../store/configureStore'

const store = configureStore()


test('should render loginpage correctly', () => {
    
    const spy = jest.fn()
    const wrapper = shallow(<LoginPage store = {spy}/>)
    expect(wrapper).toMatchSnapshot()
})



// test('should call startLogin on button click', () => {
   
//     const startLogIn = jest.fn();
//     const wrapper = shallow(<LoginPage store = {store} startLogin = {startLogIn}/>)
//     wrapper.find('button').simulate('click')
//     expect(startLogIn).toHaveBeenCalled()
// })