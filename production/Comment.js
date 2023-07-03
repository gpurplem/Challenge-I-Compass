"use strict";
var PostsApp;
(function (PostsApp) {
    class CommentItem {
        constructor(id, postId, email, body) {
            this.id = id;
            this.postId = postId;
            this.email = email;
            this.body = body;
        }
        getId() {
            return this.id;
        }
        getPostId() {
            return this.postId;
        }
        getEmail() {
            return this.email;
        }
        getBody() {
            return this.body;
        }
    }
    PostsApp.CommentItem = CommentItem;
})(PostsApp || (PostsApp = {}));
