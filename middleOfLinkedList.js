/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let lengthCount = 0;
    let headCopy = head;
    while (headCopy) {
        lengthCount++;
        headCopy = headCopy.next;
    }
    let halfLen = Math.floor((lengthCount/2));
    while (halfLen > 0) {
        halfLen--;
        head = head.next;
    }
    return head
};
