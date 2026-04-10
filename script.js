

var date = new Date(); // Set the date to June 1, 2024

var month = getShortMonth(date.getMonth());

var year = getShortYear(date.getFullYear());

var playlistDate = getPlaylistDate(month, year);

// Update the playlist link with the current month/year
var playlistLink = document.getElementById('playlist-link');

if (playlistLink) {
    playlistLink.textContent = 'currently obsessed with these (' + playlistDate + ')';
}

// update the current year in the copyright notice
var copyrightYear = document.getElementById('copyright-year');

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// example: 0 becomes 'jan', 1 becomes 'feb', etc.
function getShortMonth(month) {

    if (month === 0) {

        return 'jan';

    } else if (month === 1) {

        return 'feb';

    } else if (month === 2) {

        return 'march';

    } else if (month === 3) {

        return 'april';

    } else if (month === 4) {

        return 'may';

    } else if (month === 5) {

        return 'june';

    } else if (month === 6) {

        return 'july';

    } else if (month === 7) {

        return 'aug';

    } else if (month === 8) {

        return 'sept';

    } else if (month === 9) {

        return 'oct';

    } else if (month === 10) {

        return 'nov';

    } else if (month === 11) {   

        return 'dec';
        
    }

}

// example: 2022 becomes '22
function getShortYear(year) {

    var shortYear = "'" + year.toString().slice(2);
    return shortYear
    
}

// shorthand month name plus shorthand year. ex dec '22 (december 2022)
function getPlaylistDate(shortMonth, shortYear) {

    return shortMonth + " " + shortYear;

}