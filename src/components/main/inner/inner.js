import '../../../style/main/inner.css';

import { Content } from './content';
import { Footer } from './footer';
import { Panel } from './panel';

export function Inner() {
	return (
		<>
			<div className="inner-content">
				<div className="main-page-content">
					{/* <div className="panel">PANEL CONTENT</div> */}
					<Content></Content>
					<Panel></Panel>
				</div>
				<Footer></Footer>
			</div>
		</>
	);
}
