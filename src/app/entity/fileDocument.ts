export class FileDocument {
    name: string;
    description: string;
    size: number;

    constructor(name: string, description: string = '', size: number = 0) {
        this.name = name;
        this.description = description;
        this.size = size;
    }

    setSize(size: number) {
        this.size = size;
    }
}