var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides : true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });

$(function() {
  ajaxRequest();

  function ajaxRequest() {

    let url = 'https://www.googleapis.com/youtube/v3/search?key=';
    let key = 'AIzaSyCyO4vtoyAalPh7x5Qd2Iew6h0-6zfijIo';
    let part = '&part=snippet&maxResults=1';
    let q = '&q=ガチャピン';
    let type = '&type=video';
    url = url + key + part + q + type;

    $.ajax({
      url: url,
      type: 'GET',
    })
    .done(function(data) {
      console.log(data)
      renderResult(data);
    })
    .fail(function(error) {
    })

  }

  function renderResult(data) {
    $('#result').text('');
    
    for (item of data.items) {
      //取得した内容を変数に格納
      let title = item.snippet.title;
      let thumbnail = item.snippet.thumbnails.medium;
      let videoId = item.id.videoId;
      let anchor = $('<a>')
                    .attr('href','https://www.youtube.com/watch?v=' + videoId);

      let img = $('<img>').attr('src',thumbnail.url)
                          .attr('alt',title).attr('width',thumbnail.width)
                          .attr('height',thumbnail.height);
      let li = $('<li>');
      anchor.append(img);
      li.append(anchor);
      li.append($('<p>').text(title));


      let iframe = $('<iframe>')
                    .attr('width',560)
                    .attr('height',315)
                    .attr('src','https://www.youtube.com/embed/' + videoId)
                    .attr('frameborder',0)
                    .attr('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
                    .attr('allowFullscreen',true);
      li.append(iframe);
      $('#result').append(li);
    }

  }

});

