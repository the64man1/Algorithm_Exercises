/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let area = (right - left) * (Math.min(height[left], height[right]));
    while (right > left) {
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        let tempArea = (right - left) * (Math.min(height[left], height[right]));
        area = Math.max(area, tempArea)
    }
    return area;
};
