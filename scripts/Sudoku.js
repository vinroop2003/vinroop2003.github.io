	// populate grid with a partial state of Sudoku
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
		
		// Now iterate through the grid and fill the init state
		var rows = document.getElementById('SudokuTable').getElementsByTagName('tr');
		for(var i = 0; i < rows.length; i++) {
			var cols = rows[i].getElementsByTagName("input");
		
			for(var j = 0; j < cols.length; j++) {
				if(partialState[i][j] !== '') {
					cols[j].value = partialState[i][j];
					$(cols[j]).addClass("initialValue");
					$(cols[j]).attr("readonly", true);
				}
				else
					cols[j].value = '';
			}
		}
	};

	var verifySolution = function() {
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
							
	var rows = document.getElementById('SudokuTable').getElementsByTagName('tr');
		for(var i = 0; i < rows.length; i++) {
			var cols = rows[i].getElementsByTagName("input");
		
			for(var j = 0; j < cols.length; j++) {
				if( cols[j].value !== FinalState[i][j]) {
					return false;
				}
			}			
			return true;
		}
};

var isNumeric = function(num) {
		if(num >= 0 && num <= 9)
			return true;
		return false;
	};

$(document).ready(function() {
	var rows = 9;
	var cols = 9;
	
	var tbody = '';	
	
	// first create an empty grid
	for(var i = 0; i < rows; i++) {
		tbody += "<tr class='row"+ i + "'>";
		for(var j = 0; j < cols; j++) {
			tbody += "<td> <input onkeypress="return isNumeric()" size='1' maxlength='1' formnovalidate='isNumeric'></input></td>";
		}
		 tbody += "</tr> ";
	}
	document.getElementById("SudokuTable").innerHTML = tbody;
	
	$("#submit").click(function() {
		var result = verifySolution();
		if(result === true) {
			$('#showResult').text("BINGO! THIS IS A CORRECT SOLUTION");
		}
		else {
			$('#showResult').text("OOPS! THIS IS A WRONG SOLUTION");
		}
	});
	
	$("#clear").click(function() {
		$("#showResult").empty();
		fillPartialState();
	});
		
	fillPartialState();
	
		
	
	
	
});