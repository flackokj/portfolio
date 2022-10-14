import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import React, { useState, useEffect, forwardRef } from 'react';

import Heading from '../components/heading';
import Anchor from '../components/anchor';
import Paragraph from '../components/paragraph';

function Footer({ children, ...props }, ref) {
	dayjs.extend(utc);
	dayjs.extend(timezone);
	dayjs.tz.setDefault('America/Paramaribo');

	const currentDatTime = () => {
		return `${checkDigit(dayjs().hour())}:${checkDigit(dayjs().minute())}`;
	};

	const checkDigit = (number) => {
		return number < 10 ? `0${number}` : `${number}`;
	};

	const [date, setDate] = useState(currentDatTime());
	useEffect(() => {
		setInterval(() => setDate(currentDatTime()));
	}, []);

	return (
		<div
			className='relative sm:fixed sm:bottom-0 w-full h-auto bg-black dark:bg-night flex flex-col sm:flex-row p-10'
			ref={ref}
			{...props}
		>
			<div className='w-1/2 sm:w-1/5 flex flex-col'>
				<Heading>kenson latchmansing</Heading>
				<Paragraph>flackokj</Paragraph>
			</div>
			<div className='w-1/2 sm:w-1/5 flex flex-col mt-5 sm:mt-0'>
				<Heading>{"let's"} talk!</Heading>
				<Anchor href='https://linkedin.com/in/kensonlatchmansing' target='_blank'>
					linkedin
				</Anchor>
				<Anchor href='https://github.com/flackokj' target='_blank'>
					github
				</Anchor>
				<Anchor href='mailto:latchmansingkenson@gmail.com'>email</Anchor>
			</div>
			<div className='w-1/2 sm:w-1/5 flex flex-col mt-5 sm:mt-0'>
				<Heading>based in</Heading>
				<Paragraph>wanica</Paragraph>
				<Paragraph>Suriname (South America)</Paragraph>
				<Paragraph>{date} (UTC-3)</Paragraph>
			</div>
		</div>
	);
}

export default forwardRef(Footer);
