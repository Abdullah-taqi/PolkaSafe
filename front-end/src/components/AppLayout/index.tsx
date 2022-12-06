// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Layout } from 'antd';
import React from 'react';

import SwitchRoutes from './SwitchRoutes';

const { Content } = Layout;

const AppLayout = () => {
	return (
		<Layout>
			<Content>
				<SwitchRoutes/>
			</Content>
		</Layout>
	);
};

export default AppLayout;