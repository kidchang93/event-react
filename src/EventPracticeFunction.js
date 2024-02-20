import React, { useState } from "react";

const EventPracticeFunction = () => {
	const [message, setMessage] = useState("");
	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input
				type="text"
				name="message"
				placeholder="입력해 주세요."
				onChange={handleChange}
			/>
			<br />
			message: {message}
		</div>
	);
};

export default EventPracticeFunction;
