$('#add-user').submit((event) => {
    alert("Data inserted Successfully!!");
})

$('#update-user').submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, (n, i) => {
        data[n['name']] = n['value']
    })

    var request = {
        "url": `http://localhost:5000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})

// if(window.location.pathname == "/"){
//     $ondelete = $(".table tbody td a.delete");
//     $ondelete.click(() => {
//         var id = $(this).attr("data-id")
//     })

//     var request = {
//         "url": `http://localhost:5000/api/users/${id}`,
//         "method": "DELETE"
//     }

//     if(confirm("Do Really want to delete this record!!?")){
//         $.ajax(request).done(function(response){
//             alert("Data Deleted Successfully!");
//             location.reload();
//         })
//     }
// }

if (window.location.pathname == "/") {
    $(document).on("click", ".delete", function() {
        var id = $(this).attr("data-id"); // Correctly get user ID

        if (confirm("Do you really want to delete this record?")) {
            var request = {
                "url": `http://localhost:5000/api/users/${id}`,
                "method": "DELETE"
            };

            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            });
        }
    });
}
