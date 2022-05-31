import { useState, useEffect } from 'preact/hooks';

export function Navbar() {
	const [currentPage, setPage] = useState('');

	useEffect(() => {
		setPage(location.pathname);
	}, []);

	function imOnPage(page) {
		return currentPage.includes(page.trim());
	}

	return (
		<>
			<nav className="navbar">
				<div className={currentPage.includes('home'.trim()) ? 'nav-current nav-btn' : 'nav-btn'}>
					<img style=" margin-right: 5px;" src="../assets/logo.svg"></img>
					<a className="nav-link" href="/home">
						PREACT
					</a>
				</div>
				<div className={imOnPage('tutorial') ? 'nav-current nav-btn' : 'nav-btn'}>
					<a className="nav-link" href="/tutorial">
						Tutorial
					</a>
				</div>
				<div className={imOnPage('guide') ? 'nav-current nav-btn' : 'nav-btn'}>
					<a className="nav-link" href="/guide">
						Guide
					</a>
				</div>
				<div className="nav-btn">
					<a className="nav-link" href="/about">
						About ▼
					</a>
				</div>
				<div className="nav-btn">
					<a className="nav-link" href="/cli">
						CLI ▼
					</a>
				</div>
				<div className={imOnPage('repl') ? 'nav-current nav-btn' : 'nav-btn'}>
					<a className="nav-link" href="/repl">
						REPL
					</a>
				</div>
				<input type="search" className="nav-search" placeholder="Search..." />
				<div className={imOnPage('version') ? 'nav-current nav-btn' : 'nav-btn'}>
					<a className="nav-link" href="/version">
						v10.7.2
					</a>
				</div>
				<div className="nav-btn">
					<img src="../assets/github.svg"></img>
				</div>
				<div className="nav-btn">
					<img src="../assets/twitter.svg"></img>
				</div>
			</nav>
		</>
	);
}
