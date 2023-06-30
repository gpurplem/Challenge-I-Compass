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
    new Post(0, "Cats", "cat.jpg", "Cats have a remarkable ability to twist their bodies and land on their feet when falling. This reflex, known as the 'righting reflex,' allows them to reorient themselves mid-air and minimize the chances of injury. A cat's whiskers are not only sensitive, but they also help them gauge the width of spaces. The whiskers are roughly as wide as the cat's body, enabling them to determine whether they can fit through a particular opening."),
    new Post(1, "Dogs", "dog.jpg", "Dogs have an extraordinary sense of smell and are capable of detecting scents at concentrations as low as parts per trillion. This keen sense of smell makes them invaluable in various fields, including search and rescue, bomb detection, and even medical detection of diseases like cancer. When dogs wag their tails, the direction of the wag can convey different emotions. A wag to the right often indicates positive emotions such as happiness or friendliness, while a wag to the left can suggest negative emotions like fear or anxiety."),
    new Post(2, "Birds", "bird.jpg", "Many bird species undertake long-distance migrations, covering thousands of miles each year. They navigate using various cues, including the Earth's magnetic field, landmarks, and celestial patterns. Feathers serve multiple functions for birds. They enable flight, provide insulation, and aid in courtship displays. The vibrant colors and patterns of feathers play a crucial role in attracting mates and establishing territories."),
    new Post(3, "Rabbits", "rabbit.jpg", "Rabbits engage in a behavior called coprophagy, which involves eating their own feces. This might sound strange, but it serves a vital purpose. By consuming certain types of feces called cecotropes, rabbits can obtain essential nutrients like proteins and vitamins produced by bacteria in their cecum. They are known for their remarkable reproductive abilities. They have short gestation periods, with some breeds giving birth to a litter of bunnies in just 30 days. This contributes to their reputation for multiplying quickly."),
    new Post(4, "Pigs", "pig.jpg", "Pigs are highly intelligent animals and are often considered one of the most intelligent domesticated species. They are capable of problem-solving, have excellent long-term memory, and can learn complex tasks. They have an exceptional sense of smell. They possess a large number of olfactory receptors, which enables them to detect scents and locate food even when it's buried underground."),
    new Post(5, "Cows", "cow.jpg", "Cows have a social hierarchy within their herds. They form strong bonds with other members and establish friendships. They also display emotions and have been observed forming social networks. They communicate with each other using various vocalizations. They have distinct moo sounds that can convey different messages, such as calling for their calves or signaling distress.")
];
var Page;
(function (Page) {
    Page[Page["posts-page"] = 0] = "posts-page";
    Page[Page["full-post-page"] = 1] = "full-post-page";
})(Page || (Page = {}));
;
function createBlogPost(id, imageUrl, titleStr, paragraphStr, page) {
    var classPrefix = page === Page["posts-page"] ? "posts-page" : "full-post-page";
    var container = document.createElement("div");
    var header = document.createElement("div");
    var image = document.createElement("img");
    var body = document.createElement("div");
    var title = document.createElement("h2");
    var paragraph = document.createElement("p");
    container.classList.add("".concat(classPrefix, "-post-container"));
    header.classList.add("".concat(classPrefix, "-post-header"));
    image.classList.add("".concat(classPrefix, "-post-image"));
    body.classList.add("".concat(classPrefix, "-post-body"));
    title.classList.add("".concat(classPrefix, "-post-title"));
    paragraph.classList.add("".concat(classPrefix, "-post-paragraph"));
    image.src = "./assets/" + imageUrl;
    title.innerText = titleStr;
    paragraph.textContent = paragraphStr;
    header.appendChild(image);
    body.appendChild(title);
    body.appendChild(paragraph);
    container.appendChild(header);
    container.appendChild(body);
    if (page === Page["posts-page"]) {
        var footer = document.createElement("div");
        var link = document.createElement("a");
        footer.classList.add("post-footer");
        link.classList.add("post-link");
        link.innerText = "Expand...";
        link.href = "#";
        header.dataset.id = id;
        body.dataset.id = id;
        link.dataset.id = id;
        header.onclick = function (event) { loadFullPostPage(event.currentTarget.dataset.id); };
        body.onclick = function (event) { loadFullPostPage(event.currentTarget.dataset.id); };
        link.onclick = function (event) { loadFullPostPage(event.currentTarget.dataset.id); };
        container.appendChild(footer);
        footer.appendChild(link);
    }
    return container;
}
function loadPostsPage() {
    var container = document.getElementById("posts");
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var postElement = createBlogPost(post.getId().toString(), post.getImageUrl(), post.getTitle(), post.getBody(), Page["posts-page"]);
        container.appendChild(postElement);
    }
}
function clearMain() {
    var main = document.getElementsByTagName("main")[0];
    main.removeChild(main.children[0]);
    main.removeChild(main.children[0]);
}
function loadFullPostPage(postEle) {
    clearMain();
    var main = document.getElementsByTagName("main")[0];
    var section = document.createElement("section");
    var container = document.createElement("div");
    var post = document.createElement("div");
    var divComments = document.createElement("div");
    section.id = "full-post-page";
    post.id = "full-post";
    container.className = "";
    post.className = "";
    main.appendChild(section);
    section.appendChild(container);
    container.appendChild(post);
    container.appendChild(divComments);
    console.log(postEle);
    var postItem = posts[postEle];
    var postElement = createBlogPost(postItem.getId().toString(), postItem.getImageUrl(), postItem.getTitle(), postItem.getBody(), Page["full-post-page"]);
    post.appendChild(postElement);
    return null;
}
function loadPostsPageLayout() {
    var main = document.getElementsByTagName("main")[0];
    var p = document.createElement("p");
    var section = document.createElement("section");
    p.className = 'main-title';
    p.innerText = "User posts";
    section.id = "posts";
    main.appendChild(p);
    main.appendChild(section);
}
loadPostsPageLayout();
loadPostsPage();
