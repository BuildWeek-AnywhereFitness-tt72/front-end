import * as Yup from "yup";

const validFilters = {
	classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp",],
	classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",],
	// classDate: Calendar
	classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
	classLevel: ["beginner", "intermediate", "advanced"],
}

const searchFormSchema = Yup.object().shape({
	sessionInput: Yup.string().required(),
	locationInput: Yup.string().required(),
	// classType: Yup.string().required().oneOf(validFilters.classType),
	// classDuration: Yup.string().required().oneOf(validFilters.classDuration),
	// // classDate: Yup.date().required(),
	// classTime: Yup.string().required().oneOf(validFilters.classLevel),
	// classLevel: Yup.string().required().oneOf(validFilters.classLevel),
});

export default searchFormSchema;