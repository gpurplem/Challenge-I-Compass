namespace PostsApp {
    export var posts: Post[] = [
        new Post(0, "Cats", "cat.jpg", "Cats have a remarkable ability to twist their bodies and land on their feet when falling. This reflex, known as the 'righting reflex,' allows them to reorient themselves mid-air and minimize the chances of injury. A cat's whiskers are not only sensitive, but they also help them gauge the width of spaces. The whiskers are roughly as wide as the cat's body, enabling them to determine whether they can fit through a particular opening."),
        new Post(1, "Dogs", "dog.jpg", "Dogs have an extraordinary sense of smell and are capable of detecting scents at concentrations as low as parts per trillion. This keen sense of smell makes them invaluable in various fields, including search and rescue, bomb detection, and even medical detection of diseases like cancer. When dogs wag their tails, the direction of the wag can convey different emotions. A wag to the right often indicates positive emotions such as happiness or friendliness, while a wag to the left can suggest negative emotions like fear or anxiety."),
        new Post(2, "Birds", "bird.jpg", "Many bird species undertake long-distance migrations, covering thousands of miles each year. They navigate using various cues, including the Earth's magnetic field, landmarks, and celestial patterns. Feathers serve multiple functions for birds. They enable flight, provide insulation, and aid in courtship displays. The vibrant colors and patterns of feathers play a crucial role in attracting mates and establishing territories."),
        new Post(3, "Rabbits", "rabbit.jpg", "Rabbits engage in a behavior called coprophagy, which involves eating their own feces. This might sound strange, but it serves a vital purpose. By consuming certain types of feces called cecotropes, rabbits can obtain essential nutrients like proteins and vitamins produced by bacteria in their cecum. They are known for their remarkable reproductive abilities. They have short gestation periods, with some breeds giving birth to a litter of bunnies in just 30 days. This contributes to their reputation for multiplying quickly."),
        new Post(4, "Pigs", "pig.jpg", "Pigs are highly intelligent animals and are often considered one of the most intelligent domesticated species. They are capable of problem-solving, have excellent long-term memory, and can learn complex tasks. They have an exceptional sense of smell. They possess a large number of olfactory receptors, which enables them to detect scents and locate food even when it's buried underground."),
        new Post(5, "Cows", "cow.jpg", "Cows have a social hierarchy within their herds. They form strong bonds with other members and establish friendships. They also display emotions and have been observed forming social networks. They communicate with each other using various vocalizations. They have distinct moo sounds that can convey different messages, such as calling for their calves or signaling distress.")];

    export var comments: CommentItem[] = [
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
}