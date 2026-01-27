/**
 * Feature section of the Landing Page.
 * This component explains the purpose behind the creation of the F1 2014 Season Manager tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Motivation component.
 */
const Features = () => {
	return (
		<div className="bg-[#1a1a1a]/50 border border-gray-800 rounded p-6 mb-8">
			<h2 className="text-white font-bold text-lg mb-3">Features</h2>
			<ul className="text-gray-300 space-y-2 text-sm">
				<li className="flex items-start">
					<span className="text-green-500 mr-2">✓</span>
					<span>Track the official 2014 season calendar or create your custom calendar</span>
				</li>
				<li className="flex items-start">
					<span className="text-green-500 mr-2">✓</span>
					<span>You can choose between 3 different point systems</span>
				</li>
				<li className="flex items-start">
					<span className="text-green-500 mr-2">✓</span>
					<span>Free, no ads, no tracking, no data stored, no account required, runs in your browser</span>
				</li>
				<li className="flex items-start">
					<span className="text-green-500 mr-2">✓</span>
					<span>Source code available on <a href="https://github.com/therobhe/f1-game-point-manager" target="_blank"
					                                  rel="noopener noreferrer"
					                                  className="text-blue-400 hover:text-blue-300 underline">GitHub</a></span>
				</li>
			</ul>
		</div>
	);
};

export default Features;
