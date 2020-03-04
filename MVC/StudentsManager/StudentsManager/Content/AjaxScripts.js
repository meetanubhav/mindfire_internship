$(document).ready(function () {
    var myDataTable = $('#dataTableId').DataTable();
    $(".js-delete").on("click", function () {
        var button = $(this);
        $.ajax({
            url: "/Home/Delete/" + $(this).attr("data-student-id"),
            contentType: 'application/json',
            method: "DELETE",
            success: function () {
                button.parents("tr").remove();
            }
        })
        $(".change-toast-text").text("SuccessFully Deleted");
        $('.toast').toast('show');
    });
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    $("#js-add-student").on("click", function () {
        $('#exampleModal').modal("hide");
        var studentData = new Object();
        studentData.firstName = $("#FirstName").val();
        studentData.lastName = $("#LastName").val();
        studentData.emailAddress = $("#EmailAddress").val();
        studentData.age = $("#Age").val();
        studentData.gender = $("#gender").val();
        studentData.departmentId = $("#DepartmentId").val();
        $.ajax({
            type: "POST",
            url: "/Home/AddStudent",
            data: JSON.stringify(studentData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                markup = "<tr><td>" + response.StudentId + "</td>" +
                "<td>" + response.FirstName + "</td>" +
                 "<td>" + response.LastName + "</td>" +
                 "<td>" + response.EmailAddress + "</td>" +
                   "<td>" + response.Age + "</td>" +
                   "<td>" + response.Gender + "</td>" +
                   "<td>" + response.DepartmentName + "</td>" +
                   "<td>" + response.DepartmentLocation + "</td>" +
                   '<td><a href="/Home/Edit/' + response.StudentId + '">Edit</a> | <button data-student-id=' + response.StudentId + ' class="btn btn-sm btn-danger js-delete"> Delete </button></td>' +
                   "</tr>";
                tableBody = $("#dataTableId tbody");
                tableBody.append(markup);
                $(".change-toast-text").text("SuccessFully Added");
                $('.toast').toast('show');
            },
            failure: function (response) {
                alert("Failed Adding");
            }
        });
    })
});