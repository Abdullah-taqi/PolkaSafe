// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { ReactNode } from 'react';

interface Props {
	className?: string;
	children: ReactNode;
	onClick: () => void;
}

const PrimaryButton = ({ className, children, onClick } : Props) => {
	return (
		// TODO: Implement transition for bg and text color
		<button className={`${className} text-xl font-bold rounded-lg bg-tertiary hover:bg-primary text-primary hover:text-white shadow-secondary px-2 py-3`} onClick={onClick}>
			{children}
		</button>
	);
};

export default PrimaryButton;