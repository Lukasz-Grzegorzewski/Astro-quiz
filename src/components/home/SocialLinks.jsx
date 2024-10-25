import WavesGenerator from "@components/WavesGenerator";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../../css/SocialLinks.css";

const SocialLinks = () => {
	const [hovered, setHovered] = useState(null); // Track hovered icon

	const socialLinks = [
		{
			id: 0,
			icon: faAddressBook,
			url: "https://luc-dev.com",
			label: "Portfolio",
			message: "Mon portfolio",
		},
		{
			id: 1,
			icon: faLinkedin,
			url: "https://www.linkedin.com/in/grzegorzewski-lukasz",
			label: "LinkedIn",
			message: "LinkedIn",
		},
		{
			id: 2,
			icon: faGithub,
			url: "https://github.com/Lukasz-Grzegorzewski",
			label: "GitHub",
			message: "GitHub",
		},
		{
			id: 3,
			icon: faEnvelope,
			url: "mailto:grzegorzewski.luk@gmail.com",
			label: "Email",
			message: "Contactez-moi",
		},
	];

	return (
		<div className="social-container">
			{socialLinks.map((link) => (
				<WavesGenerator key={link.id} size={1}>
					<a
						className="icon"
						href={link.url}
						onMouseEnter={() => setHovered(link.id)} // Track hover
						onMouseLeave={() => setHovered(null)} // Reset hover
					>
						<FontAwesomeIcon icon={link.icon} />
						{hovered === link.id && (
							<span className="tooltip">{link.message}</span> // Show tooltip on hover
						)}
					</a>
				</WavesGenerator>
			))}
		</div>
	);
};

export default SocialLinks;
