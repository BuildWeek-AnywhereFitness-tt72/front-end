import axios from 'axios';

// do something like axiosWithSecret('/login'
// grant_type=password&username=admin&password=admin )
export function axiosWithSecret() {
	const clientID = 'WhyDidTheFunctionsStopCallingEachother';
	const clientSecret = 'TheyHadConstantArguments';
	const auth = window.btoa(clientID + ':' + clientSecret);
	console.log('is it being called');
	return axios.create({
		headers: {
			Authorization: 'Basic ' + auth,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		baseURL: "https://tt72-anyfit.herokuapp.com"
	});
}
