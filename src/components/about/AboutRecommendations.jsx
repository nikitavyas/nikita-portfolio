import { useContext, useState } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';
import { Link } from 'react-router-dom';
import Button from '../reusable/Button';

const AboutRecommendations = () => {
	const { recommendationData,recommendationHeading } = useContext(AboutMeContext);
	const [length,setLength] = useState(2)
	const [show,setShow] = useState(false)
	//className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{recommendationHeading}
			</p>
			<div className="grid grid-cols-6 sm:grid-cols-6 mt-6 sm:mt-8 gap-2">
				{recommendationData.map((client,index) => (
					index <= length &&
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
			<div className="mt-8 sm:mt-10 flex justify-center">
				<Button className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl 
				bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
 title={show ? 'View Less' : 'View More'}  onClick={() => {
					setLength(show ? 2 : recommendationData.length)
					setShow(!show)
				}} />
			</div>
		</div>
	);
};

export default AboutRecommendations;
