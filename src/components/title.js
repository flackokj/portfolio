export default function Title({ children, invert = false, className }) {
	return (
		<h1
			className={`font-fira font-semibold uppercase text-xl ${
				invert ? 'text-black dark:text-night' : 'text-night dark:text-black'
			} ${className}`}
		>
			{children}
		</h1>
	);
}
