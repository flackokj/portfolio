import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdRemove, IoIosArrowDown } from 'react-icons/io';
import Head from 'next/head';

import Paragraph from '../src/components/paragraph';
import Title from '../src/components/title';
import Footer from '../src/layouts/footer';
import Navbar from '../src/layouts/navbar';
import Screen from '../src/layouts/screen';
import Divider from '../src/components/divider';
import Image from 'next/image';
import CallToAction from '../src/components/buttons/cta';
import Project from '../src/components/project';

export default function Home() {
	//easter egg
	const easterEggTexts = [
		'world',
		'monde',
		'there?',
		'Welt',
		'kitty?',
		'世界',
		'दुनिया',
		'by lionel richie?',
		'from the other side?',
		'Мир',
		'العالمية',
		'värld',
	];
	const [easterEgg, setEasterEgg] = useState('world');

	const getRandomText = () => {
		const min = 1;
		const max = easterEggTexts.length - 1;
		const number = Math.floor(Math.random() * (max - min + 1)) + min;

		setEasterEgg(easterEggTexts[number]);
	};

	// get footer height
	const [footerHeight, setFooterHeight] = useState(0);
	const footerRef = useRef(null);

	useEffect(() => {
		setFooterHeight(footerRef.current.clientHeight);
	}, []);

	//style
	const contentContainerStyle = {
		'@media (min-width: 640px)': {
			paddingBottom: footerHeight + 'px',
		},
	};

	const contentBottomSpace = {
		'@media (min-width: 640px)': {
			clear: 'both',
			height: footerHeight + 'px',
		},
	};

	return (
		<>
			<Head>
				<title>Flacko KJ</title>
				<meta property='og:title' content='Portfolio' key='Flacko KJ' />
			</Head>
			<Screen>
				<Navbar />

				<div className='relative w-full h-screen flex flex-col justify-center items-center overflow-y-auto scrollbar'>
					<div className='w-full h-full' style={{ paddingBottom: footerHeight + 'px' }}>
						<section className='relative w-full px-3 sm:px-0 sm:w-4/6 h-full m-auto flex flex-col justify-center items-center'>
							<Title className='text-animation flex justify-center items-center text-4xl mb-5 cursor-default'>
								hello <IoIosArrowBack className='inline w-9 h-9 -mr-2' />
								<span onClick={getRandomText}>{easterEgg}</span>
								<IoIosArrowForward className='inline w-9 h-9 -ml-2' />
							</Title>

							<Paragraph invert className='text-center px-3 sm:px-36'>
								{"i'm "}
								<span invert className='font-bold inline underline'>
									kenson
								</span>
								, a passionate, determined, easygoing and motivated web developer who is eager to learn more and likes
								to do a lot if it means having to do less in the future. because a optimized life is what we all want!
							</Paragraph>

							<IoIosArrowDown className='w-10 aspect-square text-black dark:text-night absolute inset-x-0 bottom-20 m-auto animate-bounce' />
						</section>

						<section className='w-full px-3 sm:px-0 sm:w-4/6 h-auto m-auto py-20' id='whoami'>
							<Title invert className='text-center mb-5'>
								who am i?
							</Title>
							<Paragraph invert className='text-center px-3 sm:px-36'>
								{`i'm `} a developer currently working at <span className='font-bold underline'>vsh tech n.v.</span> and
								specialized in web development but broading my horizons with mobile development. with 2+ years of
								experience, {`i'm `} confident that i can help you grow your business.
							</Paragraph>
							<Divider />
							<Paragraph invert className='text-center px-3 sm:px-36'>
								outside my profession i love sports and even though i am not so athletic i try to keep myself updated
								with a couple of them. a adventure seeker so camping is never off the table for me but a movie in the
								middle of the night is not too bad (at all). get some food and let us watch stranger things!
							</Paragraph>
						</section>

						<section className='relative w-full h-auto' id='myskills'>
							<div className='absolute inset-0 w-full h-full overflow-hidden'>
								<div class='scroll-text left'>
									<div>
										javascript <span>php</span> mysql <span>typscript</span> css <span>html </span>
									</div>
									<div>
										javascript <span>php</span> mysql <span>typscript</span> css <span>html </span>
									</div>
								</div>
								<div class='scroll-text right'>
									<div>
										web <span>mobile</span> frontend <span>design</span> backend <span>ux </span>
									</div>
									<div>
										web <span>mobile</span> frontend <span>design</span> backend <span>ux </span>
									</div>
								</div>
								<div class='scroll-text left'>
									<div>
										javascript <span>php</span> mysql <span>typscript</span> css <span>html </span>
									</div>
									<div>
										javascript <span>php</span> mysql <span>typscript</span> css <span>html </span>
									</div>
								</div>
							</div>

							<div className='w-full px-3 sm:px-0 sm:w-4/6 h-full m-auto py-32'>
								<Title invert className='text-center mb-5'>
									my skills
								</Title>

								<div className='w-full h-4 px-3 sm:px-36 overflow-hidden flex justify-center mb-5'>
									<Paragraph invert className=''>
										i have worked with
									</Paragraph>
									<ul class='skillset text-black dark:text-night ml-1 font-fira text-xs font-bold uppercase'>
										<li>react.</li>
										<li>laravel.</li>
										<li>nodejs.</li>
										<li>nextjs.</li>
										<li>sql/nosql.</li>
									</ul>
								</div>

								<Paragraph invert className='text-center px-3 sm:px-36'>
									I love building applications with javascript, {`I'm `} equipped with the right tools and knowledge
									which give me the confidence to be able to work independently. I can deliver scalable and maintainable
									code and not afraid to make mistakes, because i find that {`that's `} the best way to learn for me.{' '}
								</Paragraph>

								<Divider />

								<Paragraph invert className='text-center px-3 sm:px-36'>
									i would say that i am more front-end focused and like to dab my toes in designing because sight is
									after all the {`humans' `} strongest sense. eventhough i may not be the best ux designer i can
									definitely build apps which {`aren't `} only stunning but more importantly functional for the end
									user.
								</Paragraph>
							</div>
						</section>

						<section className='w-full px-3 sm:px-0 sm:w-4/6 h-auto m-auto py-20'>
							<Title invert className='text-center mb-5'>
								projects
							</Title>
							<Paragraph invert className='text-center'>
								enough talk, {`let's `} take a look at some of my best and recent work
							</Paragraph>

							<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-5'>
								<Project
									imgUrl='/img/SC.png'
									imgAlt='Project Smart ConneXXionZ'
									imgWidth={500}
									imgHeight={700}
									projectTitle='Smart ConneXXionZ'
									projectDescription='a beautifully designed ecommerce webapp, rich with helpfull functionalities which makes it enjoyable to shop online.'
									redirectUrl='https://smartconnexxionz.com'
									redirectTitle='Visit website'
								/>
								<Project
									imgUrl='/img/CFF.png'
									imgAlt='Project Center Freight Forwarding'
									imgWidth={500}
									imgHeight={700}
									projectTitle='Center Freight Forwarding'
									projectDescription="The Center Suite; a suite made for shipping needs. This suite can optimize your processes whether you're a freight forwarder, customs agent or carrier."
								/>
								<Project
									imgUrl='/img/CMS.png'
									imgAlt='Project CMS'
									imgWidth={500}
									imgHeight={700}
									projectTitle='Content Management System'
									projectDescription='A great admin tool for updating content of your website. With easy to work with and understandable features, it makes it easy to keep your website looking fresh.'
								/>
								<Project
									imgUrl='/img/TWITTER.png'
									imgAlt='Project Twitter'
									imgWidth={500}
									imgHeight={700}
									projectTitle='Twitter Clone'
									projectDescription='do i need to say more? Just a clone of the famous social media app.'
								/>
							</div>
						</section>

						<div style={{ clear: 'both', height: footerHeight + 'px' }}></div>
					</div>
				</div>

				<Footer ref={footerRef} />
			</Screen>
		</>
	);
}
