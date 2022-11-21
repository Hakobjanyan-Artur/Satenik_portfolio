import { Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import * as yup from 'yup'
import './Registration.css'

function Registration() {
    const navigate = useNavigate()
    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Should be a string').required('Required to fill out'),
        email: yup.string().email('Not correct email').required('Required to fill out'),
        password: yup.string().typeError('Should be a string').required('Required to fill out'),
        confirmPassword: yup.string().typeError('Should be a string').oneOf([yup.ref('password')], 'Passwords do not match').required('Required to fill out')
    })

    return (
        <div className="formik">
            <div className="container">
            <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}

            onSubmit={(values, {resetForm}) => {
                console.log(values);
                // addUser([
                //     ...corentData,
                //     {
                //         id: new Date().getTime(),
                //         name: values.name,
                //         email: values.email,
                //         password: values.password,
                //         todos: []
                //     }
                // ])
                // changePageTo('addTodo')
                resetForm()
            }}
               validateOnBlur
               
               validationSchema={validationSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="title">Registration</div>

                        <div className="input-container ic2">
                            <input 
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder='First name'
                            />
                            <div className="cut"></div>
                            {touched.name && errors.name && <p className="error">{errors.name}</p>}
                        
                        </div>

                        <div className="input-container ic1">

                            <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='Email'
                            />
                            <div className="cut"></div>
                            {touched.email && errors.email && <p className="error">{errors.email}</p>}

                        </div>

                        <div className="input-container ic1">

                            <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder='Password'
                            />
                            <div className="cut"></div>
                            {touched.password && errors.password && <p className="error">{errors.password}</p>}

                        </div>

                        <div className="input-container ic1">

                            <input
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder='Confirm Password'
                            />
                            <div className="cut"></div>
                            {touched.confirmPassword && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                        </div>

                        <button
                        className="submit"
                        disabled={!isValid && !dirty}
                        type="submit"
                        >Sign up</button>
                        <span className="signIn" onClick={() => navigate('/login')}>Sign in</span>
                    </form>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default Registration