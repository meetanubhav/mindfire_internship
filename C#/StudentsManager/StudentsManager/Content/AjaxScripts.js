$(document).ready(function () {
    $('#dataTableId').DataTable();
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
    });
});