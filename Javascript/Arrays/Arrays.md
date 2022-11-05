# Arrays 

## Javascript 

### Important methods for manipulating arrays in Javascript

<details><summary>push</summary>
<p>

```javascript
   array.push("e");
/* The following method takes an element and pushes to the end of the array.

   Time complexity :  0(1); */
```
</p>
</details>

<details><summary>pop</summary>
<p>

```javascript
   array.pop();
/* The following method removes the last element from an array.
   Time complexity :  0(1); */
```
</p>
</details>

<details><summary>unshift</summary>
<p>

```javascript
   array.unshift("x");
/* Element is added into the first position of the array , shifting all the other elements to the next index position.
   -Important :
    This method overwrites the original array.

   Time complexity :  0(n); */
```
</p>
</details>


<details><summary>splice</summary>
<p>

```javascript
   array.splice(2,0, "alien");
/* Splice add and removes array elements.

  -param1 : position to add/remove
  -param2 : Optional, number of items to be removed
  -param3 : New elements to be added

  Explanation for the example above:
  -Starts on the index of param1, since there's no element to be deleted as we have specified 0, it add param3 at the second index postion and shift the items to the right.

   Time complexity :  0(n); */
```
</p>
</details>

### Arrays from Scratch
<details><summary>Arrays from Scratch</summary>
<p>

```javascript
   class MyArray {
    constructor() {
        this.length = 0;
        this.data = {} ;
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1 ];
        this.length--;
        return lastItem;
    }
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return items;
    }
    shiftItems(index) {
        for(let i = index; i < this.length - 1 ; i++) {
            this.data[i] = this.data[i + 1];
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
    }
   }
```
</p>
</details>


