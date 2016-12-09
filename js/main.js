var currentNewsStory = 1;

function hideNewsStory(thisNewsStory) {
	thisNews = document.getElementById('news' + thisNewsStory);
	if (thisNews) {
		thisNews.className = 'unselected';
	}
}

function hideNewsStories(totalNews) {
	var i=0;
	while (i <= totalNews) {
		hideNewsStory(i);
		i=i+1;
	}
}

function nextNewsStory() {
	viewNewsStory(currentNewsStory+1);
}

function previousNewsStory() {
	viewNewsStory(currentNewsStory-1);
}

function toggleSection(toggle, toggleable) {
	if (toggleable.style.display == "" || toggleable.style.display == "block") {
		toggleable.style.display = "none";
		toggle.firstChild.nodeValue = "+";
	} else {
		toggleable.style.display = "block";
		toggle.firstChild.nodeValue = "-";
	}
}

function viewNewsStory(thisNewsStory) {
	thisNews = document.getElementById('news' + thisNewsStory);
	currentNews = document.getElementById('news' + currentNewsStory);
	if (thisNews) {
		currentNews.className = 'unselected';
		thisNews.className = 'selected';
		currentNewsStory = thisNewsStory;
	}
	document.getElementById('previous').className = currentNewsStory == 1 ? 'hidden' : '';
	document.getElementById('next').className = currentNewsStory == latestNewsStory ? 'hidden' : '';
}

function writeNextLink() {
	document.write('<a id="next" class="hidden" title="suivant" onclick="nextNewsStory();">&rsaquo;</a>');
}

function writePreviousLink() {
	document.write('<a id="previous" class="hidden" title="pr&eacute;c&eacute;dant" onclick="previousNewsStory();">&lsaquo;</a>');
}
