/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next && n > 0) return head.next
    let headCopy = head;
    let arr = [];
    while (headCopy) {
        arr.push(headCopy.val);
        headCopy = headCopy.next;
    }
    arr.splice((arr.length - n), 1)
    let next = null;
    let node;
    for (let i = arr.length - 1; i >= 0; i--) {
        node = new ListNode(arr[i]);
        node.next = next;
        next = node;
    }
    return node
};
