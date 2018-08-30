$(document).ready(function () {
        $.get('data.json', function (data, status) {
            if (status === 'success') {
                var table = '<table id="js-table" class="table"></table>';
                $('#js-div-table').append(table);
                var thead = '<thead id="js-thead"></thead>';
                $(thead).appendTo('#js-table');
                var tr = '<tr id="js-tr-head"></tr>';
                $(tr).appendTo('#js-thead');
                var th = '<th>#</th><th>Header</th><th>Header</th><th>Header</th><th>Header</th>';
                $(th).appendTo('#js-tr-head');
                
                var tbody = '<tbody></tbody>';
                $('#js-thead').after(tbody);
                var users = data.users;
                users.forEach(function(user,index) {
                    var trBody = '<tr id="js-tr-body-' + index + '"></tr>';
                    $(trBody).appendTo('tbody');
                    var tdBody = '<td>' + user.id + '</td><td>' + user.name1 + '</td><td>' + user.name2 + '</td><td>' + user.name3 + '</td><td>' + user.name4 + '</td>';
                    $('#js-tr-body-' + index).append(tdBody);                            
                });   
            }
        });
    });