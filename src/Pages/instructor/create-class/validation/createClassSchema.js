import * as yup from 'yup';

const createClassSchema = yup.object().shape({
    name: yup  
        .string()
        .required('Class Name is required'),
    type: yup   
        .string()
        .oneOf(['boxing', 'yoga', 'spinning'], 'Type is Required'),
    time: yup
        .date()
        .required('Class Time is required'),
    duration: yup
        .number()
        .required('Class Length is required'),
    intensity: yup
        .string()
        .oneOf(['beginner', 'intermediate', 'advanced'], 'Class Level is required'),
    maxsize: yup   
        .number()
        .required('Class Size is required'),
    address: yup
        .string()
        .required('Class Address is required'),
    city: yup
        .string()
        .required('Class City is required'),
    state: yup
        .string()
        .required('Class State is required'),
    zip: yup    
        .string()
        .required('Class Zip is required'),
});

export default createClassSchema;