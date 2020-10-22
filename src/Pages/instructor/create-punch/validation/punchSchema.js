import * as yup from 'yup';

const punchSchema = yup.object().shape({
    classNumber: yup    
        .string()
        .oneOf(['5', '10', '15', '20'], 'Class Number is Required')
})

export default punchSchema;