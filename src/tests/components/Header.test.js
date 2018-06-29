
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'
import configureStore from '../../store/configureStore'

const store = configureStore()

// const createMockStore = configureMockStore()



test('should render Header correctly,', () => {
   
    const wrapper = shallow(<Header store = {store} startLogout ={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
   // expect(wrapper.find('h1').length).toBe(1)
})
// test('should call startLogout on button click', () => {
//     const store = createMockStore({})
//     const startLogout = jest.fn();
//     const wrapper = shallow(<Header store = {store} startLogout = {startLogout}/>)
//     wrapper.find('button').simulate('click')
//     expect(startLogout).toHaveBeenCalled()
// })