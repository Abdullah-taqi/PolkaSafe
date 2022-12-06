// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';

function App() {
	return (
		<BrowserRouter>
			<AppLayout />
		</BrowserRouter>
	);
}

export default App;
