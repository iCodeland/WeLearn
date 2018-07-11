
$.getJSON("https://spreadsheets.google.com/feeds/list/1vYdTLSOEeSzewIZeHQCB0RHP5fr37ofNVtbSa8DItx8/1/public/values?alt=json-in-script&callback=?", function (json) {
    var e = json.feed.entry,
        l = e.length,
        html = "",
        entry, i, school_name;
    for (i = 0; i < l; i++) {
        entry = e[i];
        school_name = entry.gsx$school.$t;
        html += "<option value=" + school_name + ">" + school_name + "</option>";
    }
    $("#school_list").html(html);
});