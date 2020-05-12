$(document).ready(function () {
    var myDataTable = $('#dataTableId').DataTable({
        "ajax": {
            "url": "Home/GetStudents",
            "type": "GET",
            "dataSrc": function (d) {
                return d;
            }
        },
        "columns": [
            { "data": "StudentId" },
            { "data": "FirstName" },
            { "data": "LastName" },
            { "data": "EmailAddress" },
            { "data": "Age" },
            { "data": "Gender" },
            { "data": "DepartmentName" },
            { "data": "DepartmentLocation" },
            {
                "data": "StudentId",
                "render": function (data, type, full) {
                    return "<button class='btn btn-xs btn-danger js-delete' data-student-id=" + full.StudentId + ">Delete</button>"
                }
            }
        ]
    });
    $('#myModal').on('hidden.bs.modal', function () {
        $('input,select').val('');
    });
    $("body").on("click", '.js-delete', function () {
        var button = $(this);
        $.ajax({
            url: "/Home/Delete/" + $(this).attr("data-student-id"),
            contentType: 'application/json',
            method: "DELETE",
            success: function () {
                //button.parents("tr").remove();
                myDataTable.ajax.reload();
            }
        })
        $(".change-toast-text").text("SuccessFully Deleted");
        $('.toast').toast('show');
    });
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    $("#js-add-student").on("click", function () {
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
                myDataTable.ajax.reload();
                $(".change-toast-text").text("SuccessFully Added");
                $('.toast').toast('show');
                $('#exampleModal').modal("hide");
            },
            failure: function (response) {
                alert("Failed Adding");
            }
        });
    })
});