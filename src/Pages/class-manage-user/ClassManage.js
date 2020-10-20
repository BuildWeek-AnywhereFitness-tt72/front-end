import React from "react";
import styled from "styled-components";
import ClassSearchHead from "../class-search/ClassSearchHead";

import { HeroImgJr } from "../../reusable-components/reusableComponents";

const ClassManage = props => {
	return (
		<div>
			<ClassSearchHead />
			<HeroImgJr className="hero-image-container" position={"50% 30%"} height={"720px"}>
				
			</HeroImgJr>
		</div>
	);
};

export default ClassManage;