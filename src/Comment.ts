namespace PostsApp {
    export class CommentItem {
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
}