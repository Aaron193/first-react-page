import '../../../style/main/inner.css';

import { Content } from './content';
import { Footer } from './footer';

export function Inner() {
	return (
		<>
			<div className="inner-content">
				<div className="main-page-content">
					{/* <div className="panel">PANEL CONTENT</div> */}
					<Content></Content>
					<div className="panel">PANEL CONTENT</div>
				</div>
				<Footer></Footer>
			</div>
		</>
	);
}
