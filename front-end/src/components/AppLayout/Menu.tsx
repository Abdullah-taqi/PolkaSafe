// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AddressBookIcon, AppsIcon, AssetsIcon, HomeIcon, MenuIcon, MultisigLockIcon, PolkasafeLogoIcon, PolkasafeTextIcon, SettingsIcon, TransactionIcon } from 'src/ui-components/CustomIcons';
import styled from 'styled-components';

const menuItems = [
	{
		icon: <HomeIcon/>,
		key: '/',
		title: 'Home'
	},
	{
		icon: <AssetsIcon/>,
		key: '/assets',
		title: 'Assets'
	},
	{
		icon: <TransactionIcon/>,
		key: '/transactions',
		title: 'Transactions'
	},
	{
		icon: <AddressBookIcon/>,
		key: '/address-book',
		title: 'Address Book'
	},
	{
		icon: <AppsIcon/>,
		key: '/apps',
		title: 'Apps'
	},
	{
		icon: <SettingsIcon/>,
		key: '/settings',
		title: 'Settings'
	}
];

interface Props {
    className?: string;
}

const Menu: FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<section>
				<Link to='/'>
					<p className='flex items-center gap-x-2 overflow-hidden justify-center'>
						<PolkasafeLogoIcon className='text-[42px]'/>
						<PolkasafeTextIcon className='text-[100px]'/>
					</p>
				</Link>
			</section>
			<section>
				<h2 className='px-6 flex items-center gap-x-2'>
					<MenuIcon className='text-lg' />
					<span className='font-bold text-lg'>Menu</span>
				</h2>
				<ul className='flex flex-col gap-y-0 py-2'>
					{
						menuItems.map((item) => {
							return <li className='w-full pr-5' key={item.key}>
								<Link className='flex items-center gap-x-3 menu-item-active' to={item.key} >
									<p className='w-[5px] h-9'></p>
									<p className='px-3 py-2.5 font-bold text-base text-blue_secondary flex items-center gap-x-2 flex-1 rounded-md'>
										{item.icon}
										{item.title}
									</p>
								</Link>
							</li>;
						})
					}
				</ul>
			</section>
			<section>
				<h2 className='px-6 flex items-center gap-x-2'>
					<MultisigLockIcon className='text-lg' />
					<span className='font-bold text-lg'>Your Multisigs</span>
				</h2>
			</section>
		</div>
	);
};

export default styled(Menu)`
    background-color: white;
    .menu-item-active:focus {
        p:first-child {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            background-color: #645ADF !important;
        }
        p:last-child {
            background-color: #FBFAFC !important;
            box-shadow: -2px 3px 6px #CAC9F9;
            color: #645ADF !important;
            span {
                color: #645ADF !important;
            }
        }
    }
`;