import '../../style/main/main.css';

import { Sidebar } from './sidebar';
import { Inner } from './inner/inner';

export function Main() {
	return (
		<>
			<main className="main">
				<Sidebar></Sidebar>
				<Inner></Inner>
			</main>
		</>
	);
}
