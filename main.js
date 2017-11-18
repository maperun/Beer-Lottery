$(document).ready(function() {
	
	let indexWin = 0;
	let numTries = 0;	
		
	// reveal img if correct tile is clicked

	$('td').click(function() {		
		numTries++;
		const boxNum = $(this).data('index');
		if (indexWin === boxNum) {
			$(this).find('img').fadeIn(1000, function() {
				if (numTries === 1) {
					alert('Congratulations! You win beer for life:)');
				} else {
					alert('Sorry, try again');
				}	
			});			
		} else {
			$(this).text('X');
		}
	});

	function reset() {
		$('td').html('');
		
		// pick a random num between 1 and 9 
		indexWin = Math.floor(Math.random() * 9);
		console.log(indexWin);
		numTries = 0;

		// 	create img tag 
		const beerImage = $('<img>', {
			id: 'beer-img',
			src: 'beermug.png',
		});

		// Append img 
		$('td[data-index=' + indexWin + ']').append(beerImage);
	}

	$('#reset').click(reset);

	reset();
});
		

