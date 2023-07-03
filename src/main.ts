/// <reference path="Post.ts" />
/// <reference path="Comment.ts" />
/// <reference path="data.ts" />

namespace PostsApp {
    enum Page { "posts-page", "full-post-page" };

    function createBlogPost(id: string, imageUrl: string, titleStr: string, paragraphStr: string, page: Page) {
        
        const classPrefix: string = page === Page["posts-page"] ? "posts-page" : "full-post-page";

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

        header.appendChild(image);
        body.appendChild(title);
        body.appendChild(paragraph);
        container.appendChild(header);
        container.appendChild(body);

        if (page === Page["posts-page"]) {
            const footer = document.createElement("div");
            const link = document.createElement("a");

            footer.classList.add("post-footer");
            link.classList.add("post-link");

            link.innerText = "Expand...";
            link.href = "#";

            container.dataset.id = id;
            container.onclick = (event) => { loadFullPostPage((event.currentTarget! as HTMLElement).dataset.id); };

            container.appendChild(footer);
            footer.appendChild(link);
        }

        return container;
    }

    function loadPostsPage() {
        const container = document.getElementById("posts")!;

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            const postElement = createBlogPost(post.getId().toString(), post.getImageUrl(), post.getTitle(), post.getBody(), Page["posts-page"]);
            container.appendChild(postElement);
        }

        window.scrollTo(0, 0);
    }

    function clearPostsPage() {
        const main = document.getElementsByTagName("main")![0];
        main.removeChild(main.children[0]);
        main.removeChild(main.children[0]);
    }

    function clearFullPostPage() {
        const main = document.getElementsByTagName("main")![0];
        main.removeChild(main.children[0]);
    }

    function createComment(id: string, email: string, body: string): HTMLElement {
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


    function loadFullPostPage(postEle: string | undefined) {
        clearPostsPage();

        const main = document.getElementsByTagName("main")![0];
        const section = document.createElement("section")!;
        const container = document.createElement("div")!;
        const post = document.createElement("div")!;
        const divCommentsContainer = document.createElement("div")!;
        const divComments = document.createElement("div")!;
        const backBtnDiv = document.createElement("div")!;
        const backIcon = document.createElement("img")!;

        section.id = "full-post-page";
        post.id = "full-post";
        backIcon.src = "./assets/ArrowIcon.svg";

        container.className = "";
        post.className = "";
        backBtnDiv.className = "back-btn";
        divCommentsContainer.className = "comments-container";
        divComments.className = "comments";

        backBtnDiv.onclick = reloadPostsPage;

        main.appendChild(section);
        section.appendChild(container);
        backBtnDiv.appendChild(backIcon);
        container.appendChild(backBtnDiv);
        container.appendChild(post);
        divCommentsContainer.appendChild(divComments);
        container.appendChild(divCommentsContainer);

        const idNumber = parseInt(postEle!);

        const postItem = posts[idNumber];
        const postElement = createBlogPost(postItem.getId().toString(), postItem.getImageUrl(), postItem.getTitle(), postItem.getBody(), Page["full-post-page"]);
        post.appendChild(postElement);

        const comments = getCommentsByPostId(postItem.getId());

        for (let i = 0; i < comments.length; i++) {
            const comment = comments[i];
            const commentElement = createComment(comment.getId().toString(), comment.getEmail(), comment.getBody());
            divComments.appendChild(commentElement);
        }

        window.scrollTo(0, 0);

        return null;
    }

    function getCommentsByPostId(postId: number): CommentItem[] {
        return comments.filter(comment => comment.getPostId() == postId);
    }

    function reloadPostsPage() {
        clearFullPostPage();
        loadPostsPageLayout();
        loadPostsPage();
    }

    function loadPostsPageLayout() {
        const main = document.getElementsByTagName("main")![0];
        const p = document.createElement("p")!;
        const section = document.createElement("section")!;

        p.className = 'main-title';
        p.innerText = "User posts";
        section.id = "posts";

        main.appendChild(p);
        main.appendChild(section);
    }

    loadPostsPageLayout();
    loadPostsPage();
}

