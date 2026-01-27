/**
 * Motivation component for the Landing Page.
 * This component explains the purpose behind the creation of the F1 2014 Season Manager tool.
 *
 * @component
 * @returns {JSX.Element} The rendered Motivation component.
 */
const Motivation = () => {
	return (
		<div className="bg-[#1a1a1a]/50 border border-gray-800 rounded p-6 mb-8 text-gray-300 leading-relaxed">
			<h2 className="text-white font-bold text-lg mb-3">Why does this tool exist?</h2>
			<p className="mb-3">
				I loved playing split-screen seasons with my little brother in F1 2011. At the time my Xbox 360 died, F1
				2014
				was the only F1 title available on Xbox One that featured split-screen mode.
			</p>
			<p className="mb-3">
				However, we were shocked that could only do one race before returning back to main menu, effectively killing
				the season aspect in F1 2014.
			</p>
			<p className="mb-3">
				So I coded this app.... and never made it public. But if there is just one soul searching for something like
				this - here you go!
			</p>
		</div>
	);
};

export default Motivation;
