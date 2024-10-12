class C2 {
    _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }
//   TypeScript has some special inference rules for accessors:
// 1.   If get exists but no set, the property is automatically readonly
// 2.   If the type of the setter parameter is not specified, it is inferred from the return type of the getter

class Thing {
    _size = 0;
   
    get size(): number {
      return this._size;
    }
   
    set size(value: string | number | boolean) {
      let num = Number(value);
   
      // Don't allow NaN, Infinity, etc
   
      if (!Number.isFinite(num)) {
        this._size = 0;
        return;
      }
   
      this._size = num;
    }
  }
  