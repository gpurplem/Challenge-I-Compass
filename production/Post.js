"use strict";
var PostsApp;
(function (PostsApp) {
    class Post {
        constructor(id, title, imageUrl, body) {
            this.id = id;
            this.title = title;
            this.imageUrl = imageUrl;
            this.body = body;
        }
        getId() {
            return this.id;
        }
        getTitle() {
            return this.title;
        }
        getImageUrl() {
            return this.imageUrl;
        }
        getBody() {
            return this.body;
        }
    }
    PostsApp.Post = Post;
})(PostsApp || (PostsApp = {}));
