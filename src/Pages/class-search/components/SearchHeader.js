import React from 'react';
import styled from "styled-components";

const StyledSearchHeader = styled.header`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	border: 1px solid lightgray;
	align-items: center;
	div {
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		h1 {
			display: inline-block;
			font-size: 6rem;
			color: ${pr => pr.theme.charcoal};
			/* margin-right: 3rem; */
		}
		p {
			display: inline-block;
			font-weight: 800;
			font-size: 2rem;
			font-style: normal;
			letter-spacing: 0.05rem;
			padding: 10px;
			color: ${pr => pr.theme.charcoal};
		}
	}
`;

const Button = styled.a`
	display: ${ pr => pr.isDisabled ? "none" : "flex"};
	background-color: ${pr => pr.theme.charcoal};
	color: ${pr => pr.theme.eggshell};
	width: 20rem;
	height: 5rem;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	font-weight: 600;
	border-radius: 10px;
	&:hover {
		color: ${pr => pr.theme.eggshell};
	}
`;

const InputContainer = styled.div`
	display: inline-block;
	height: 5rem;
	width: 60rem;
`;

const Input = styled.input.attrs(pr => ({
	radius: pr.place === "left" ? "25px 0px 0px 25px" : "0px 25px 25px 0px",
}))`
	background: transparent;
	display: inline-block;
	text-align: center;
	height: 100%;
	width: 50%;
	border-radius: ${pr => pr.radius};
	border-left: ${pr => pr.place === "right" ? "0px" : ""};
	border-color: #CCCCCC;
	outline: none;
`;

const SearchHeader = props => {
	
	// const {input, searchChange, isDisabled, searchSubmit, user} = props;
	const {input, searchChange, user} = props;

	const onChange = (evt) => {
		const {name, value} = evt.target;
		// console.log(name, value);
		searchChange(name, value);
	};
	
	return (
		<StyledSearchHeader className="search-header">
			<div>
				<h1>Anywhere Fitness</h1>
			</div>
				<InputContainer className="input-container">
					<Input 
						name="search"
						type="text"
						value={input.search}
						onChange={onChange}
						placeholder="Find a class or activity" 
						place="left"
					/>
					<Input 
						name="location"
						type="text"
						value={input.location}
						onChange={onChange}
						placeholder="Chicago, IL"
						place="right"
					/>
				</InputContainer>
				{/* <Button className="submit-btn" isDisabled={isDisabled} onClick={searchSubmit }>Search</Button> */}
			<div>
				<p>About</p>
				<p>Hello, {user ? user.username : "User"}!</p>
			</div>
		</StyledSearchHeader>
	);
};

export default SearchHeader;