import '../../../style/main/panel.css';
import React from 'react';

export function Panel() {
	return (
		<div className="panel-container">
			<div className="panel">
				<div className="panel-headder">
					<h3>Need Help?</h3>
					<div className="panel-component">
						<div className="panel-chat">
							<h5>Come Chat with us</h5>
							<button>Chat Now</button>
						</div>
					</div>
					<div className="panel-component">
						<div className="panel-chat">
							<h5>Join The Community</h5>
							<button>Join</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
