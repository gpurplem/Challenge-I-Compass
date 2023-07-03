"use strict";
/// <reference path="Post.ts" />
/// <reference path="Comment.ts" />
/// <reference path="data.ts" />
/// <reference path="DOM.ts" />
var PostsApp;
(function (PostsApp) {
    PostsApp.loadPostsPageLayout();
    PostsApp.loadPostsPage(PostsApp.posts, 'posts');
})(PostsApp || (PostsApp = {}));
