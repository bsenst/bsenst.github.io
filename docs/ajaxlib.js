// AJAXLib v. 1.0
// author: Jacek Karaszewski, http://www.karaszewski.com/tools/ajaxlib/
// licenced under Creative Commons Attribution 2.5 License

// public

// function loadXMLDoc(xml_url, function_name, ignore_white)
function loadXMLDoc(url, callFunc, ignoreWhite) {
	functionToCall = callFunc;
	stripWS = ignoreWhite;
	xmlRequestObj = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP")
	xmlRequestObj.onreadystatechange = proccessXML;
	xmlRequestObj.open("GET", url, true);
	xmlRequestObj.send(null);
}


// private

function is_ws(nod) {
	return !(/[^\t\n\r ]/.test(nod.data));
}

function findWhiteSpace(node, nodeNo) {
	for (i=0; i=0;i--) {
		nodeRef = nodesToDelete[i];
		nodeRef.parentNode.removeChild(nodeRef)
	}
}

function proccessXML() {
	if (xmlRequestObj.readyState == 4 && (xmlRequestObj.status == 200 || xmlRequestObj.status == 304)) {
		if(stripWS) {
			stripWhiteSpace(xmlRequestObj.responseXML);
		}
		resultXML = xmlRequestObj.responseXML;
		functionToCall()
	}
}