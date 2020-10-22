import axios from 'axios';

export function axiosWithAuth() {
	// const clientID = 'WhyDidTheFunctionsStopCallingEachother';
	// const clientSecret = 'TheyHadConstantArguments';
    // const auth = window.btoa(clientID + ':' + clientSecret);
    const token = window.localStorage.getItem("token")
	return axios.create({
		headers: {
			Authorization: 'Bearer ' + token,
			'Content-Type': 'application/json',
		},
		baseURL: "https://tt72-anyfit.herokuapp.com"
	});
}
