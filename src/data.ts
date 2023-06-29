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

var posts: Post[] = [
    new Post(1, "Cats", "cat.jpg", "Cats are cute"),
    new Post(2, "Dogs", "dog.jpg", "Dogs are cute"),
    new Post(3, "Birds", "bird.jpg", "Birds are cute"),
    new Post(4, "Rabbits", "rabbit.jpg", "Rabbits are cute"),
    new Post(5, "Pigs", "pig.jpg", "Pigs are cute"),
    new Post(6, "Cows", "cow.jpg", "Cows are cute")];

function createBlogPost(imageUrl: string, titleStr: string, paragraphStr: string){
    const container = document.createElement("div");
    container.classList.add("post-container");

    const header = document.createElement("div");
    header.classList.add("post-header");

    const image = document.createElement("img");
    image.classList.add("post-image");
    image.src = "./assets/" + imageUrl;
    header.appendChild(image);

    const body = document.createElement("div");
    body.classList.add("post-body");
    const title = document.createElement("h2");
    title.classList.add("post-title");
    title.innerText = titleStr;
    const paragraph = document.createElement("p");
    paragraph.classList.add("post-paragraph");
    paragraph.textContent = paragraphStr;
    body.appendChild(title);
    body.appendChild(paragraph);

    const footer = document.createElement("div");
    footer.classList.add("post-footer");
    const link = document.createElement("a");
    link.classList.add("post-link");
    link.innerText = "Expand...";
    link.href = "#";
    footer.appendChild(link);

    container.appendChild(header);
    container.appendChild(body);
    container.appendChild(footer);

    return container;
}
    
function loadPosts(){
    const container = document.getElementById("posts")!;

    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        const postElement = createBlogPost(post.getImageUrl(), post.getTitle(), post.getBody());
        container.appendChild(postElement);
    }
}

loadPosts();
