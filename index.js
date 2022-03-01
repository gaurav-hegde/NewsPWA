// api key: c49b42a979b94006b59fcd057f708c67
// new api: pub_5043062fe5333a7247cf52a648c5bf4c3e68
//new api: ga70fV3mi6BtUKinu6VCLnTSkayq3TIxa_YoYJRLV1E

let news_card = document.getElementById('news_card');

window.addEventListener("load", () => {
	registerSW();
});

// registers the sw and is first to run
const registerSW = async () => {
	// this line checks wether the browser supports serviceWorker or not.
	if ("serviceWorker" in navigator) {
		try {
			await navigator.serviceWorker.register("./sw.js");
		} catch (e) {
			console.log(`SW registration failed`);
		}
	}
};

var currentPage = 1 

    fetch("https://api.newscatcherapi.com/v2/latest_headlines?&lang=en&topic=science&page_size=5&page=" +
			currentPage,
		{
			method: "GET",
			headers: {
				"x-api-key": "ga70fV3mi6BtUKinu6VCLnTSkayq3TIxa_YoYJRLV1E",
			},
		}
	)
    .then(response => {console.log(response); return response.json()})
    .catch(error => console.log(error))
    .then(data => {
        let articles = data.articles;
        console.log(articles);
        let newsHtml = "";
        data.articles.forEach((element) => {
            let news = `
                <div class="card mx-auto my-5 text-white bg-dark mb-3 text-center" id="news" style="width: 20rem;">
                <img src="${element["media"]}" class="card-img-top img-fluid" alt="image">
                <div class="card-body">
                    <h5 class="card-title"> ${element["title"]} </h5>
                    <p class="card-text">${element["excerpt"]}</p>
                    <a href="${element["link"]}" class="btn btn-warning">Article</a>
                </div>
                </div>
                `;
            newsHtml += news;
    })
            news_card.innerHTML = newsHtml;
});
        


// fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c49b42a979b94006b59fcd057f708c67')
//   .then(response => {console.log(response); return response.json()})
//   .catch(error => console.log(error))
//   .then(data => {
//     let articles = data.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element) {
//             let news = `
//                 <div class="card mx-auto my-5 text-white bg-dark mb-3 text-center" id="news" style="width: 20rem;">
//                     <img src="${element["urlToImage"]}" class="card-img-top img-fluid" alt="image">
//                     <div class="card-body">
//                         <h5 class="card-title"> ${element["title"]} </h5>
//                         <p class="card-text">${element["description"]}</p>
//                         <a href="${element["url"]}" class="btn btn-warning">Go somewhere</a>
//                     </div>
//                 </div>
//                 `;
//             newsHtml += news;
//         });
//         news_card.innerHTML = newsHtml;
//   });



// const xhr = new XMLHttpRequest();
// // const axios = require('axios');
// import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
// axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c49b42a979b94006b59fcd057f708c67").then(res => {
//     console.log(res)
// } )


// xhr.open(
//   "GET",
//   "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c49b42a979b94006b59fcd057f708c67",
//   true
// )

// // sends data to html
// xhr.onload = function () {
//   if (this.status === 200) {
//     let json = JSON.parse(this.responseText);
//     let articles = json.articles;
//     console.log(articles);
//     let newsHtml = "";
//     articles.forEach(function(element) {
//         let news = `
//             <div class="card mx-auto my-5 text-white bg-dark mb-3 text-center" id="news" style="width: 20rem;">
//                 <img src="${element["urlToImage"]}" class="card-img-top img-fluid" alt="image">
//                 <div class="card-body">
//                     <h5 class="card-title"> ${element["title"]} </h5>
//                     <p class="card-text">${element["description"]}</p>
//                     <a href="${element["url"]}" class="btn btn-warning">Go somewhere</a>
//                 </div>
//             </div>
//             `;
//         newsHtml += news;
//     });
//     news_card.innerHTML = newsHtml;
//   } else {
//     console.log("Some error occured");
//   }
// }

// xhr.send()