


function init() {
	const KEY_CODE = {
		UP: 38,
		DOWN: 40
	}
	
	// Prevent browser default keyboard event
	
	// Player side holding score
	let PLAYERS = {
		A: {
			score: 0,
			serving: true // service first
		},
		B: {
			score: 0,
			serving: false
		},
	}
	
	let totalCount = 10 // total iteration in game
	let scoreA = PLAYERS['A']['score']
	let scoreB = PLAYERS['B']['score']
	let servingPlayer = PLAYERS['A']['serving'] === true? 'A': 'B'
	let DUCE = false

	let buttonA = document.getElementById("player-one")
	let buttonB = document.getElementById("player-two")
	let buttonReset = document.getElementById("reset") // reset game
	
	// common utilities
	function resetScore() {
		scoreA = 0
		scoreB = 0
	}
	function reset() {
		resetScore()
		PLAYERS['A']['serving'] = true
		PLAYERS['B']['serving'] = false
		servingPlayer = 'A'
	}
	function display() {
		console.clear()
		console.log(`Serving by: ${servingPlayer}: Score A: ${scoreA} Score B: ${scoreB}`)
	}
	function serviceChangeHandler() {
		if (servingPlayer === 'A') {
			PLAYERS['A']['serving'] = false
			PLAYERS['B']['serving'] = true
			servingPlayer = 'B'
		} else if (servingPlayer === 'B') {
			PLAYERS['A']['serving'] = true
			PLAYERS['B']['serving'] = false
			servingPlayer = 'A'
		}
	}
	function handleDuce() {
		display()
		if (scoreA == 2 || scoreB == 2) {
			console.log('Game Over')
			reset()
			DUCE = false
		} else if (scoreA === 1 && scoreB === 1) {
			console.log('Reset and Service Change')
			serviceChangeHandler()
			resetScore()
		}
	}
	function handleDraw() {
		if (
			scoreA === 10 && scoreB === 10
		) {
			DUCE = true
			reset()
			console.log('Draw: Handle Duce')
			handleDuce()
		}
	 }; // d


	function totalScore() {
		return parseInt(scoreA) + parseInt(scoreB)
	}
	function serviceChange(){
		// All possible score combination for draw
		// [1, 4], [2, 3], [3,7], [4, 6], [5, 5]
		// irreversible also true
		if (
			totalScore() === 5
			|| totalScore() === 10
			|| totalScore() === 15
			|| totalScore() === 20
		) {
			console.log('Service change')
			// console.log(servingPlayer)
			// display()
			serviceChangeHandler()
			// console.log(PLAYERS)
		 }
	};
	function checkGame() {
		if (scoreA > 10 || scoreB > 10) {
			console.log('Game Over')
			reset()
		} else if (scoreA > 5 || scoreB < 2) {
			console.log('Game Over')
		} else if (scoreA < 2 || scoreB > 5) {
			console.log('Game Over')
		}
	}


	// Event handler
	buttonReset.addEventListener('click', function () {
		reset()
		display()
	})
	buttonA.addEventListener('click', function() {
		// console.log("Hello Console!");
		scoreA += 1

		if (!DUCE) {
			display()
			serviceChange()
			checkGame()
			handleDraw()
		} else {
			handleDuce()
		}
	
	});
	buttonB.addEventListener('click', function() {
		// console.log("Hello Console!");
		scoreB += 1

		if (!DUCE) {
			display()
			serviceChange()
			checkGame()
			handleDraw()
		} else {
			handleDuce()
		}
	});


	// // updateScore(){}
	// // updatePlayerAButton(){}
	// // updatePlayerBButton(){
	// // 	playerBButton.onclick += parseInt(PLAYERS['A'])
	// // }
	
	// function updateScoreByPlayer(button, score){
	// 	// button.onclick += parseInt(score)
	// 	button.addEventListener('click', function() {
	// 		// console.log("Hello Console!");
	// 		score += parseInt(score)
	// 		return score
	// 	  });
	// }

	// scoreA = updateScoreByPlayer(buttonA, scoreA)
	// scoreB = updateScoreByPlayer(buttonB, scoreB)

	// // console.log(buttonA.id, scoreA)
}

window.onload = init;
