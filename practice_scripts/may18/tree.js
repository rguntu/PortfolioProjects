class TreeNode {
    constructor(val, left= null, right= null) {
        this.left = left;this.right = right;this.val = val;
    }
}


const tree = new TreeNode(1,new TreeNode(2,new TreeNode(4),new TreeNode(5))
,new TreeNode(3,null,new TreeNode(6)))

levelOrderTree(tree);
function levelOrderTree(tree) {
    if(!tree) return []
   
    var queue = [tree]
    var result = []
    while(queue.length > 0) {
        const len = queue.length
        console.log(len)
        var level = []
        for(let i=0; i<len; i++) {
            const node = queue.shift()
            level.push(node.val)
            console.log(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
       
        result.push(level)
    }
    console.log(result)
}