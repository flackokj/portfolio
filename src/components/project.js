import Image from 'next/image';
import CallToAction from './buttons/cta';
import Divider from './divider';
import Paragraph from './paragraph';
import { IoIosArrowForward } from 'react-icons/io';
import Anchor from '../components/anchor';

export default function Project({
	imgUrl,
	imgWidth,
	imgHeight,
	imgAlt,
	projectTitle,
	projectDescription,
	redirectUrl,
	redirectTitle,
}) {
	return (
		<div className='w-full h-auto flex flex-col'>
			<div className=''>
				<Image src={imgUrl} alt={imgAlt} width={imgWidth} height={imgHeight} />
			</div>
			<div className='w-full py-5'>
				<Paragraph invert className='text-center text-sm font-semibold'>
					{projectTitle}
				</Paragraph>
				<Divider />
				<Paragraph invert className='text-center'>
					{projectDescription}
				</Paragraph>
			</div>
			<div className='w-full flex flex-row justify-center items-center'>
				{redirectUrl && (
					<Anchor href={redirectUrl} target='_blank'>
						<CallToAction icon={<IoIosArrowForward />} title={redirectTitle} />
					</Anchor>
				)}
			</div>
		</div>
	);
}
