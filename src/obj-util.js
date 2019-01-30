var objUtil = exports;

objUtil.isEmpty = function(obj) {
	// when obj is null or undefined
	if (!obj) {
		return true;
	}
	
	// when obj is empty
	if (Object.keys(obj).length === 0) {
		return true;
	}

	return false;
}