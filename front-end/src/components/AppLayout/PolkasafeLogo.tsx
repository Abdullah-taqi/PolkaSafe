// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface PolkaSafeLogoProps {
    className?: string;
}

const PolkaSafeLogo: FC<PolkaSafeLogoProps> = ({ className }) => {
	return (
		<Link className={`flex ${className}`} to='/'>
            PolkaSafe
		</Link>
	);
};

export default PolkaSafeLogo;