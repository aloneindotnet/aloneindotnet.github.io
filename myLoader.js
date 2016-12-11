module.exports = function(source) {
	
	var objSource = source.split('=')[1].replace(';','');
	
    var obj = JSON.parse(objSource);
		
    for(var prop in obj) {
        if(!isNaN(parseInt(prop)))
        {
          delete obj[prop];
        }
    }
	
    return 'module.exports = ' + JSON.stringify(obj) + ';';
};