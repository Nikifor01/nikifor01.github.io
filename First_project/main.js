
/*
function toggle(objNameText) {
    const objText = document.getElementsByClassName(objNameText);
    if ( objText !== null ) {
        objText.style.display = (objText.style.display == '') ? 'none' : '';
    }
}
*/



function toggle_show(id) {
	document.getElementById(id).style.display = document.getElementById(id).style.display == 'none' ? 'block' : 'none';
}

