import '../../../style/main/content.css';
import { InfoBox } from '../../infoBox';

export function Content() {
	return (
		<>
			<div className="content">
				<h1 className="c-title">Getting Started</h1>
				<hr></hr>
				<div className="c-content">
					<h2>No build tools route</h2>
					<p>Preact is packaged to be used directly in the browser, and doesn't require any build or tools:</p>
					<InfoBox></InfoBox>
					<div className="code">
						<code>
							<span className="punc">&lt;</span>
							<span className="tag">script</span>
							<span className="punc">&gt;</span>
							<br></br>
							<span className="nest">
								<span className="keyword">import </span>
								<span className="punc">&#123; h, Component, render &#125;</span>
								<span className="keyword"> from</span>
								<span className="string"> "https://unpkg.com/preact?module\"</span>
								<span className="punc">;</span>
								<br></br>
								<br></br>
								<span className="comment nest">// Create your app</span>
								<br></br>
								<span className="keyword nest">const </span>
								<span className="punc">app </span>
								<span className="op">= </span>
								<span className="func">h</span>
								<span className="punc">&#40;</span>
								<span className="string">"h1"</span>
								<span className="punc">,</span>
								<span className="keyword">null</span>
								<span className="punc">,</span>
								<span className="string">"Hello World!"</span>
								<span className="punc">&#41;</span>
								<span className="punc">;</span>
								<br></br>
								<span className="func nest">render</span>
								<span className="punc">&#40;</span>
								<span className="punc">app, </span>
								<span className="punc">document.body</span>
								<span className="punc">&#41;</span>
								<span className="punc">;</span>
							</span>
							<br></br>
							<span className="punc">&lt;</span>
							<span className="punc">/</span>
							<span className="tag">script</span>
							<span className="punc">&gt;</span>
						</code>
					</div>
					<h2>No build tools route</h2>
					<p>Preact is packaged to be used directly in the browser, and doesn't require any build or tools:</p>
					<div className="code">
						<code>
							<span className="punc">&lt;</span>
							<span className="tag">script</span>
							<span className="punc">&gt;</span>
							<br></br>
							<span className="nest">
								<span className="keyword">import </span>
								<span className="punc">&#123; h, Component, render &#125;</span>
								<span className="keyword"> from</span>
								<span className="string"> "https://unpkg.com/preact?module\"</span>
								<span className="punc">;</span>
								<br></br>
								<br></br>
								<span className="comment nest">// Create your app</span>
								<br></br>
								<span className="keyword nest">const </span>
								<span className="punc">app </span>
								<span className="op">= </span>
								<span className="func">h</span>
								<span className="punc">&#40;</span>
								<span className="string">"h1"</span>
								<span className="punc">,</span>
								<span className="keyword">null</span>
								<span className="punc">,</span>
								<span className="string">"Hello World!"</span>
								<span className="punc">&#41;</span>
								<span className="punc">;</span>
								<br></br>
								<span className="func nest">render</span>
								<span className="punc">&#40;</span>
								<span className="punc">app, </span>
								<span className="punc">document.body</span>
								<span className="punc">&#41;</span>
								<span className="punc">;</span>
							</span>
							<br></br>
							<span className="punc">&lt;</span>
							<span className="punc">/</span>
							<span className="tag">script</span>
							<span className="punc">&gt;</span>
						</code>
					</div>
				</div>
			</div>
		</>
	);
}
