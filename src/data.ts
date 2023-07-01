class Post {
    private id: number;
    private title: string;
    private imageUrl: string;
    private body: string;

    constructor(id: number, title: string, imageUrl: string, body: string) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    getBody(): string {
        return this.body;
    }
}

enum Page { "posts-page", "full-post-page" };

class CommentItem {
    private id: number;
    private postId: number;
    private email: string;
    private body: string;

    constructor(id: number, postId: number, email: string, body: string) {
        this.id = id;
        this.postId = postId;
        this.email = email;
        this.body = body;
    }

    getId(): number {
        return this.id;
    }

    getPostId(): number {
        return this.postId;
    }

    getEmail(): string {
        return this.email;
    }

    getBody(): string {
        return this.body;
    }
}

var posts: Post[] = [
    new Post(0, "Cats", "cat.jpg", "Cats have a remarkable ability to twist their bodies and land on their feet when falling. This reflex, known as the 'righting reflex,' allows them to reorient themselves mid-air and minimize the chances of injury. A cat's whiskers are not only sensitive, but they also help them gauge the width of spaces. The whiskers are roughly as wide as the cat's body, enabling them to determine whether they can fit through a particular opening."),
    new Post(1, "Dogs", "dog.jpg", "Dogs have an extraordinary sense of smell and are capable of detecting scents at concentrations as low as parts per trillion. This keen sense of smell makes them invaluable in various fields, including search and rescue, bomb detection, and even medical detection of diseases like cancer. When dogs wag their tails, the direction of the wag can convey different emotions. A wag to the right often indicates positive emotions such as happiness or friendliness, while a wag to the left can suggest negative emotions like fear or anxiety."),
    new Post(2, "Birds", "bird.jpg", "Many bird species undertake long-distance migrations, covering thousands of miles each year. They navigate using various cues, including the Earth's magnetic field, landmarks, and celestial patterns. Feathers serve multiple functions for birds. They enable flight, provide insulation, and aid in courtship displays. The vibrant colors and patterns of feathers play a crucial role in attracting mates and establishing territories."),
    new Post(3, "Rabbits", "rabbit.jpg", "Rabbits engage in a behavior called coprophagy, which involves eating their own feces. This might sound strange, but it serves a vital purpose. By consuming certain types of feces called cecotropes, rabbits can obtain essential nutrients like proteins and vitamins produced by bacteria in their cecum. They are known for their remarkable reproductive abilities. They have short gestation periods, with some breeds giving birth to a litter of bunnies in just 30 days. This contributes to their reputation for multiplying quickly."),
    new Post(4, "Pigs", "pig.jpg", "Pigs are highly intelligent animals and are often considered one of the most intelligent domesticated species. They are capable of problem-solving, have excellent long-term memory, and can learn complex tasks. They have an exceptional sense of smell. They possess a large number of olfactory receptors, which enables them to detect scents and locate food even when it's buried underground."),
    new Post(5, "Cows", "cow.jpg", "Cows have a social hierarchy within their herds. They form strong bonds with other members and establish friendships. They also display emotions and have been observed forming social networks. They communicate with each other using various vocalizations. They have distinct moo sounds that can convey different messages, such as calling for their calves or signaling distress.")];

var comments: CommentItem[] = [
    new CommentItem(0, 0, "user1@mail.com", "I love cats!"),
    new CommentItem(1, 0, "user2@mail.com", "Cats are the best!"),
    new CommentItem(2, 0, "user3@mail.com", "Very interesting post!"),
    new CommentItem(3, 0, "user4@mail.com", "This is a beautiful page."),
    new CommentItem(4, 1, "user2@mail.com", "Dogs are lovable creatures."),
    new CommentItem(5, 1, "user5@mail.com", "I love dogs!"),
    new CommentItem(6, 1, "user6@mail.com", "Dogs are the best!"),
    new CommentItem(7, 1, "user3@mail.com", "Very interesting post!"),
    new CommentItem(8, 2, "user7@mail.com", "Birds are lovable creatures."),
    new CommentItem(9, 2, "user1@mail.com", "I love birds!"),
    new CommentItem(10, 2, "user8@mail.com", "Birds are the best!"),
    new CommentItem(11, 2, "user2@mail.com", "Very interesting post!"),
    new CommentItem(12, 3, "user9@mail.com", "Rabbits are lovable creatures."),
    new CommentItem(13, 3, "user3@mail.com", "I love rabbits!"),
    new CommentItem(14, 3, "user1@mail.com", "Rabbits are the best!"),
    new CommentItem(15, 3, "user10@mail.com", "Very interesting post!"),
    new CommentItem(16, 4, "user6@mail.com", "Pigs are lovable creatures."),
    new CommentItem(17, 4, "user2@mail.com", "I love pigs!"),
    new CommentItem(18, 4, "user11@mail.com", "Pigs are the best!"),
    new CommentItem(19, 4, "user7@mail.com", "Very interesting post!"),
    new CommentItem(20, 5, "user4@mail.com", "Cows are lovable creatures."),
    new CommentItem(21, 5, "user3@mail.com", "I love cows!"),
    new CommentItem(22, 5, "user1@mail.com", "Cows are the best!"),
    new CommentItem(23, 5, "user9@mail.com", "Very interesting post!")
];

function createBlogPost(id: string, imageUrl: string, titleStr: string, paragraphStr: string, page: Page) {
    let classPrefix: string = page === Page["posts-page"] ? "posts-page" : "full-post-page";

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

        header.dataset.id = id;
        body.dataset.id = id;
        link.dataset.id = id;
        header.onclick = (event) => { loadFullPostPage((event.currentTarget! as HTMLElement).dataset.id); };
        body.onclick = (event) => { loadFullPostPage((event.currentTarget! as HTMLElement).dataset.id); };
        link.onclick = (event) => { loadFullPostPage((event.currentTarget! as HTMLElement).dataset.id); };

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

function createComment(id: string, email: string, body: string):HTMLElement {
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


function loadFullPostPage(postEle) {
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
    
    const postItem = posts[postEle];
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

function reloadPostsPage(){
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