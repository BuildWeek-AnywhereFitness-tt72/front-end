import React from "react";
import styled from "styled-components";

const Modal = styled.div`
	width: 40rem;
	height: 10rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	/* position: center; */
	background-color: white;
	div.content {
		h2 {
			
		}
	}


	/* z-index: absolute; */
`;

const ManageModal = props => {
	const { session, onClose, show, handleDelete } = props;
	if (!show) {
		return null;
	}
	return (
		<Modal className="modal">
			<div className="content"><h2>Delete {session.name}?</h2></div>
			<div className="actions">
				<button onClick={handleDelete}>Delete</button>
				<button onClick={onClose}>Cancel</button>
			</div>
		</Modal>
	)
};

export default ManageModal;