$(function() {
  $('input[type=file]').change(function() {
    var file = this.files[0];
    console.log('selected file', file);

    var options = {endpoint: 'http://localhost:1080/files'};
    tus
      .upload(file, options)
      .fail(function(error) {
        console.log('upload failed', error);
      })
      .progress(function(e, bytesUploaded, bytesTotal) {
        console.log(bytesUploaded, bytesTotal);
      })
      .done(function(url) {
        console.log(url);
      });
  });
});