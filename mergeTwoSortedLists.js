/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let current = new ListNode(0);
    let result = current;
    let value;
    while (l1 || l2) {
        if (!l1) {
            value = l2.val;
            l2 = l2.next;
        } else if (!l2) {
            value = l1.val;
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            value = l1.val;
            l1 = l1.next;
        } else {
            value = l2.val;
            l2 = l2.next;
        }
        current.next = new ListNode(value);
        current = current.next;
    }
    return result.next;
};
