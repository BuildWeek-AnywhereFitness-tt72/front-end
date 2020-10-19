import * as yup from 'yup';

const createClassSchema = yup.object().shape({
    name: yup  
        .string()
        .required('Class Name is required'),
    description: yup
        .string()
        .required('Class Description is required'),
    cost: yup   
        .string()
        .required('Class Equipment is required'),
    address: yup
        .string()
        .required('Class Address is required'),
    type: yup   
        .string()
        .oneOf(['boxing', 'yoga', 'spinning'], 'Type is Required'),
    size: yup   
        .number()
        .required('Class Size is required'),
    length: yup
        .number()
        .required('Class Length is required'),
    level: yup
        .string()
        .oneOf(['beginner', 'intermediate', 'advanced'], 'Class Level is required'),
    arrival: yup
        .string()
        .required('When to Arrive is required'),
    know: yup
        .string()
        .required('What You Need To Know is required'),
    timeStart: yup
        .string()
        .required('Class Start Time is required'),
    timeEnd: yup    
        .string()
        .required('Class End Time is required'),
    monday: yup.boolean(),
    tuesday: yup.boolean(),
    wednesday: yup.boolean(),
    thursday: yup.boolean(),
    friday: yup.boolean(),
    saturday: yup.boolean(),
    sunday: yup.boolean(),
});

export default createClassSchema;