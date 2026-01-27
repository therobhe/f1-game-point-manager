/**
 * Header component for the Landing Page.
 * This component displays a stylized header with a gradient background effect
 * and a title for the F1 2014 Season Manager.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
	return (
		<div className="relative mb-8 group cursor-default">
			<div
				className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
			<h1
				className="text-center relative text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12">
				F1 2014
				<span
					className="block text-2xl md:text-3xl font-bold tracking-widest text-red-500 mt-2 not-italic skew-x-0">
						Season Manager
					</span>
			</h1>
		</div>
	);
};

export default Header;
