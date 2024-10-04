function cats(arr: string[]): void {
    const arrLength: number = arr.length;

    class Cat {
        private name: string;
        private age: string;

        public constructor(name: string, age: string) {
            this.name = name;
            this.age = age;
        }

        public meow(): string {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let i = 0; i < arrLength; i++) {
        let catInfo: string = arr[i];
        let [name, age] = catInfo.split(' ');
        
        let cat = new Cat(name, age);
        console.log(cat.meow());
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);