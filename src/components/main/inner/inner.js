import '../../../style/main/inner.css';

import { Content } from './content';
import { Footer } from './footer';

export function Inner() {
	return (
		<>
			<div className="inner-content">
				<Content></Content>
				<Footer></Footer>
			</div>
		</>
	);
}
