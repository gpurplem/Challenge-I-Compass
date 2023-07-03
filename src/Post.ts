namespace PostsApp {
    export class Post {
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
}