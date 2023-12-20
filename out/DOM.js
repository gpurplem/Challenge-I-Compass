"use strict";
var PostsApp;
(function (PostsApp) {
    function loadPostsPageLayout() {
        const main = document.getElementsByTagName("main")[0];
        const p = document.createElement("p");
        const section = document.createElement("section");
        p.className = 'main-title';
        p.innerText = "User posts";
        section.id = "posts";
        main.appendChild(p);
        main.appendChild(section);
    }
    PostsApp.loadPostsPageLayout = loadPostsPageLayout;
    function loadPostsPage(postsList, parentElement) {
        const container = document.getElementById(parentElement);
        for (let i = 0; i < postsList.length; i++) {
            const post = postsList[i];
            const postElement = createBlogPost(post.getId().toString(), post.getImageUrl(), post.getTitle(), post.getBody(), true);
            container.appendChild(postElement);
        }
        window.scrollTo(0, 0);
    }
    PostsApp.loadPostsPage = loadPostsPage;
    function loadFullPostPage(postId) {
        clearPostsPage();
        const main = document.getElementsByTagName("main")[0];
        const section = document.createElement("section");
        const post = document.createElement("div");
        const divCommentsContainer = document.createElement("div");
        const divComments = document.createElement("div");
        const backBtnDiv = document.createElement("div");
        const backIcon = document.createElement("img");
        section.id = "full-post-page";
        post.id = "full-post";
        backIcon.src = "./assets/ArrowIcon.svg";
        divCommentsContainer.id = "divCommentsContainer";
        divComments.id = "divComments";
        backBtnDiv.id = "backBtnDiv";
        post.className = "";
        backBtnDiv.className = "back-btn";
        divCommentsContainer.className = "comments-container";
        divComments.className = "comments";
        backBtnDiv.onclick = reloadPostsPage;
        main.appendChild(section);
        backBtnDiv.appendChild(backIcon);
        divCommentsContainer.appendChild(divComments);
        section.appendChild(backBtnDiv);
        section.appendChild(post);
        section.appendChild(divCommentsContainer);
        const idNumber = parseInt(postId);
        const postItem = PostsApp.posts[idNumber];
        const postElement = createBlogPost(postItem.getId().toString(), postItem.getImageUrl(), postItem.getTitle(), postItem.getBody(), false);
        post.appendChild(postElement);
        const comments = getCommentsByPostId(postItem.getId(), PostsApp.comments);
        for (let i = 0; i < comments.length; i++) {
            const comment = comments[i];
            const commentElement = createComment(comment.getId().toString(), comment.getEmail(), comment.getBody());
            divComments.appendChild(commentElement);
        }
        window.scrollTo(0, 0);
    }
    PostsApp.loadFullPostPage = loadFullPostPage;
    function createBlogPost(id, imageUrl, titleStr, paragraphStr, buildFooter) {
        const classPrefix = buildFooter ? "posts-page" : "full-post-page";
        const container = document.createElement("div");
        const header = document.createElement("div");
        const image = document.createElement("img");
        const body = document.createElement("div");
        const title = document.createElement("h2");
        const paragraph = document.createElement("p");
        container.classList.add(`${classPrefix}-post-container`);
        header.classList.add(`${classPrefix}-post-header`);
        image.classList.add(`${classPrefix}-post-image`);
        body.classList.add(`${classPrefix}-post-body`);
        title.classList.add(`${classPrefix}-post-title`);
        paragraph.classList.add(`${classPrefix}-post-paragraph`);
        image.src = "./assets/" + imageUrl;
        title.innerText = titleStr;
        paragraph.textContent = paragraphStr;
        header.style.backgroundImage = `url("./assets/${imageUrl}")`;
        header.appendChild(image);
        body.appendChild(title);
        body.appendChild(paragraph);
        container.appendChild(header);
        container.appendChild(body);
        if (buildFooter) {
            const footer = document.createElement("div");
            const link = document.createElement("a");
            footer.classList.add("post-footer");
            link.classList.add("post-link");
            link.innerText = "Expand...";
            link.href = "#";
            container.dataset.id = id;
            container.onclick = (event) => { loadFullPostPage(event.currentTarget.dataset.id); };
            container.appendChild(footer);
            footer.appendChild(link);
        }
        return container;
    }
    PostsApp.createBlogPost = createBlogPost;
    function createComment(id, email, body) {
        const container = document.createElement("div");
        const spanUser = document.createElement("span");
        const spanComment = document.createElement("span");
        container.classList.add("comment-container");
        spanUser.classList.add("comment-item-user");
        spanComment.classList.add("comment-body");
        var userName = email.split("@")[0];
        spanUser.innerText = `${userName}: ${email}: `;
        spanComment.innerText = body;
        container.appendChild(spanUser);
        container.appendChild(spanComment);
        return container;
    }
    PostsApp.createComment = createComment;
    function getCommentsByPostId(postId, comments) {
        return comments.filter(comment => comment.getPostId() == postId);
    }
    PostsApp.getCommentsByPostId = getCommentsByPostId;
    function reloadPostsPage() {
        clearFullPostPage();
        loadPostsPageLayout();
        loadPostsPage(PostsApp.posts, "posts");
    }
    PostsApp.reloadPostsPage = reloadPostsPage;
    function clearPostsPage() {
        const main = document.getElementsByTagName("main")[0];
        main.removeChild(main.children[0]);
        main.removeChild(main.children[0]);
    }
    PostsApp.clearPostsPage = clearPostsPage;
    function clearFullPostPage() {
        const main = document.getElementsByTagName("main")[0];
        main.removeChild(main.children[0]);
    }
    PostsApp.clearFullPostPage = clearFullPostPage;
})(PostsApp || (PostsApp = {}));
