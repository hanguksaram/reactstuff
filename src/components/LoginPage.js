import React from 'react'
import Spinner from './Spinner'


const LoginPage = (props) => (
    <div className = 'box-layout'>
        <div className = 'box-layout__box'>
            <Spinner/>
        </div>
    </div>
)


// const mapDispatchToProps = (dispatch) => ({
//     startLogin : () => dispatch(startLogin())
// })

export default LoginPage