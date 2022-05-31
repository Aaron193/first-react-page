import '../../style/main/sidebar.css';

export function Sidebar() {
	return (
		<>
			<div className="sidebar">
				<aside side className="sb-aside">
					<nav className="sb-nav">
						<div className="sb-version">
							<label>Version: </label>
							<select className="sb-v-select">
								<option>10.x (current)</option>
								<option>8.x</option>
							</select>
						</div>
						<hr></hr>
						<h3 className="sb-category">Introduction</h3>
						<div className="sb-link-container">
							<a href="#" className="sb-link">
								Getting Started
							</a>
							<a href="#" className="sb-link">
								What's New?
							</a>
							<a href="#" className="sb-link">
								Upgrading from 8.x
							</a>
							<a href="#" className="sb-link">
								Tutorial
							</a>
						</div>
						<h3 className="sb-category">Essentials</h3>
						<div className="sb-link-container">
							<a href="#" className="sb-link">
								Components
							</a>
							<a href="#" className="sb-link">
								Hooks
							</a>
							<a href="#" className="sb-link">
								Upgrading from 8.x
							</a>
							<a href="#" className="sb-link">
								Forms
							</a>
							<a href="#" className="sb-link">
								References
							</a>
							<a href="#" className="sb-link">
								Context
							</a>
						</div>
						<h3 className="sb-category">Debug & Test</h3>
						<div className="sb-link-container">
							<a href="#" className="sb-link">
								Debugging Tools
							</a>
							<a href="#" className="sb-link">
								Preact Testing Library
							</a>
							<a href="#" className="sb-link">
								Unit Testing with Enzyme
							</a>
						</div>
						<h3 className="sb-category">React Compatibility</h3>
						<div className="sb-link-container">
							<a href="#" className="sb-link">
								Differences to React
							</a>
							<a href="#" className="sb-link">
								Switching to Preact
							</a>
						</div>
						<h3 className="sb-category">ADVANCED</h3>
						<div className="sb-link-container">
							<a href="#" className="sb-link">
								API References
							</a>
							<a href="#" className="sb-link">
								Web Components
							</a>
							<a href="#" className="sb-link">
								Progressive Web Apps
							</a>
							<a href="#" className="sb-link">
								Server-Side Rendering
							</a>
							<a href="#" className="sb-link">
								External DOM Mutations
							</a>
							<a href="#" className="sb-link">
								Option Hooks
							</a>
							<a href="#" className="sb-link">
								Typescript
							</a>
						</div>
					</nav>
				</aside>
			</div>
		</>
	);
}
