// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Layout } from 'antd';
import React from 'react';

const { Footer: AntdFooter } = Layout;

const Footer = () => {
	return (
		<AntdFooter className='bg-white flex flex-row items-center p-0 h-[60px]'>
			<div className='hidden lg:block w-[275px]'></div>
			<div className='px-8 flex-1'>
				Footer
			</div>
		</AntdFooter>
	);
};

export default Footer;