	// populate grid with a initial partial state of Sudoku
	var fillPartialState = function() {
		var partialState = [[5, 3, '', '', 7, '', '', '', ''], 
							[6, '', '', 1, 9, 5, '', '', ''],
							['', 9, 8, '', '', '', '', 6, ''],
							[8, '', '', '', 6, '', '','', 3],
							[4, '', '', 8, '', 3, '', '', 1],
							[7, '', '', '', 2, '', '', '', 6],
							['', 6, '', '', '', '', 2, 8, ''],
							['', '', '', 4, 1, 9, '', '', 5],
							['', '', '', '', 8, '', '', 7, 9]
							];
		
		var boxRows = document.getElementById('SudokuTable').getElementsByClassName('boxes'); 
		
		// Iterate through all the inner tables and fill the init state of the board
		for(var i = 0; i < boxRows.length; i++) {
			var boxes = boxRows[i].getElementsByClassName('box');
			for(var j = 0; j < boxes.length; j++ )
			{
				var rows = boxes[j].getElementsByClassName('row'); 
				for(var k = 0; k < rows.length; k++) {
					var cols = rows[k].getElementsByTagName("input");

					for(var l = 0; l < cols.length; l++) {
						var x = i*3 + k ;
						var y = j*3 + l;
						if(partialState[x][y] !== '') {
							cols[l].value = partialState[x][y];
							$(cols[l]).addClass("initialValue");
							$(cols[l]).attr("readonly", true);
						}
						else
							cols[l].value = '';
					}
				}
			}
		}
	};

	// Verify the state of the board, The variable finalCheck distinguishes between full board check or partial board check
	var verifySolution = function(finalCheck) {
		var FinalState = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
							[6, 7, 2, 1, 9, 5, 3, 4, 8],
							[1, 9, 8, 3, 4, 2, 5, 6, 7],
							[8, 5, 9, 7, 6, 1, 4, 2, 3],
							[4, 2, 6, 8, 5, 3, 7, 9, 1],
							[7, 1, 3, 9, 2, 4, 8, 5, 6],
							[9, 6, 1, 5, 3, 7, 2, 8, 4],
							[2, 8, 7, 4, 1, 9, 6, 3, 5],
							[3, 4, 5, 2, 8, 6, 1, 7, 9]
							];	
							
	var boxRows = document.getElementById('SudokuTable').getElementsByClassName('boxes'); 
	
	for(var i = 0; i < boxRows.length; i++) {
			var boxes = boxRows[i].getElementsByClassName('box');
			for(var j = 0; j < boxes.length; j++ )
			{
				var rows = boxes[j].getElementsByClassName('row'); 
				for(var k = 0; k < rows.length; k++) {
					var cols = rows[k].getElementsByTagName("input");

					for(var l = 0; l < cols.length; l++) {
						var x = i*3 + k ;
						var y = j*3 + l;
						
						if(finalCheck || cols[l].value !== "") {
							if( parseInt(cols[l].value) !== FinalState[x][y]) {
								return false;
							}
						}
					}
				}		
			}
		}
		return true;
	};


$(document).ready(function() {
	var tbody = '';	
	
	for(var a = 0; a < 3; a++) {	
		// first create an empty board
		for(var x= 0; x < 3; x++) {
			tbody += "<td><table class='box'> ";
			for(var i = 0; i < 3; i++) {
				tbody += "<tr class='row'>";
				for(var j = 0; j < 3; j++) {
					tbody += "<td> <input size='1' maxlength='1' formnovalidate='isNumeric'></input></td>";
				}
				tbody += "</tr> ";
			}
			tbody += "</td></table>";
			document.getElementById("SudokuTable").getElementsByClassName("boxes")[a].innerHTML = tbody;	
		}
		tbody = "";
	};
	
	// Bind events to check partial board state
	$("#checkPartial").click(function() {
		if(verifySolution(false) === true) {
			$('#showResult').text("You are doing good!");
		}
		else {
			$('#showResult').text("Its not quite right");
		}
	});
	
	// Bind submit button event
	$("#submit").click(function() {
		var result = verifySolution(true);
		if(result === true) {
			$('#showResult').text("BINGO! THIS IS A CORRECT SOLUTION");
		}
		else {
			$('#showResult').text("OOPS! THIS IS A WRONG SOLUTION");
		}
	});
	
	// Bind clear button event
	$("#clear").click(function() {
		$("#showResult").empty();
		fillPartialState();
	});
		
	fillPartialState();
	
});