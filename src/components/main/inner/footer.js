import '../../../style/footer.css';

export function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer-section">
					<div className="footer-column">
						<p className="footer-title">Community</p>
						<a href="#" className="footer-link">
							Blog
						</a>
						<a href="#" className="footer-link">
							News
						</a>
						<a href="#" className="footer-link">
							Register
						</a>
					</div>
					<div className="footer-column">
						<p className="footer-title">Jobs</p>
						<a href="#" className="footer-link">
							Apply
						</a>
						<a href="#" className="footer-link">
							Interview
						</a>
						<a href="#" className="footer-link">
							resources
						</a>
					</div>
					<div className="footer-column">
						<p className="footer-title">Help</p>
						<a href="#" className="footer-link">
							Contact
						</a>
						<a href="#" className="footer-link">
							Questions
						</a>
						<a href="#" className="footer-link">
							Chat
						</a>
					</div>
					<div className="footer-column">
						<p className="footer-title">Social</p>
						<a href="#" className="footer-link">
							<img src="../assets/facebook.svg"></img>
						</a>
						<a href="#" className="footer-link">
							<img src="../assets/youtube.svg"></img>
						</a>
						<a href="#" className="footer-link">
							<img src="../assets/instagram.svg"></img>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
