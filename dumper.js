var rows = document.querySelectorAll('table > tbody > tr');

var emoji = [];

var currentGroup = '';
var currentSubgroup = '';

for(var i = 0 ; i < rows.length; i++) {
    if(rows[i].querySelector('th')) {
        if(rows[i].querySelector('th.bighead a') !== null) {
            currentGroup = rows[i].querySelector('th.bighead a').innerText;
        }
        if(rows[i].querySelector('th.mediumhead a') != null) {
            currentSubgroup = rows[i].querySelector('th.mediumhead a').innerText;
        }

        continue;
    }

    var obj = {
        code: rows[i].querySelector('td.code a').innerText,
        emoji: rows[i].querySelector('td.chars').innerText,
        name: rows[i].querySelector('td.name').innerText,
        group: currentGroup,
        subgroup: currentSubgroup
    };

    emoji.push(obj);
}

JSON.stringify(emoji);

//http://freeonlinetools24.com/json-decode