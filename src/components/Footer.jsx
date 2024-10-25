import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../css/Footer.css";

const getRandomDelay = () => Math.random() * 5 + 4;

function Footer() {
	const [linkedinDelay, setLinkedinDelay] = useState(getRandomDelay());
	const [githubDelay, setGithubDelay] = useState(getRandomDelay());
	const [emailDelay, setEmailDelay] = useState(getRandomDelay());

	document.addEventListener("mousemove", (event) => {
		const leftEye = document.getElementById("left-eye");
		if (leftEye) {
			const windowLX = event.clientX / window.innerWidth;
			const xL = 97 + windowLX * windowLX * windowLX * 23;
			leftEye.setAttribute("cx", `${xL}`);

			const windowLY = event.clientY / window.innerHeight;
			const yL = 90 + windowLY * windowLY * windowLY * 18;
			leftEye.setAttribute("cy", `${yL}`);
		}

		const rightEye = document.getElementById("right-eye");
		if (leftEye) {
			const windowRX = event.clientX / window.innerWidth;
			const xR =
				238 +
				windowRX * windowRX * windowRX * windowRX * windowRX * windowRX * 23;
			rightEye.setAttribute("cx", `${xR}`);

			const windowRY = event.clientY / window.innerHeight;
			const yR = 92 + windowRY * windowRY * windowRY * windowRY * windowRY * 18;
			rightEye.setAttribute("cy", `${yR}`);
		}
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setLinkedinDelay(getRandomDelay());
			setGithubDelay(getRandomDelay());
			setEmailDelay(getRandomDelay());
		}, 5000); // Adjust the interval as needed
		return () => clearInterval(interval);
	}, []);

	return (
		<footer className="footer">
			<motion.svg
				id="svg"
				className="alien"
				drag
				dragElastic={1}
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				width="357"
				height="259"
				viewBox="0 0 357 259"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>footer</title>
				<path
					d="M236.663 81.1703C233.758 82.9325 234.496 74.829 234.082 70.8034C232.176 52.279 224.689 43.7701 222.475 38.2922C231.815 49.8573 236.511 66.0603 236.977 70.593C237.287 73.6194 240.185 82.115 236.663 81.1703Z"
					fill="black"
				/>
				<path
					d="M247.068 81.3442C244.027 82.8962 245.407 74.8783 245.313 70.8406C244.88 52.2609 238.078 43.2651 236.302 37.6558C244.712 49.8242 248.116 66.287 248.221 70.8331C248.291 73.8686 250.511 82.5308 247.068 81.3442Z"
					fill="black"
				/>
				<path
					d="M266.354 87.133C262.932 87.7158 266.902 80.5408 268.146 76.6984C273.871 59.017 270.336 48.5404 270.49 42.7241C274.515 56.6656 272.332 73.2102 270.93 77.5363C269.994 80.4248 269.256 89.2546 266.354 87.133Z"
					fill="black"
				/>
				<path
					d="M272.551 94.7159C269.061 94.5626 274.661 88.4342 276.797 84.9672C286.624 69.013 285.665 58.1047 287.206 52.4934C287.816 66.8665 281.727 82.4618 279.322 86.3651C277.716 88.9714 274.884 97.384 272.551 94.7159Z"
					fill="black"
				/>
				<path
					d="M256.249 82.9561C253.003 84.102 255.536 76.3552 256.028 72.3535C258.292 53.9393 252.839 44.1832 251.888 38.414C258.477 51.51 259.472 68.2113 258.918 72.7169C258.547 75.7252 259.496 84.5675 256.249 82.9561Z"
					fill="black"
				/>
				<path
					d="M237.62 175.053L237.617 175.074L237.615 175.095C236.329 190.35 238.352 206.01 239.992 218.697C240.239 220.612 240.478 222.458 240.695 224.226C241.526 230.993 242.037 236.553 241.56 240.342C241.321 242.238 240.843 243.611 240.103 244.473C239.39 245.302 238.384 245.713 236.914 245.578C233.957 245.306 230.793 242.65 227.876 238.105C224.98 233.593 222.41 227.345 220.598 220.158C216.974 205.78 216.413 187.757 222.237 172.548C226.755 160.749 227.567 148.439 227.128 136.813C226.909 131 226.376 125.35 225.835 120.019C225.758 119.259 225.681 118.505 225.604 117.758C225.143 113.264 224.708 109.024 224.488 105.115C224.232 100.556 224.27 96.4811 224.892 93.0149C225.513 89.5519 226.711 86.7303 228.746 84.641C232.806 80.4735 240.409 79.0252 254.245 81.7587C266.728 85.1698 272.263 89.3707 273.709 94.3866C274.434 96.9048 274.156 99.7054 273.105 102.845C272.053 105.987 270.242 109.427 267.952 113.202C266.111 116.237 263.965 119.48 261.674 122.941C252.597 136.657 241.246 153.807 237.62 175.053Z"
					fill="#16CE60"
					stroke="black"
				/>
				<path
					d="M266.73 109.03C264.833 113.238 260.863 116.397 256.127 118.006C251.393 119.615 245.938 119.658 241.123 117.679C236.302 115.698 232.132 111.692 229.654 107.104C227.173 102.51 226.429 97.4167 228.312 93.2391C230.244 88.9552 232.927 85.8797 236.938 84.3206C240.97 82.7534 246.431 82.682 253.986 84.6119C265.368 87.5192 269.493 91.2306 270.405 95.237C270.867 97.2636 270.53 99.4435 269.774 101.77C269.134 103.74 268.21 105.772 267.256 107.87C267.081 108.255 266.905 108.641 266.73 109.03Z"
					fill="white"
					stroke="black"
				/>
				<path
					d="M92.4685 81.4758C90.1874 83.9941 88.5807 76.0173 87.0344 72.2775C79.919 55.0684 70.3134 49.0518 66.6276 44.4342C78.8812 52.8508 88.0088 67.0381 89.749 71.2492C90.911 74.0609 96.1139 81.3754 92.4685 81.4758Z"
					fill="black"
				/>
				<path
					d="M102.49 78.6713C100.019 81.0271 99.0519 72.9489 97.8088 69.1062C92.0888 51.4236 83.001 44.7447 79.6972 39.876C91.2313 49.1365 99.1948 63.9418 100.594 68.2687C101.528 71.1577 106.128 78.8254 102.49 78.6713Z"
					fill="black"
				/>
				<path
					d="M122.626 78.712C119.513 80.2477 121.268 72.2379 121.364 68.2002C121.802 49.6202 115.422 40.5893 113.909 34.9711C121.747 47.1828 124.38 63.6619 124.272 68.2081C124.199 71.2436 126.013 79.9167 122.626 78.712Z"
					fill="black"
				/>
				<path
					d="M130.73 84.2098C127.342 85.0592 130.959 77.5871 132.015 73.6546C136.878 55.5585 132.845 45.3781 132.718 39.5606C137.407 53.1611 136.026 69.8455 134.835 74.2731C134.04 77.2294 133.728 86.1004 130.73 84.2098Z"
					fill="black"
				/>
				<path
					d="M111.749 77.5946C108.966 79.6195 109.181 71.4719 108.51 67.4964C105.421 49.2025 97.4098 41.4095 94.851 36.1521C104.906 46.8213 110.628 62.5432 111.383 67.0195C111.887 70.0083 115.321 78.2115 111.749 77.5946Z"
					fill="black"
				/>
				<path
					d="M120.194 171.176L120.196 171.197L120.201 171.218C123.324 186.205 129.735 200.635 134.929 212.326C135.713 214.09 136.469 215.792 137.181 217.424C139.911 223.672 141.988 228.855 142.613 232.622C142.925 234.507 142.859 235.96 142.395 236.997C141.949 237.995 141.102 238.676 139.655 238.966C136.744 239.55 132.953 237.909 128.86 234.386C124.795 230.889 120.548 225.634 116.76 219.264C109.181 206.519 103.497 189.407 104.735 173.169C105.696 160.571 102.959 148.541 99.2191 137.524C97.3489 132.016 95.2252 126.754 93.1845 121.799C92.8935 121.092 92.6042 120.392 92.3177 119.698C90.5925 115.522 88.965 111.583 87.6382 107.9C86.0907 103.604 84.9639 99.6877 84.57 96.1883C84.1764 92.6921 84.5183 89.6461 85.8722 87.0626C88.573 81.9093 95.4463 78.3502 109.486 77.0193C122.424 76.7238 128.928 79.1692 131.746 83.5635C133.16 85.7697 133.693 88.5331 133.582 91.8424C133.472 95.1533 132.718 98.9676 131.601 103.239C130.704 106.673 129.573 110.394 128.366 114.366C123.583 130.102 117.602 149.78 120.194 171.176Z"
					fill="#16CE60"
					stroke="black"
				/>
				<path
					d="M129.239 99.5896C128.623 104.164 125.72 108.326 121.641 111.22C117.563 114.113 112.347 115.713 107.168 115.191C101.982 114.668 96.8413 112.021 93.1565 108.331C89.4669 104.637 87.3 99.9679 87.9119 95.4266C88.5394 90.7695 90.2334 87.0557 93.632 84.4162C97.048 81.7632 102.262 80.1352 110.054 79.8274C121.791 79.3638 126.804 81.7427 128.823 85.3219C129.844 87.1323 130.143 89.3177 130.083 91.763C130.033 93.834 129.727 96.0447 129.412 98.3285C129.354 98.7466 129.296 99.1671 129.239 99.5896Z"
					fill="white"
					stroke="black"
				/>
				<path
					d="M330.5 231.793C330.5 234.477 329.562 236.699 327.758 238.558C325.942 240.43 323.229 241.951 319.663 243.168C312.525 245.604 302.126 246.774 289.132 247.241C274.361 247.771 256.333 247.392 236.062 246.966C220.657 246.642 203.958 246.291 186.41 246.291C169.017 246.291 152.237 246.636 136.598 246.957C115.698 247.387 96.8363 247.774 81.2774 247.241C67.6802 246.774 56.6751 245.604 49.0814 243.165C45.2859 241.946 42.3842 240.422 40.437 238.546C38.5044 236.684 37.5 234.465 37.5 231.793C37.5 226.421 41.4284 221.186 48.8263 216.333C56.2037 211.492 66.912 207.114 80.189 203.43C106.736 196.063 143.439 191.5 184 191.5C224.561 191.5 261.264 196.063 287.811 203.43C301.088 207.114 311.796 211.492 319.174 216.333C326.572 221.186 330.5 226.421 330.5 231.793Z"
					fill="#16CE60"
					stroke="black"
				/>
				<ellipse cx="85" cy="228" rx="21" ry="9" fill="black" />
				<path
					d="M355.14 209.69C355.14 281.217 288.314 253.862 178.5 253.862C68.686 253.862 0.0102886 276.909 0.0102886 205.382C0.0102886 133.856 -4.61381 8 182.199 8C387.508 8 355.14 138.164 355.14 209.69Z"
					fill="white"
					fillOpacity="0.2"
				/>
				<g filter="url(#filter0_d_794_25)">
					<ellipse
						rx="14.0377"
						ry="36.7028"
						transform="matrix(-0.101298 -0.994856 0.993204 -0.116387 145.752 29.7413)"
						fill="white"
						fillOpacity="0.8"
					/>
				</g>
				<g filter="url(#filter1_d_794_25)">
					<ellipse
						rx="10.5563"
						ry="18.4477"
						transform="matrix(0.0240551 -0.999711 0.999877 0.0156761 211.699 25.8424)"
						fill="white"
						fillOpacity="0.8"
					/>
				</g>
				{/* right eye */}
				<ellipse
					id="right-eye"
					cx="249"
					cy="99"
					rx="7.5"
					ry="7"
					transform="rotate(8.27108 238.011 94.7774)"
					fill="black"
				/>
				{/* left eye */}
				<ellipse
					id="left-eye"
					cx="108"
					cy="98"
					rx="7.5"
					ry="7"
					transform="rotate(-8.32039 97.6457 94.1314)"
					fill="black"
				/>
				<defs>
					<filter
						id="filter0_d_794_25"
						x="94.2705"
						y="0.13324"
						width="102.963"
						height="59.2161"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feMorphology
							radius="5"
							operator="dilate"
							in="SourceAlpha"
							result="effect1_dropShadow_794_25"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.54 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_794_25"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_794_25"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_d_794_25"
						x="178.252"
						y="0.285156"
						width="66.8945"
						height="51.1146"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feMorphology
							radius="5"
							operator="dilate"
							in="SourceAlpha"
							result="effect1_dropShadow_794_25"
						/>
						<feOffset />
						<feGaussianBlur stdDeviation="5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.54 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_794_25"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_794_25"
							result="shape"
						/>
					</filter>
				</defs>
			</motion.svg>

			<div className="footer-content" />
		</footer>
	);
}

export default Footer;
