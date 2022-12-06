// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { styledTheme } from 'src/themes/styledTheme';
import { ThemeProvider } from 'styled-components';

import AppLayout from './components/AppLayout';
import { antdTheme } from './themes/antdTheme';
import { GlobalStyle } from './ui-components/GlobalStyle';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={styledTheme}>
				<ConfigProvider theme={antdTheme}>
					<GlobalStyle/>
					<AppLayout />
				</ConfigProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
