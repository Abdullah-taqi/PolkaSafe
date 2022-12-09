// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { PolkadotIcon } from 'src/ui-components/CustomIcons';

const { Footer: AntdFooter } = Layout;

const Footer = () => {
	return (
		<AntdFooter className='bg-white flex flex-row items-center p-0 lg:h-[60px] shadow-top'>
			<div className='hidden lg:block w-[200px]'></div>
			<section className='px-4 lg:px-8 flex-1 flex flex-col lg:items-center lg:flex-row lg:justify-between gap-x-2 py-4 gap-y-3'>
				<div className='flex gap-2 md:gap-4 items-center justify-between'>
					<p className='hidden md:block'>
						<sup>&#169;</sup>
						All Rights Reserved
					</p>
					<Link to='/'>
						Terms and Conditions
					</Link>
					<Link to='/'>
						Privacy Policy
					</Link>
				</div>
				<p className='flex items-center gap-x-2'>
					<PolkadotIcon className='text-sm'/>
					<span className='text-sm'>Built by grants from Polkadot Treasury</span>
				</p>
				<p className='md:hidden'>
					<sup>&#169;</sup>
					All Rights Reserved
				</p>
			</section>
		</AntdFooter>
	);
};

export default Footer;