/**
 * Created by rodrigocespedes on 2/25/2016.
 */

  var event = function(e){
    alert(e);
}


var box = $('body');

var table = $('<table class="table-bordered"></table>');
for(var i = 1 ; i <= 4 ; i++)
{
    var row = $('<tr>' + i + '</tr>');
    for(var j = 1 ; j <= 4 ; j++)
    {
        var column = $('<td>' + j + '</td>');
        row.append(column);
    }
    table.append(row);

}
box.append(table);
$('td').on('click', function(e){alert('jojo');});