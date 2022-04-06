
// GoogleSheets are 'ourApp' (SpreadSheetApp) = the same like Opening Excel

// Levels:
// 1º - Application
// 2º - SpreadSheet
// 3º - Sheets
// 4º - Ranges or Cells 


////// READ AND WRITE IN CELLS OR RANGES //////

// To be able to program, we will need to follow the mentioned structure

function learnBasics() {
	Logger.log("OMG!");
// #That code will write 'OMG' text in the console: long date + Log
}


function learnBasics() {
	//This will active SpreadSheet applicaion (1º level)
	var app = SpreadsheetApp;

	// This code will enter SpreadSheet (2ºlevel)
	var ss = app.getActiveSpreadSheet();

	// This code will enter the active (open) Sheet (3ºlevel)
	var activateSheet = ss.getActiveSheet(); 
	
	//This will write 99 on D2 Cell
	activateSheet.getRange("D2").setValue(99);

	//This will write 99 on D2 to F8 Cells
	activateSheet.getRange("D2:F8").setValue(99);

	// This will write Serious on cell B6 (6th row, 2 col) 
	activateSheet.getRange(6,2).setValue("Serious");

	// This will write Serious on cell B2:B4 (2th row, 2th col, 3 iterations) to 3 rows down 
	activateSheet.getRange(2,2,3).setValue("Serious");

	// This will write Serious on cell B2:F4 (2th row, 2th col, 3 rows iterations, 4 column iterations)
	// to 3 rows down and 4 columns to the right 
	activateSheet.getRange(2,2,3,4).setValue("Serious");

	// This code will get the value in A4 and write it down in B6 Cell
	var tempText = activateSheet.getRange(4,1).getValue();
	activateSheet.getRange(6,2).setValue(tempText);

}

