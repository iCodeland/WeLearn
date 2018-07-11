$(function(){ // this will be called when the DOM is ready
    $('#search').keyup(function() {
        $('.card').removeClass('d-none');
        console.log('key!')
        var filter = $(this).val(); // get the value of the input, which we filter on
        $('.card-columns').find('.card .card-body h4:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
    });
});

$(document).ready(function () {
    var html = '';
    var modal = '';

    $.each(data, function(index, value){
      html += '<div class="card bigEntrance">' +
            '<img class="card-img-top" src="'+value.img+'" alt="Card image cap">' +
              '<div class="card-body">';
      html +=   '<h4 class="card-title">'+value.title+'</h4>';
      html +=   '<div class="dropdown-divider"></div>';
      html +=   '<p class="card-text">'+value.school+'</p>';
      html +=   '<p class="card-text"><small class="text-muted">'+value.context+'</small></p>';
      html +=   '<p class="card-text"><small class="text-muted">'+value.time+'</small></p>';
      html +=   '<div class="dropdown-divider"></div>';
      html +=   '<a data-toggle="modal" data-target="#modal-'+value.id+'"><button type="button" class="btn btn-outline-primary">想了解</button></a>';
      html += '</div></div>';

      // <!-- The Modal -->
      modal += '<div class="modal fade" id="modal-'+value.id+'" tabindex="-1" role="dialog" aria-labelledby="modal-1" aria-hidden="true">' +
              '<div class="modal-dialog modal-dialog-centered" role="document">' +
                '<div class="modal-content">' +
                  '<div class="modal-header">' +
                    '<h5 class="modal-title" id="title">'+value.title+'</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                      '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                  '</div>' +
                  '<div class="modal-body">' +
                    '<p>學校：'+value.school+'</p>' +
                    '<p><small class="text-muted">內容：'+value.context+'</small></p>' +
                    '<p><small class="text-muted">目前有 '+value.people+' 人想學</small></p>' +
                    '<p><small class="text-muted">時間：'+value.time+'</small></p>' +
                  '</div>' +
                  '<div class="modal-footer">' +
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>' +
                    '<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="btnAlert_Click()">報名加入</button>' +
                  '</div>' +
                '</div>' +
              '</div></div>';
    });
     
     $('.card-columns').html(html);
     $('.modal_group').html(modal);

});
function btnAlert_Click(){
  alert("報名成功");
}