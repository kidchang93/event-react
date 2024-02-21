import React, { useState } from "react";

const EventPracticeFunction = () => {
	const [form, setForm] = useState({ message: "", username: "" });
	// useState 가 계속 만들어지는 불편함이 있으므로
	// form 이란 object로 받고 비구조할당으로 꺼낸다.
	const { message, username } = form;
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		// [e.target.name] 라고 써주는거는 e.target.name 자체가 키로 인식하지 못해서 키로 인식하게 저렇게 감싸서 상수로 써준다.
		console.log("setform", message, username); // 현재 상태값이 찍히지 않음
		console.log("object", e.target.value); // 현재 상태값이 찍힘
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
			<hr />
			<input
				type="text"
				name="username"
				placeholder="입력해 주세요."
				onChange={handleChange}
			/>
			<br />
			username: {username}
		</div>
	);
};

export default EventPracticeFunction;
