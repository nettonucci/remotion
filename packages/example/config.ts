import * as remotion from '@remotion/bundler';

remotion.overrideWebpackConfig((currentConfiguration) => {
	return {
		...currentConfiguration,
		module: {
			...currentConfiguration.module,
			rules: [
				...currentConfiguration.module.rules,
				{
					test: /\.mdx?$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									'@babel/preset-env',
									[
										'@babel/preset-react',
										{
											runtime: 'automatic',
										},
									],
								],
							},
						},
						'mdx-loader',
					],
				},
			],
		},
	};
});