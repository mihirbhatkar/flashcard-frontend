import { useState, useRef } from "react";
import { GoHome } from "react-icons/go";
import {
	IoIosArrowForward,
	IoIosArrowBack,
	IoIosArrowDown,
} from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import {
	MdVolumeUp,
	MdVolumeOff,
	MdOutlineReplay,
	MdOutlineLightbulb,
} from "react-icons/md";
import { CgMaximize } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="flex gap-5 justify-between px-0.5 w-full text-lg whitespace-nowrap text-neutral-700 max-md:flex-wrap max-md:max-w-full">
			<Link>
				<img
					src="hyggex.png"
					alt="Logo"
					className="shrink-0 my-auto max-w-full w-48"
				/>
			</Link>
			<nav className="flex gap-4 md:gap-10 justify-between items-center max-md:flex-wrap">
				<ul className="flex gap-4 md:gap-10 justify-between self-stretch my-auto">
					<Link className="hover:opacity-75">Home</Link>
					<Link className="hover:opacity-75">Flashcard</Link>
					<Link className="hover:opacity-75">Contact</Link>
					<Link className="hover:opacity-75">FAQ</Link>
				</ul>
				<Link className="hover:opacity-75 justify-center self-stretch px-10 py-2 font-medium text-white bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-[32px] max-md:px-5">
					Login
				</Link>
			</nav>
		</header>
	);
}

function StudyNav() {
	const items = ["Study", "Quiz", "Test", "Game", "Others"];
	const [selectedItem, setSelectedItem] = useState(items[0]);

	const handleItemClick = (item) => {
		setSelectedItem(item);
	};

	return (
		<nav className="flex gap-5 justify-center self-center mt-14 text-xl font-medium whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:mt-10">
			{items.map((item, index) => (
				<div
					key={index}
					className={`flex flex-col ${
						selectedItem === item
							? "border-b-blue-950 border-b-4 font-bold"
							: ""
					} justify-center`}
				>
					<button
						onClick={() => handleItemClick(item)}
						className={`px-3 pb-3.5 ${
							selectedItem === item ? "text-blue-950" : ""
						}`}
					>
						{item}
					</button>
				</div>
			))}
		</nav>
	);
}

function Flashcard() {
	const equations = [
		"9 + 6 + 7x - 2x - 3",
		"5x - 8 + 2x + 3",
		"3x + 5 - 2x - 7",
		"4x - 2 + 3x + 9",
		"2x + 8 - 5x + 4",
		"6x - 3 - 2x + 7",
		"8x + 5 - 3x - 9",
		"9x - 4 + 7x + 2",
		"7x - 5 + 4x - 3",
		"3x + 6 - 4x + 8",
	];

	const [currentEquationIndex, setCurrentEquationIndex] = useState(0);
	const [volume, setVolume] = useState(true);

	const goToPreviousEquation = () => {
		if (currentEquationIndex > 0) {
			setCurrentEquationIndex(currentEquationIndex - 1);
		}
	};

	const goToNextEquation = () => {
		if (currentEquationIndex < equations.length - 1) {
			setCurrentEquationIndex(currentEquationIndex + 1);
		}
	};

	return (
		<>
			<div className="flex flex-col self-center px-9 pt-9 pb-20 mt-8 max-w-full bg-gradient-to-bl from-[#051A91] to-[#2284F1] rounded-[42px] w-[712px] max-md:px-5">
				<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
					<button>
						<MdOutlineLightbulb className="text-white text-3xl hover:opacity-80" />
					</button>
					<button onClick={() => setVolume(!volume)}>
						{volume ? (
							<MdVolumeUp className="text-white text-3xl hover:opacity-80" />
						) : (
							<MdVolumeOff className="text-white text-3xl hover:opacity-80" />
						)}
					</button>
				</div>
				<div className="self-center mt-24 mb-24 text-4xl font-bold tracking-wider text-center text-white max-md:my-10">
					{equations[currentEquationIndex]}
				</div>
			</div>
			<nav className="flex gap-5 justify-between items-center self-center mt-8 max-w-full text-2xl font-bold text-gray-800 whitespace-nowrap w-[612px] max-md:flex-wrap">
				<button>
					<MdOutlineReplay className="hover:opacity-80 text-[#051A91] w-10 h-10" />
				</button>

				<div className="flex gap-5 justify-between self-stretch">
					<button onClick={goToPreviousEquation}>
						<IoIosArrowBack className="hover:opacity-80 bg-gradient-to-b from-[#051A91] to-[#2284F1] rounded-[1000px] text-white w-12 h-12 p-2" />
					</button>
					<div className="my-auto">{currentEquationIndex + 1}/10</div>
					<button onClick={goToNextEquation}>
						<IoIosArrowForward className="hover:opacity-80 bg-gradient-to-b from-[#051A91] to-[#2284F1] rounded-[1000px] text-white w-12 h-12 p-2" />
					</button>
				</div>
				<button>
					<CgMaximize className="hover:opacity-80 text-[#051A91] w-10 h-10" />
				</button>
			</nav>
		</>
	);
}

