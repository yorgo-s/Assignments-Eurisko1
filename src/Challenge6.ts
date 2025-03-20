//lru cache that has a get and put method
class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, number>();
  }

  //get method returns the value of the key that was passed in or null if it doesn't exist
  get(key: number): number | null {
    if (!this.cache.has(key)) {
      return null;
    }
    // Move the key to the end (most recent)
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  //put method adds a key value pair to the cache and removes the least recently used key if the cache is full
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      // Remove the old entry
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      // Remove the least recently used (first inserted) key
      const lruKey = this.cache.keys().next().value;
      if (lruKey !== undefined) {
        this.cache.delete(lruKey);
      }
    }
    this.cache.set(key, value);
  }
}

console.log("Challenge 6");
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3); // Removes key 2
console.log(cache.get(2)); // null
