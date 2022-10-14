import Anchor from '../components/anchor';
import Title from '../components/title';

export default function Navbar() {
	return (
		<div className='hidden sm:flex absolute z-20 m-10 top-0 left-0 w-1/6 h-auto flex-col'>
			<Title invert className='mb-10'>
				kenson latchmansing
			</Title>
			<Anchor href='#whoami' invert>
				who am i
			</Anchor>
			<Anchor href='#myskills' invert>
				my skills
			</Anchor>
			<Anchor href='#projects' invert>
				projects
			</Anchor>
			<Anchor href='#more' invert>
				more...
			</Anchor>
		</div>
	);
}
