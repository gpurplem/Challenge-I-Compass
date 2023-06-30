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
    new Post(0, "Cats", "cat.jpg", "Cats have a remarkable ability to twist their bodies and land on their feet when falling. This reflex, known as the 'righting reflex,' allows them to reorient themselves mid-air and minimize the chances of injury. A cat's whiskers are not only sensitive, but they also help them gauge the width of spaces. The whiskers are roughly as wide as the cat's body, enabling them to determine whether they can fit through a particular opening."),
    new Post(1, "Dogs", "dog.jpg", "Dogs have an extraordinary sense of smell and are capable of detecting scents at concentrations as low as parts per trillion. This keen sense of smell makes them invaluable in various fields, including search and rescue, bomb detection, and even medical detection of diseases like cancer. When dogs wag their tails, the direction of the wag can convey different emotions. A wag to the right often indicates positive emotions such as happiness or friendliness, while a wag to the left can suggest negative emotions like fear or anxiety."),
    new Post(2, "Birds", "bird.jpg", "Many bird species undertake long-distance migrations, covering thousands of miles each year. They navigate using various cues, including the Earth's magnetic field, landmarks, and celestial patterns. Feathers serve multiple functions for birds. They enable flight, provide insulation, and aid in courtship displays. The vibrant colors and patterns of feathers play a crucial role in attracting mates and establishing territories."),
    new Post(3, "Rabbits", "rabbit.jpg", "Rabbits engage in a behavior called coprophagy, which involves eating their own feces. This might sound strange, but it serves a vital purpose. By consuming certain types of feces called cecotropes, rabbits can obtain essential nutrients like proteins and vitamins produced by bacteria in their cecum. They are known for their remarkable reproductive abilities. They have short gestation periods, with some breeds giving birth to a litter of bunnies in just 30 days. This contributes to their reputation for multiplying quickly."),
    new Post(4, "Pigs", "pig.jpg", "Pigs are highly intelligent animals and are often considered one of the most intelligent domesticated species. They are capable of problem-solving, have excellent long-term memory, and can learn complex tasks. They have an exceptional sense of smell. They possess a large number of olfactory receptors, which enables them to detect scents and locate food even when it's buried underground."),
    new Post(5, "Cows", "cow.jpg", "Cows have a social hierarchy within their herds. They form strong bonds with other members and establish friendships. They also display emotions and have been observed forming social networks. They communicate with each other using various vocalizations. They have distinct moo sounds that can convey different messages, such as calling for their calves or signaling distress.")];

enum Page { "posts-page", "full-post-page" };

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
}

function clearMain() {
    const main = document.getElementsByTagName("main")![0];
    main.removeChild(main.children[0]);
    main.removeChild(main.children[0]);
}

function loadFullPostPage(postEle) {
    clearMain();

    const main = document.getElementsByTagName("main")![0];
    const section = document.createElement("section")!;
    const container = document.createElement("div")!;
    const post = document.createElement("div")!;
    const divComments = document.createElement("div")!;

    section.id = "full-post-page";
    post.id = "full-post";

    container.className = "";
    post.className = "";

    main.appendChild(section);
    section.appendChild(container);
    container.appendChild(post);
    container.appendChild(divComments);

    console.log(postEle);
    const postItem = posts[postEle];
    const postElement = createBlogPost(postItem.getId().toString(), postItem.getImageUrl(), postItem.getTitle(), postItem.getBody(), Page["full-post-page"]);
    post.appendChild(postElement);

    return null;
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