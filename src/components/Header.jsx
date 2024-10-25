import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
	const [showLinks, setShowLinks] = useState(false);

	const links = [
		{
			href: "/",
			label: "Accueil",
			className: "home slideInDown-1",
		},
		{
			href: "/planets",
			label: "Planètes",
			className: "planets slideInDown-2",
		},
		{
			href: "/savoir",
			label: "Le sais-tu?",
			className: "savoir slideInDown-3",
		},
		{
			href: "/quiz",
			label: "Quizz",
			className: "quiz slideInDown-4",
		},
	];

	useEffect(() => {
		if (showLinks) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "auto";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showLinks]);

	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
			<div to="/" className="navbar-logo">
				<Link to="/">
					<img className="logo" src={"/logo.png"} alt="logo" />
				</Link>
			</div>
			<ul className="navbar-links">
				{links.map((link) => (
					<li key={link.label} className={`navbar-item ${link.className}`}>
						<Link
							to={link.href}
							className=" navbar-link"
							onClick={() => setShowLinks(!showLinks)}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			<button
				type="button"
				className="navbar-burger"
				onClick={() => setShowLinks(!showLinks)}
			>
				<span className="burger-bar" />
			</button>
		</nav>
	);
}

export default Header;
