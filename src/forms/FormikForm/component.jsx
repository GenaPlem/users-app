import {ErrorMessage, Field, Form, Formik} from "formik";
import './styles.css'


const FormikForm = ({posts, setPosts}) => {
    const initialValues = { title: '', body: '', userId: '1', };

    const handleValidate = values => {
        const errors = {};
        if(!values.title ) {
            errors.title = "Required"
        } else if (!values.body) {
            errors.body = "Required"
        }
        return errors;
    }

    const handleSubmit = (values, { setSubmitting, resetForm } ) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                ...values
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(post => {
                setPosts([...posts, post])
            });
        resetForm({...initialValues})
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting}) => (
                <Form className="form">
                    <label htmlFor="title">Title:
                        <ErrorMessage name='title' className='error' component='span'/>
                        <Field type='title' name='title' className='field'/>
                    </label>
                    <label htmlFor="body">Message:
                        <ErrorMessage name='body' className='error' component='span'/>
                        <Field as='textarea' type='body' name='body' className='field'/>
                    </label>
                    <label htmlFor="userId">UserId:
                        <Field as='select' type='userId' name='userId'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Field>
                    </label>
                    <input type="submit" disabled={isSubmitting}></input>
                </Form>
            )}
        </Formik>
    )
}

export default FormikForm;