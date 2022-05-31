import { h } from 'preact';
import { Router } from 'preact-router';

import { Banner } from './banner';
import { Navbar } from './navbar';
import { Main } from './main/main';

export default () => (
	<div id="app">
		<Banner></Banner>
		<Navbar></Navbar>
		<Main></Main>
	</div>
);
