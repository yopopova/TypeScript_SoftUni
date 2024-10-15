class CompareElements<T> {
    arr: T[];

    constructor (arr: T[]) {
        this.arr = arr;
    }

    compare (comparator: any): number {
        let matches: number = 0;

        for (const element of this.arr) {
            if (element === comparator) {
                matches++;
            }
        }
        
        return matches;
    }
}

let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));

let c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c2.compare(1));