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
    new Post(1, "Cats", "cat.jpg", "Cats have a remarkable ability to twist their bodies and land on their feet when falling. This reflex, known as the 'righting reflex,' allows them to reorient themselves mid-air and minimize the chances of injury. A cat's whiskers are not only sensitive, but they also help them gauge the width of spaces. The whiskers are roughly as wide as the cat's body, enabling them to determine whether they can fit through a particular opening."),
    new Post(2, "Dogs", "dog.jpg", "Dogs have an extraordinary sense of smell and are capable of detecting scents at concentrations as low as parts per trillion. This keen sense of smell makes them invaluable in various fields, including search and rescue, bomb detection, and even medical detection of diseases like cancer. When dogs wag their tails, the direction of the wag can convey different emotions. A wag to the right often indicates positive emotions such as happiness or friendliness, while a wag to the left can suggest negative emotions like fear or anxiety."),
    new Post(3, "Birds", "bird.jpg", "Many bird species undertake long-distance migrations, covering thousands of miles each year. They navigate using various cues, including the Earth's magnetic field, landmarks, and celestial patterns. Feathers serve multiple functions for birds. They enable flight, provide insulation, and aid in courtship displays. The vibrant colors and patterns of feathers play a crucial role in attracting mates and establishing territories."),
    new Post(4, "Rabbits", "rabbit.jpg", "Rabbits engage in a behavior called coprophagy, which involves eating their own feces. This might sound strange, but it serves a vital purpose. By consuming certain types of feces called cecotropes, rabbits can obtain essential nutrients like proteins and vitamins produced by bacteria in their cecum. They are known for their remarkable reproductive abilities. They have short gestation periods, with some breeds giving birth to a litter of bunnies in just 30 days. This contributes to their reputation for multiplying quickly."),
    new Post(5, "Pigs", "pig.jpg", "Pigs are highly intelligent animals and are often considered one of the most intelligent domesticated species. They are capable of problem-solving, have excellent long-term memory, and can learn complex tasks. They have an exceptional sense of smell. They possess a large number of olfactory receptors, which enables them to detect scents and locate food even when it's buried underground."),
    new Post(6, "Cows", "cow.jpg", "Cows have a social hierarchy within their herds. They form strong bonds with other members and establish friendships. They also display emotions and have been observed forming social networks. They communicate with each other using various vocalizations. They have distinct moo sounds that can convey different messages, such as calling for their calves or signaling distress.")];

function createBlogPost(imageUrl: string, titleStr: string, paragraphStr: string){
    const container = document.createElement("div");
    container.classList.add("post-container");

    const header = document.createElement("div");
    header.classList.add("post-header");
    header.onclick = loadCommentPage;

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
    body.onclick = loadCommentPage;

    const footer = document.createElement("div");
    footer.classList.add("post-footer");
    const link = document.createElement("a");
    link.classList.add("post-link");
    link.innerText = "Expand...";
    link.href = "#";
    link.onclick = loadCommentPage;
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

function loadCommentPage(){
    console.log("clicked");
    return null;
}