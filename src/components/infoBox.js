// import { useState } from 'preact/hooks';
import '../style/infoBox.css';

export function InfoBox() {
	return (
		<>
			<div className="infoBox">
				<p>
					For a full list of all available commands, check out the <a href="#">Preact CLI Documentation.</a>
				</p>
			</div>
		</>
	);
}
