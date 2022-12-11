import Image from 'next/image';

const Weather = ({ data }) => {
	return (
		<div className='relative flex flex-col justify-between max-w-[600px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
			<div className='relative flex justify-between py-12 items-center'>
				<div className='flex flex-col items-center'>
					<Image
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt='icon'
						width={100}
						height={100}
					/>
					<p className='text-2xl'>{data.weather[0].main}</p>
				</div>
				<p className='text-7xl'>{data.main.temp.toFixed(0)}&#176;</p>
			</div>
			{/* BOTTOM */}
			<div className='bg-black/30 relative p-8 rounded-md my-20'>
				<p className='text-2xl text-center pb-6'>
					Weather in {data.name}, {data.sys.country}
				</p>
				<div className='flex justify-between text-center'>
					<div>
						<p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
						<p className='text-xl'>Feels Like</p>
					</div>
					<div>
						<p className='font-bold text-2xl'>{data.main.humidity}&#x25;</p>
						<p className='text-xl'>Humidity</p>
					</div>
					<div>
						<p className='font-bold text-2xl'>{data.wind.speed.toFixed(1)} MPH</p>
						<p className='text-xl'>Wind Speed</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
