let token = $("meta[name='_csrf']").attr("content");
let header = $("meta[name='_csrf_header']").attr("content");

$(function () {
    $("#bookadd").click(function() {
        let searchword = prompt("책 제목을 입력하세요");

        $.ajax({
            url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
            data: {
                "ttbkey": "ttbyyy24941308001",
                "Query": searchword,
                "QueryType": "Title",
                "SearchTarget": "Book",
                "start": "1",
                "MaxResults": "18",
                "Sort": "Accuracy",
                "Cover": "Big",
                "output": "JS",
                "Version": "20131101"
            },
            dataType: "json",
            cache: false,
            success: function(rdata) {
                $("#searchresult").empty()
                $("#bookpagenation").empty()

                $(rdata.item).each(function(index, subject) {
                    let output = "<div class='col-sm-6 col-xl-2 mb-3'>" +
                        "<div class='card mb-3 hv-grow-parent h-100'>" +
                        "  <img class='card-img-top book-img' src='" + subject.cover + "' data-title='" + subject.title + "' data-author='" + subject.author + "' data-pubDate='" + subject.pubDate + "' data-category='" + subject.categoryName + "' data-description='" + subject.description + "' loading='lazy' height='350px'>" +
                        "  <div class='card-body mt-4'>" +
                        "       <a class='card-text link-success h5'>" + subject.title + "</a>" +
                        "       <p class='card-text text-opacity-75'>" + subject.author + "</p>" +
                        "       <p class='card-text text-opacity-75'>" + subject.pubDate + "</p>" +
                        "       <p class='card-text'>" + subject.categoryName + "</p>" +
                        "       <p class='card-text'>" + subject.description + "</p>" +
                        "  </div>" +
                        "</div>";

                    $('#searchresult').append(output);
                });

                // 이미지 클릭 이벤트 리스너 추가
                $(".book-img").click(function() {

                    let answer = confirm("해당 책을 등록하시겠습니까?")

                    if (answer) {

                        let bookData = {
                            title: $(this).data('title'),
                            author: $(this).data('author'),
                            pubdate: $(this).data('pubdate'),
                            category: $(this).data('category'),
                            description: $(this).data('description'),
                            cover: $(this).attr('src')
                        };

                        $.ajax({
                            url: "addbook",  // 서버에 책 정보를 저장하는 엔드포인트
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            cache: "false",
                            beforeSend: function(xhr) {
                                if (header && token) {
                                    xhr.setRequestHeader(header, token);
                                }
                            },
                            data: JSON.stringify(bookData),
                            success: function(response) {
                                alert("책 정보가 저장되었습니다.");
                                window.location.href = response.message;
                            },
                            error: function(error) {
                                alert("책 정보 저장에 실패했습니다.")
                                console.error("저장 중 오류 발생:", error);
                            }
                        });
                    } //if (answer)

                }); //이미지 클릭 이벤트
            }
        });
    });
});
