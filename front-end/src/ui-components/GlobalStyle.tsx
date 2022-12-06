// Copyright 2022-2023 @Abdullah-taqi/PolkaSafe authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import 'src/themes/app.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1; 
	}
	
	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888; 
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555; 
	}

	body {
			margin: 0;
			font-family: font_default, 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
					'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
					sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			background-color: grey_app_background;
			color: black_text;
			scroll-behavior: smooth;
	}

	ul, ol {
    list-style: revert !important;
  }

	pre {
			display: inline-block;
			max-width: 100%;
			white-space: pre-wrap;
			background-color: grey_light;
	}

	code {
			display: inline-block;
			max-width: 100%;
			font-family: font_mono, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
			background-color: grey_light;
			color: black_primary;
			font-size: sm;
	}

	ul {
			padding: 0;
	}

	p {
			a {
					color: pink_primary;
					&:hover {
							color: pink_secondary;
					}
			}
	}

	a:hover {
			text-decoration: none;
	}

	::selection {
			background-color: black_primary;
			color: white;
	}

	.dashboard-heading {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		color: nav_blue;
	}

	.ant-btn-primary {
		color: pink_primary !important;

		&:hover, &:focus, &:active{
			color: #fff !important;
		}

		&[disabled] {
			color: grey !important;
		}
	}

	.ant-form-item-explain-error {
		margin-top: 0.3em !important;
		margin-bottom: 1em !important;
	}

	.ant-switch {
		background: #CED4DE !important;
	}

	.ant-switch-checked{
		background-color: pink_primary !important;
	}

	.ant-segmented-item-selected .ant-segmented-item-label {
		color: pink_primary !important;
	}


	.ant-modal-header {
		border-radius: 10px 10px 0 0;
	}

	.ant-modal-content {
		border-radius: 10px;
	}

	.ant-tabs-tab-bg-white .ant-tabs-tab:not(.ant-tabs-tab-active) {
		background-color: white;
		border-top-color: white;
		border-left-color: white;
		border-right-color: white;
		border-bottom-color: #E1E6EB;
	}
	.ant-tabs-tab-bg-white .ant-tabs-tab-active{
		border-top-color: #E1E6EB;
		border-left-color: #E1E6EB;
		border-right-color: #E1E6EB;
		border-radius: 6px 6px 0 0 !important;
	}
	.ant-tabs-tab-bg-white .ant-tabs-nav:before{
		border-bottom: 1px solid #E1E6EB;
	}

	.ant-menu-submenu-popup {
		display: none !important;
	}
`;
