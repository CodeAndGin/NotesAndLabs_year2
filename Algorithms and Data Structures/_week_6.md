# Week 6 #

## Binary search trees ##

In a binary search tree, nodes in the left subtree are less than the parent, nodes in the right are greater than or equal to the parent node.

basically ordered left to right

* normal binTree, in poor c++: *

bool binaryTree::search (binaryTree tree, int obj) {
	if (tree == NULL)
		return false;
	if (tree.key == obj)
		return true;
	return search(tree.left/right, obj);
}

T(N) = T(k) + T(N-k-1) + theta(1) => theta(N)

time to look at left + time to look at right + time to do current node

in a binary search tree:

bool binarySearchTree::find (binarySearchTree tree, obj) {
	if (tree == NULL)
		return false;
	if (tree.key == obj) {
		return true;
	} else if (tree.key > obj) {
		return find(tree.right, obj);
	} else {
		return find(tree.left, obj);
	}
}

this is theta(h) where h = height of the tree

a nearly complete binary search tree has both the binary search tree property and the complete property.

for a complete binary search tree, h is ceil(log(N))
max => theta(log[N])


## Merge Sort ##

To sort a sequence using merge sort: sort two half length subsequences then combine the result