function FAQSection() {
	const faqItems = [
		{ question: "Can education flashcards be used for all age groups?" },
		{ question: "How do education flashcards work?" },
		{ question: "Can education flashcards be used for test preparation?" },
	];

	const [expandedIndex, setExpandedIndex] = useState(null);
	const detailRefs = useRef([]);

	const toggleExpanded = (index) => {
		setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<section className="mt-40">
			<h2 className="bg-gradient-to-b text-transparent from-[#06286E] to-[#164EC0] text-5xl font-bold tracking-wide bg-clip-text max-md:mt-10 max-md:max-w-full max-md:text-4xl">
				FAQ
			</h2>
			{faqItems.map((item, index) => (
				<details
					key={index}
					className="flex gap-5 justify-center px-6 py-4 mt-8 max-w-full text-base font-semibold leading-7 rounded-xl border border-[#217EEC] border-solid text-zinc-800 w-[848px] max-md:flex-wrap max-md:px-5"
					ref={(el) => (detailRefs.current[index] = el)}
				>
					<summary
						className="flex justify-between items-center my-auto cursor-pointer"
						onClick={() => toggleExpanded(index)}
					>
						{item.question} <IoIosArrowDown />
					</summary>
					<p className="text-zinc-500 font-normal">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Beatae, aut!
					</p>
				</details>
			))}
			{/* Now you can reference the current detail element using detailRefs.current */}
		</section>
	);
}

export default function App() {
	return (
		<div className="flex flex-col items-center px-16 pt-7 pb-20 bg-stone-50 max-md:px-5">
			<div className="flex flex-col w-full max-w-6xl max-md:max-w-full">
				<Header />

				<div
					className="flex gap-0 self-start mt-16 text-lg text-center max-md:flex-wrap max-md:mt-10"
					aria-label="Breadcrumb"
				>
					<ol className="inline-flex items-center justify-center gap-1 font-semibold">
						<Link className=" hover:opacity-80">
							<GoHome size={28} className="text-zinc-500" />
						</Link>
						<IoIosArrowForward className="text-[#06286E]" />
						<Link className=" text-zinc-500 hover:opacity-80">
							Flashcard
						</Link>
						<IoIosArrowForward className="text-[#06286E]" />
						<Link className=" text-zinc-500 hover:opacity-80">
							Mathematics
						</Link>
						<IoIosArrowForward className="text-[#06286E]" />
						<Link className=" text-[#06286E] hover:opacity-80">
							Relation and Function
						</Link>
					</ol>
				</div>

				<h1 className="mt-16 text-3xl font-bold  bg-gradient-to-b text-transparent from-[#06286E] to-[#164EC0]  bg-clip-text  max-md:mt-10 max-md:max-w-full">
					Relations and Functions ( Mathematics )
				</h1>

				<StudyNav />

				<Flashcard />

				<footer className="flex gap-5 justify-between px-0.5 mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
					<div className="flex gap-5 justify-between text-xs font-bold text-zinc-500">
						<img
							loading="lazy"
							src="hyggexlogo.png"
							alt="Logo"
							className="shrink-0 aspect-square w-[81px] rounded-[1000px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4"
						/>
						<div className="flex flex-col justify-center self-start">
							<div>Published by</div>
							<img
								src="name.png"
								loading="lazy"
								alt="Publisher Logo"
								className="self-center mt-3 aspect-[3.33] w-[115px]"
							/>
						</div>
					</div>
					<button className="hover:opacity-80  flex gap-2 my-auto text-2xl font-semibold">
						<FaPlus className="bg-gradient-to-b from-[#051A91] to-[#2284F1] rounded-[1000px] text-white w-12 h-12 p-3" />
						<span className="my-auto bg-gradient-to-b text-transparent from-[#06286E] to-[#164EC0]  bg-clip-text">
							Create Flashcard
						</span>
					</button>
				</footer>

				<FAQSection />
			</div>
		</div>
	);
}
