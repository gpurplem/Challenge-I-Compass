/// <reference path="Post.ts" />
/// <reference path="Comment.ts" />
/// <reference path="data.ts" />
/// <reference path="DOM.ts" />

namespace PostsApp {
    
    loadPostsPageLayout();
    
    loadPostsPage(PostsApp.posts, 'posts');
}

