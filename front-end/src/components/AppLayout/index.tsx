// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Drawer, Layout } from 'antd';
import React, { useState } from 'react';

import Footer from './Footer';
import NavHeader from './NavHeader';
import SwitchRoutes from './SwitchRoutes';

const { Content, Sider } = Layout;

const AppLayout = () => {
	const [sideDrawer, setSideDrawer] = useState<boolean>(false);

	return (
		<Layout>
			<Layout hasSider>
				<Sider
					className='hidden lg:block'
				>
				</Sider>
				<Drawer placement='left' closable={false} onClose={() => setSideDrawer(false)} open={sideDrawer} getContainer={false} style={{ bottom:0, left:0, position: 'fixed', top: '60px' }}>
				</Drawer>
				<Layout>
					<NavHeader sideDrawer={sideDrawer} setSideDrawer={setSideDrawer} />
					<Content
						style={{
							minHeight: 'calc(100vh - 60px - 60px)'
						}}
						className='bg-gray_primary'
					>
						<SwitchRoutes/>
					</Content>
					<Footer />
				</Layout>
			</Layout>
		</Layout>
	);
};

export default AppLayout;