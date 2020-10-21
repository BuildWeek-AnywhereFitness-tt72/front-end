import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { HeroImgJr } from "../../../reusable-components/reusableComponents";

const SearchResults = props => {
	const { searchTerm, results } = props;
	if (!results) {
		return (
			<div>There are no search results for {searchTerm ? searchTerm : "UNKNOWN"}</div>
		);
	}
	
};

export default SearchResults;