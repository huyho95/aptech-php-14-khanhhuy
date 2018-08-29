$(document).ready(function () {
    $('#js-button').click(function () {
        $.get('data.json', function (data, status) {
            if (status === 'success') {
                var table = '<table id="js-table" class="table"></table>';
                $('#js-div-table').append(table);
                var thead = '<thead id="js-thead"></thead>';
                $(thead).appendTo('#js-table');
                var tr = '<tr id="js-tr-head"></tr>';
                $(tr).appendTo('#js-thead');
                var th = '<th>#</th><th>Name</th><th>Email</th>';
                $(th).appendTo('#js-tr-head');
                
                var tbody = '<tbody></tbody>';
                $('#js-thead').after(tbody);
                var users = data.users;
                console.log(users);
                users.forEach(function(user,index) {
                    var trBody = '<tr id="js-tr-body-' + index + '"></tr>';
                    $(trBody).appendTo('tbody');
                    var thBody = '<th scope="row">' + user.id + '</th>';
                    var tdBody = '<td>' + user.name + '</td><td>' + user.email + '</td>';
                    $('#js-tr-body-' + index).append(thBody,tdBody);                              
                });
                    $('#js-button').hide();    
            }
        });
    });
});