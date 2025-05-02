import express from 'express'
const router = express.Router()
import {getPost,  getPosts, createPost } from '../controllers/postControllers.js'
let posts = [
    {id: 1, title: "post 1"},
    {id: 2, title: "post 2"}
]


router.put('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const post = posts.find(post => post.id === id)
        if(!post) {
            res.status(400).json("not found")
        }
        post.title = req.body.title
        res.status(200).json(post)
})

router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    if(!post) {
        res.status(400).json("not found")
    }
    posts = posts.filter(post => post.id !== id)
    res.status(200).json(posts)
})

router.post('/', createPost)
router.get('/', getPosts)

router.get('/:id', getPost)

export default router