fetch('../constant/blog-data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data, ' getting blog data');
    
let list = document.getElementById("blog-main-container");
for (i = 0; i < data.length; ++i) {
    let div = document.createElement('div');
    div.classList.add('blog-container');

    let heading = document.createElement('h2');
    heading.classList.add('blog-title');
    heading.innerHTML = data[i].title;

    let div2 = document.createElement('div');
    div2.classList.add('publish-author-container');

    // let img = document.createElement('img');
    // img.classList.add('author-img');
    // img.src = data[i].author_img;

    let para = document.createElement('p');
    para.classList.add('publish-para');

    let span = document.createElement('span');
    span.classList.add('blog-author-para');
    span.innerHTML = data[i].publish_lable;
    para.appendChild(span);
    para.innerHTML = para.innerHTML + ' - ' + data[i].publish_date;

    // div2.appendChild(img);
    div2.appendChild(para);

    let contentPara = document.createElement('p');
    contentPara.classList.add('blog-content');
    let readMoreContainer = document.createElement('div');
    readMoreContainer.classList.add('read-more-container');
    let linkTag = document.createElement('a');
    linkTag.classList.add('read-more-btn');
    linkTag.innerHTML = 'Read More >>';
    linkTag.href = data[i].redirect_path;
    contentPara.innerHTML = data[i].content.slice(0,200) + '... ';
    readMoreContainer.appendChild(linkTag);
    // let div1 = document.createElement('div');
    // div1.classList.add('publish-author-container');
    div.appendChild(heading);
    div.appendChild(div2);
    div.appendChild(contentPara);
    div.appendChild(readMoreContainer);
    list.appendChild(div);
}
  })
  .catch(error => console.error('Error fetching JSON:', error));
