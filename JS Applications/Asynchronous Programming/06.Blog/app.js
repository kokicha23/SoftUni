async function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog';
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const postsElement = document.getElementById('posts');

    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostBtn.addEventListener('click', viewPost);

    const postsResponse = await fetch(`${baseUrl}/posts`);
    if (postsResponse.status !== 200) return;

    const postData = await postsResponse.json();

    const commentsResponse = await fetch(`${baseUrl}/comments`);
    if (commentsResponse.status !== 200) return;

    const commentsData = await commentsResponse.json();

    async function loadPosts() {
        if (Array.from(postsElement.childNodes).length) return;

        for (let key in postData) {
            let obj = postData[key];

            let optionEl = createElement('option', obj.title, ['value', obj.id]);
            postsElement.appendChild(optionEl);
        }
    }

    async function viewPost() {
        let post = postsElement.options[postsElement.selectedIndex];
        if (!post) return;

        postTitle.textContent = postData[post.value].title;
        postBody.textContent = postData[post.value].body;

        Array.from(postComments.childNodes).map(x => x.remove());
        Object.entries(commentsData)
            .filter(x => x[1].postId === post.value)
            .forEach(x => {
                let commentLi = createElement('li', x[1].text, ['id', x[1].id]);
                postComments.appendChild(commentLi);
            });

        // Second way
        // for (let key in commentsData) {
        //     let commentObj = commentsData[key];
        //     if (commentObj.postId === post.value) {
        //         let commentLi = createElement('li', commentObj.text, ['id', commentObj.id]);
        //         postComments.appendChild(commentLi);
        //     }
        // }
    }
}

function createElement(type, textContent, attributes = []) {
    let element = document.createElement(type);

    if (textContent) {
        element.textContent = textContent;
    }

    for (let i = 0; i < attributes.length; i++) {
        let x = attributes[i];
        let attribute, value;

        if (Array.isArray(x)) {
            attribute = x[0];
            value = x[1];
        } else {
            attribute = attributes[i];
            value = attributes[i + 1];
            i++;
        }

        if (attribute === 'class') {
            element.classList.add(value);
        } else {
            element.setAttribute(attribute, value);
        }
    }

    return element;
}

attachEvents();