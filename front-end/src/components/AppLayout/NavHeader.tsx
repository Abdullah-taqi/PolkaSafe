// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BellOutlined, DollarCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import AddressDropdown from 'src/ui-components/AddressDropdown';
import NetworkDropdown from 'src/ui-components/NetworkDropdown';

import PolkaSafeLogo from './PolkasafeLogo';

interface NavHeaderProps {
	className?: string
	sideDrawer: boolean
	setSideDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const NavHeader: FC<NavHeaderProps> = ({ setSideDrawer, sideDrawer }) => {
	return (
		<Header className='flex items-center bg-gray_primary h-[60px] max-h-[60px]'>
			<MenuOutlined className='lg:hidden' onClick={() => {
				setSideDrawer(!sideDrawer);
			}} />
			<nav className='flex justify-between lg:justify-end w-full'>
				<PolkaSafeLogo className='lg:hidden' />
				<div className='flex items-center gap-x-2'>
					<Link className='text-blue_secondary hover:text-blue_primary text-2xl flex justify-center items-center' to='/notification'>
						<BellOutlined />
					</Link>
					<Link className='flex items-center gap-x-2 py-1 px-2 text-blue_primary font-bold text-base shadow-small rounded-md' to='/donate'>
						<span>Donate</span>
						<DollarCircleOutlined />
					</Link>
					<div className='shadow-small rounded-md text-blue_primary flex text-base'>
						<AddressDropdown/>
						<div className='h-full w-[1px] bg-blue_secondary items-stretch min-h-[30px]'></div>
						<NetworkDropdown/>
					</div>
				</div>
			</nav>
		</Header>
	);
};

export default NavHeader;