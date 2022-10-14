export default function Anchor({ children, invert = false, className, href, ...props }) {
	return (
		<a
			href={href}
			className={`font-fira font-light uppercase text-xs hover:underline ${
				invert ? 'text-black dark:text-night' : 'text-night dark:text-black'
			} ${className}`}
			{...props}
		>
			{children}
		</a>
	);
}
