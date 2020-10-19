import * as Yup from "yup";

const searchFormSchema = Yup.object().shape({
	classInput: Yup.string().required(),
	cityInput: Yup.string().required(),
});

export default searchFormSchema;