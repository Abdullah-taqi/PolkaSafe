// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		// add the paths to all of your template files
		'./src/*.{jsx,tsx}',
		'./src/**/*.{jsx,tsx}'
	],
	important: true, // to generate utilities as !important
	plugins: [],
	theme: {
		extend: {
			boxShadow: {
				'large': '-3px 4px 10px #CAC9F9',
				'small': '-2px 3px 6px #CAC9F9'
			},
			colors: {
				black_full: '#000',
				black_primary: 'rgba(0, 0, 0, 0.9)',
				black_text: '#1F1F1F',
				blue_primary: '#645ADF',
				blue_secondary: '#CAC9F9',
				gray_primary: '#f6f7ff',
				gray_primary1: '#FBFAFC',
				gray_secondary: '#F5F5F5'
			},
			fontFamily: {
				// add new font family
				primary: ['DM Sans']
			}
		}
	}
};
