import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/configureStore'
import {Header} from './components/Header'
import {Main} from './components/Main'
import {Projects} from './components/Projects'
import {Skills} from './components/Skills'
import {About} from './components/About'
import {Contacts} from './components/Contacts'
import {Footer} from './components/Footer'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import LoginPage  from './components/LoginPage'

import {getDivPositionsOnResize, changeNavColorsOnScroll} from './actions/headerFooterAnimation'

let evenSectionsHeights, oddSectionsHeights, joinSecitonHeights, navs, windowHeight

  


const store = configureStore()

// store.subscribe(
//     () => {
//         const state = store.getState()
//         console.log(getVisibleExpenses(state.expenses, state.filters))}
// )


// let timeoutId =  setTimeout(function some()  {
//     let random = Math.random().toFixed(1)
//     store.dispatch(setTextFilter({text: random }))
//     if(random == 0.1) return
//     timeoutId = setTimeout(some, 3000)

// }, 3000)

const jsx = (
   <div>
        <Header/>
        <Main/>
        <Projects/>
        <Skills/>
        <About/>
        <Contacts/>
        <Footer/>
    </div>
  
)

// let hasRendered = false;
// const renderApp = () => {
//     if (!hasRendered){
//         ReactDOM.render(jsx, document.getElementById("app"))
//         hasRendered = true
//     }
// }



    ReactDOM.render(jsx, document.getElementById("app"))
    
    const eventHandler = () => {
        evenSectionsHeights = Array.from(document.querySelectorAll('section:not(.main):nth-child(even)'))
                                    .map((elem) =>  {
                                        
                                        return {offsetTop: elem.offsetTop,
                                                height: elem.offsetHeight + elem.offsetTop}})
        // oddSectionsHeights = Array.from(document.querySelectorAll('section:not(.main):nth-child(odd)'))
        //                             .map((elem) => {elem.offsetTop, elem.offsetHeight})
        joinSecitonHeights = evenSectionsHeights  
        navs = document.getElementsByClassName('navs');
        windowHeight = window.innerHeight;

       
      }
  window.addEventListener('load', eventHandler)
  window.addEventListener('resize', eventHandler) 
    
    
    
       
  window.addEventListener("scroll", () => {
    
    const scrollPostion = document.documentElement.scrollTop;
    const boolObj = {main: false,
    second: {
        header: false,
        footer: false
    }}
    for (let i = 0; i < joinSecitonHeights.length; i ++){
        // if (navs[0].classList.contains('navs--modified')) navs[0].classList.remove('navs--modified')
    
    if ((joinSecitonHeights[i].offsetTop <= scrollPostion && scrollPostion <= joinSecitonHeights[i].height )){
        navs[0].classList.add('navs--modified')
        
        boolObj.main = true;
        boolObj.second.header = true;
            
        }
    
      
        // if (navs[1].classList.contains('navs--modified')) navs[1].classList.remove('navs--modified')
    if ( joinSecitonHeights[i].offsetTop <= scrollPostion + windowHeight && scrollPostion + windowHeight <= joinSecitonHeights[i].height){
        navs[1].classList.add('navs--modified')
        boolObj.main = true;
        boolObj.second.footer = true;
    }
   
        if (boolObj.main == true) break;
    // else {
    //     
       
    //    
  
    // }
    }
    if ( boolObj.second.header == false) navs[0].classList.remove('navs--modified')
    if ( boolObj.second.footer == false) navs[1].classList.remove('navs--modified')
})
    




// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         store.dispatch(login(user.uid))
//         store.dispatch(startSetExpenses()).then(() => {
//             renderApp()
//             if (history.location.pathname === '/') {
//                 history.push('/dashboard')
//             }
//         })
//     }
//     else {
//         store.dispatch(logout())
//         renderApp()
//         history.push('/')
//     }
// })

