import { atom } from "recoil"


 export const ModelState = atom ({
    key: 'modelState', 
    default: false,
}); 

export const PostIdState = atom ({
    key: 'PostIdState', 
    default: "", 
})

export const BlogPostPage = atom ({
    key: 'BlogPostPage', 
default: false, 
})