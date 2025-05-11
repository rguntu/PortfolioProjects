//@desc get posts
//@route GET /api/posts
var posts = [{id:1, title: "post1"}]
export const getPosts = ((req, res) => {
    console.log("posts")
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0,1))
    }
    res.status(200).json(posts)
})

export const getPost = ((req, res, next) => {
    const id_ = parseInt(req.params.id)
    //res.json(posts.filter(post => post.id === id_))
    const post = posts.find(post => post.id === id_)
    if(!post) {
        const error = new Error("not found...")
        error.status = 404
        return next(error)
    }
    // if(!post) {
    //     res.status(404).json({msg: "not found"})
    // }
    res.json(post)
})

export const createPost = ((req, res) => {
    console.log(req.body)
    const newPost = {
        id: posts.length+1,
        title: req.body.title
    }
    if(!newPost.title) {
        res.status(400).json({msg:"in valid"})
    }
    posts.push(newPost)
    res.status(201).json(posts)
} )
