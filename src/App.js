import { useEffect, useRef, useState } from 'react';


function App() {
	const hourHand = useRef();
	const minHand = useRef();
	const secHand = useRef();
	const [timestamp, setTimestamp] = useState("");

	function runClock() {
		const d = new Date(); //object of date()
		const hr = d.getHours();
		const min = d.getMinutes();
		const sec = d.getSeconds();
		const hr_rotation = 30 * hr + min / 2; //converting current time
		const min_rotation = 6 * min;
		const sec_rotation = 6 * sec;

		setTimestamp(d);

		hourHand.current.style.transform = `rotate(${hr_rotation}deg)`;
		minHand.current.style.transform = `rotate(${min_rotation}deg)`;
		secHand.current.style.transform = `rotate(${sec_rotation}deg)`;
	}

	useEffect(() => {
		runClock();
		setInterval(runClock, 300);
	}, []);


	return (
		<div className="App">
			<header className="App-header">
				<div className="clock">
					<span ref={hourHand} className="hour"></span>
					<span ref={minHand} className="min"></span>
					<span ref={secHand} className="sec"></span>
				</div>
				<p><code>{timestamp.toString()}</code></p>
			</header>
		</div>
	);
}

export default App;
