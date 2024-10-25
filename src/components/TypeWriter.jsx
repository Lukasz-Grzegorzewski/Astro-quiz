import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function TypeWriter({ text }) {
	const [index, setIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");

	useEffect(() => {
		setIndex(0);
		if (text) setCurrentText("");
	}, [text]);

	useEffect(() => {
		if (index < text.length) {
			const timeoutId = setTimeout(() => {
				setCurrentText(text.substring(0, index + 1));
				setIndex((prevIndex) => prevIndex + 1);
			}, 350 / text.length);

			return () => clearTimeout(timeoutId);
		}
	}, [index, text]);

	return (
		<h1 className="p-info">
			{text !== "Bienvenue AstroQuizz" ? currentText : text}
			<span className="cursor" />
		</h1>
	);
}

TypeWriter.propTypes = {
	text: PropTypes.string.isRequired,
};

export default TypeWriter;
