import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/portafolio/">Inicio</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/portafolio/about">Sobre mí</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/portafolio/projects">Proyectos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/portafolio/articles">CV</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/portafolio/contact">Contacto</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
