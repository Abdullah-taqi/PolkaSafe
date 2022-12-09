// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Layout } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import NavHeader from './NavHeader';
import SwitchRoutes from './SwitchRoutes';

const { Content, Sider } = Layout;

const AppLayout = ({ className } : { className?: string }) => {
	const [sideDrawer, setSideDrawer] = useState(false);
	return (
		<Layout className={className}>
			<NavHeader setSideDrawer={setSideDrawer} sideDrawer={sideDrawer} />
			<Layout hasSider>
				<Sider
					trigger={null}
					collapsible={false}
					collapsed={true}
					className={'hidden overflow-y-hidden sidebar bg-white lg:block top-0 bottom-0 left-0 h-screen fixed z-40 w-full max-w-[275px] sider-shadow'}
				>
					Sider
				</Sider>
				<Layout className='min-h flex flex-row p-0'>
					<div className='hidden lg:block w-[275px]'></div>
					<Content className='bg-purple_app_bg'>
						<SwitchRoutes/>
					</Content>
				</Layout>
			</Layout>
			<Footer/>
		</Layout>
	);
};

export default styled(AppLayout)`
	background: transparent !important;
	.min-h {
		min-height: calc(100vh - 120px);
	}
	.sider-shadow {
		box-shadow: -2px 4px 4px rgba(63, 102, 153, 0.5);
	}
`;