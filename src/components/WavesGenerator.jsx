import React, { useEffect, useState } from "react";

const getRandomDelay = () => Math.random() * 2 + 5;
const stopsAfter = 2;

const WavesGenerator = ({ children, size }) => {
	const [triggerWave, setTriggerWave] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	useEffect(() => {
		const startWaves = () => {
			setTriggerWave(true);
			setTimeout(() => setTriggerWave(false), stopsAfter * 1000 + 2000);

			const nextDelay = getRandomDelay();
			setTimeout(startWaves, (nextDelay + 5) * 1000);
		};

		startWaves();

		return () => clearTimeout();
	}, []);

	const containerStyle = {
		position: "relative",
		display: "inline-block",
		width: "fit-content",
		height: "fit-content",
		zIndex: 2,
	};

	const waveStyle = (delay, small = false) => ({
		content: '""',
		position: "absolute",
		left: 0,
		zIndex: -1,
		display: "inline-block",
		width: "100%",
		height: "100%",
		borderRadius: "50%",
		outline: "1px solid transparent",
		animationName:
			triggerWave && !isHovered ? (small ? "pulse-small" : "pulse") : "none",
		animationDuration: `${stopsAfter}s`,
		animationTimingFunction: "ease-out",
		animationDelay: `${delay}s`,
		animationFillMode: "forwards",
	});

	const animations = `
		@keyframes pulse {
			0% {
				transform: scale(${size === 1 ? "0.7" : "2"});
				outline-color: white;
				opacity: 1;
			}
			
			80% {
				transform: scale(${size === 1 ? "1.1" : "2.4"});
				outline-color: white;
				opacity: 1;
			}

			100% {
				transform: scale(${size === 1 ? "1.3" : "2.6"});
				outline-color: white;
				opacity: 0;
			}
		}

	@keyframes pulse-small {
		0% {
			transform: scale(${size === 1 ? "0.7" : "2"});
			outline-color: white;
			opacity: 1;
		}
		
		80% {
			transform: scale(${size === 1 ? "0.9" : "2.2"});
			outline-color: white;
			opacity: 1;
		}

		100% {
			transform: scale(${size === 1 ? "1" : "2.3"});
			outline-color: white;
			opacity: 0;
		}
	}
`;

	return (
		<div
			style={containerStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<style>{animations}</style>
			<div style={waveStyle(0)} />
			<div style={waveStyle(0.5, true)} />
			{children}
		</div>
	);
};

export default WavesGenerator;
