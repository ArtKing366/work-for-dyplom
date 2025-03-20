

export class Section{
    // public name: string;
    public descriptions: string;
    public time: number;
    public numberOfSection: number;
    public readonly typeOfTime: string = "min";

    constructor(numOfSec: number, desc: string, time: number ){
        // this.name = name;
        this.descriptions = desc;
        this.time = time;
        this.numberOfSection = numOfSec;
    }

}

