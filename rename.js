const { join } = require ('path');
const { readdirSync, renameSync } = require('fs');

const dir = 'src/files/schedules/';

const files = readdirSync(dir);

files.forEach(file => {
	console.log(file);
	let newFileName = '';

	let match = file.match(/^([0-9]*)( |_|-)*([0-9]*)( |_|-)*(TT)( |_|-)*([0-9]*)( |_|-)*([0-9]*)( |_|-)*([0-9]*)( |_|-)*.pdf$/);
	
	if (match[3] == '') {
		newFileName = `${match[1]}_TT_${match[7]}-${match[9]}-${match[11]}.pdf`;
		console.log(newFileName);
	} else {
		newFileName = `${match[1]}-${match[3]}_TT_${match[7]}-${match[9]}-${match[11]}.pdf`;
		console.log(newFileName);
	}

	const filePath = join(dir, file);
	const newFilePath = join(dir, newFileName);

	renameSync(filePath, newFilePath);
});