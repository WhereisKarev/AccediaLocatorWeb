$(document).ready( function () {
    $("#table_id").DataTable({
        bAutoWidth: false,
        aoColumns: [
            {sWidth : '4%'},
            {sWidth : '48%'},
            {sWidth : '48%'}
        ]
    });
    $.ajax({
        url: "https://agai1j0uq1.execute-api.us-east-1.amazonaws.com/dev/users",
        success: function(result) {
            populate(result);
        }
    })
    $('#table_id').DataTable();
} );

function populate(result) {
    var table = $('#table_id').DataTable()
    result.forEach(function(person) {
        var status = person.IsInOffice
        var status_tag = "<img src=" + status + ".png>"
        
        table.row.add({
            "0" : status_tag,
            "1" : person.UserName,
            "2" : person.Location
        }).draw()
    });
}