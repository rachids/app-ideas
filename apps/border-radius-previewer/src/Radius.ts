export default class Radius 
{
    topLeft: number;
    topRight: number;
    bottomLeft: number;
    bottomRight: number;
    propertyNames: string[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

    constructor(topLeft: number = 0, topRight: number = 0, bottomLeft: number = 0, bottomRight: number = 0)
    {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }

    setValue(name: string, value: number = 0): string
    {
        if(value < 0) {
            throw new Error("Incorrect value.");
        }

        let propertyName = this.propertyNames.indexOf(name);

        if(propertyName === -1) {
            throw new Error("Incorrect name.");
        }

        // TODO: Trouver le moyen de dynamiquement mettre la valeur dans la propriété.
        switch (name) {
            case 'top-left':
                this.topLeft = value;
                break;
            case 'top-right':
                this.topRight = value;
                break;
            case 'bottom-right':
                this.bottomRight = value;
                break;
            case 'bottom-left':
                this.bottomLeft = value;
                break;
        
            default:
                break;
        }

        return this.generateCss();
    }

    generateCss(): string
    {
        if(this.hasNoValue()) {
            return '0';
        }

        return `${this.topLeft}px ${this.topRight}px ${this.bottomRight}px ${this.bottomLeft}px`;
    }

    getCssCode(): string
    {
        return `border: ${this.generateCss()};`;
    }

    hasNoValue(): boolean
    {
        return this.topLeft === 0
            && this.topRight === 0
            && this.bottomLeft === 0
            && this.bottomRight === 0;
    }
}