const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				width={'100%'}
				className="w-[100%] border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
