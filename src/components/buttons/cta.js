import Paragraph from '../paragraph';

export default function CallToAction({ icon, title, children }) {
	return (
		<button className='hover:underline text-army dark:text-white w-max inline-flex flex-row jsutify-center items-center'>
			<span className='w-7 aspect-square mr-2 flex justify-center items-center bg-[#0f3d3e22] dark:bg-transparent rounded-full'>
				{icon}
			</span>
			<Paragraph invert className=''>
				{title}
			</Paragraph>
		</button>
	);
}
