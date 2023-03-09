### Arrays from Scratch
<details><summary>Arrays from Scratch</summary>
<p>

```javascript
   class HashTables{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i< key length; i++) {
            hash = (hash + key.charAt(i) * i ) % this.data.length
        }
        return hash;
    }
   }
```
</p>
</details>