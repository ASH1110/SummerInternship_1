$('#btn').on('click', function () {

    var rows = parseInt($('#row').val());
    var column = parseInt($('#column').val());

    if (!rows && !column) {
        alert('Please Enter the Numbers')
    } else if (rows <= 0 || column <= 0) {
        alert('Please Enter the number greater than 0')
    } else {
        var rows = parseInt($('#row').val());
        var column = parseInt($('#column').val());
        var tbody = "<table border='1'>"

        for (var i = 0; i < rows; i++) {
            tbody += "<tr>"

            for (var j = 0; j < column; j++) {
                tbody += "<td>"
                tbody += "Row -" + i + "Column-" + j
                tbody += "</td>"
            }
            tbody += "</tr>";
        }
        tbody += "</table>";

        $('.print').html(tbody);
    }

})


