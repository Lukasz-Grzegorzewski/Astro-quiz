import PropTypes from "prop-types";
import Lottie from "react-lottie";
import animationData from "../../lotties/rocket-launch.json";
import "../../css/quizz/Certificat.css";

function Certificat({ somme, numQuestions, updateStart }) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="certificat">
			<div className="rocket">
				<Lottie options={defaultOptions} height={300} width={300} />
			</div>

			<img
				className="champion"
				src="/assets/images/quiz/certificat.png"
				alt="nous"
			/>
			<div className="cadre-point">
				<h1 className="title-certificat">BRAVO !</h1>
				<p className="p-certificat">Tu as obtenu un score de:</p>

				<div className="score">
					<p>
						{somme}/{numQuestions}
					</p>
				</div>

				<p className="voyage">A bientot pour un nouveau voyage!</p>

				<button
					type="button"
					className="startAgainBtn"
					onClick={() => updateStart()}
				>
					Recommence!
				</button>
			</div>
		</div>
	);
}

export default Certificat;

Certificat.propTypes = {
	somme: PropTypes.number.isRequired,
	numQuestions: PropTypes.string.isRequired,
	updateStart: PropTypes.func.isRequired,
};
