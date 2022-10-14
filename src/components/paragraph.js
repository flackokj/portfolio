export default function Paragraph({ children, invert = false, className }) {
	return (
		<p
			className={`font-fira font-light uppercase text-xs ${
				invert ? 'text-black dark:text-night' : 'text-night dark:text-black'
			} ${className}`}
		>
			{children}
		</p>
	);
}
