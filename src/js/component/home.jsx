import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [inputValue, setinputValue] = useState ("")
	const [toDos, settoDos] = useState ([])

	return (
		<div className="container">
			<h1>My to do's</h1>
			<ul>
				<li>
					<input 
					type="text" 
					onChange= {(e) => setinputValue(e.target.value)}
					value={inputValue}
					onKeyPress= {(e) => {
						if (e.key === "Enter") {
							settoDos (toDos.concat (inputValue));
							setinputValue (" ");
						}
					 	
					}}
					
					placeholder="Add a task that needs to be done">
					</input>
					</li>

				{toDos.map ((task,index) => (
				<li className="taskAdded">{task}
				<span className="trashIcon">
					<i  class="fas fa-trash-alt"  
					onClick = {() => 
						settoDos (
							toDos.filter (
								(task,currentIndex) => index != currentIndex))}></i>
				</span>
				</li>
				))}
				
			</ul>
			<div className="numberofTasks">{toDos.length} tasks</div>
		</div>
		
	);
};

export default Home;
