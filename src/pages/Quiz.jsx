import { useEffect, useState } from "react";
import Astro from "../components/quizz/Astro";
import Certificat from "../components/quizz/Certificat";
import Questionnaire from "../components/quizz/Questionnaire";
import Start from "../components/quizz/Start";
import questionsData from "../mock/quizz";
import "../css/quizz/Quiz.css";

function Quiz() {
	const [newQuest, setNewQuest] = useState(Math.floor(Math.random() * 21));
	const [resptrue, setResptrue] = useState(0);
	const [api, setApi] = useState([]);
	const [somme, setSomme] = useState(0);
	const [numQuestions, setNumQuestions] = useState(3);
	const [start, setStart] = useState(false);
	const [compteur, setCompteur] = useState(0);
	const [allIndexes, setAllIndexes] = useState([]);

	useEffect(() => {
		setApi(questionsData);
		setAllIndexes([]);
		for (let i = 0; i < questionsData.length; i += 1) {
			setAllIndexes((prev) => [...prev, i]);
		}
		// axios
		//   .get("/api/quiz")
		//   .then((result) => {
		//     // setApi(result.data);
		//     setAllIndexes([]);
		//     for (let i = 0; i < result.data.length; i += 1) {
		//       setAllIndexes((prev) => [...prev, i]);
		//     }
		//   })
		//   .catch((err) => console.error(err));
	}, []);

	function updateStart() {
		setStart(!start);
		setSomme(0);
		setCompteur(0);
	}

	function updateSomme() {
		setSomme((prevSomme) => prevSomme + 1);
	}

	function updateNumQuestions(nombre) {
		setNumQuestions(nombre);
	}

	function trueFalse(verif) {
		setResptrue(verif);
	}

	function parent() {
		const random = Math.floor(Math.random() * allIndexes.length);
		setNewQuest(allIndexes[random]);
		allIndexes.splice(random, 1);
		setCompteur((prev) => prev + 1);
	}

	return (
		<div>
			{api.length > 0 && start && (
				<div className="leTout">
					{compteur < numQuestions ? (
						<div className="Quiz">
							<Questionnaire
								question={api[newQuest].question}
								responses={api[newQuest].reponse}
								solution={api[newQuest].solution}
								trueFalse={(verif) => trueFalse(verif)}
								parentProp={() => parent()}
								setSomme={() => updateSomme()}
							/>

							<Astro
								comfalse={api[newQuest]["commentaire-false"]}
								comtrue={api[newQuest]["commentaire-true"]}
								resptrue={resptrue}
							/>
						</div>
					) : (
						<Certificat
							somme={somme}
							numQuestions={numQuestions}
							updateStart={() => updateStart()}
						/>
					)}
				</div>
			)}
			{api.length > 0 && !start && (
				<Start
					updateStart={() => updateStart()}
					somme={somme}
					updateNumQuestions={(nombre) => updateNumQuestions(nombre)}
				/>
			)}
		</div>
	);
}
export default Quiz;
