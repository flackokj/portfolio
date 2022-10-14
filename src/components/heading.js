export default function Heading({ children, invert = false, className }) {
	return (
		<h1
			className={`font-fira font-semibold uppercase text-xs ${
				invert ? 'text-black dark:text-night' : 'text-night dark:text-black'
			} ${className}`}
		>
			{children}
		</h1>
	);
}
