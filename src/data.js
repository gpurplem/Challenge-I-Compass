var Post = /** @class */ (function () {
    function Post(id, title, imageUrl, body) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
    }
    Post.prototype.getId = function () {
        return this.id;
    };
    Post.prototype.getTitle = function () {
        return this.title;
    };
    Post.prototype.getImageUrl = function () {
        return this.imageUrl;
    };
    Post.prototype.getBody = function () {
        return this.body;
    };
    return Post;
}());
var posts = [
    new Post(1, "Cats", "cat.jpg", "Cats are cute"),
    new Post(2, "Dogs", "dog.jpg", "Dogs are cute"),
    new Post(3, "Birds", "bird.jpg", "Birds are cute"),
    new Post(4, "Rabbits", "rabbit.jpg", "Rabbits are cute"),
    new Post(5, "Pigs", "pig.jpg", "Pigs are cute"),
    new Post(6, "Cows", "cow.jpg", "Cows are cute")
];
function createBlogPost(imageUrl, titleStr, paragraphStr) {
    var container = document.createElement("div");
    container.classList.add("post-container");
    var header = document.createElement("div");
    header.classList.add("post-header");
    var image = document.createElement("img");
    image.classList.add("post-image");
    image.src = "./assets/" + imageUrl;
    header.appendChild(image);
    var body = document.createElement("div");
    body.classList.add("post-body");
    var title = document.createElement("h2");
    title.classList.add("post-title");
    title.innerText = titleStr;
    var paragraph = document.createElement("p");
    paragraph.classList.add("post-paragraph");
    paragraph.textContent = paragraphStr;
    body.appendChild(title);
    body.appendChild(paragraph);
    var footer = document.createElement("div");
    footer.classList.add("post-footer");
    var link = document.createElement("a");
    link.classList.add("post-link");
    link.innerText = "Expand...";
    link.href = "#";
    footer.appendChild(link);
    container.appendChild(header);
    container.appendChild(body);
    container.appendChild(footer);
    return container;
}
function loadPosts() {
    var container = document.getElementById("posts");
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var postElement = createBlogPost(post.getImageUrl(), post.getTitle(), post.getBody());
        container.appendChild(postElement);
    }
}
loadPosts();
