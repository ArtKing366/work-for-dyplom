export class Section{
    public descriptions: string;
    public time: number;
    public numberOfSection: number;
    public readonly typeOfTime: string = "min";
    public fileName?: string;
    public fileData?: string; 

    constructor(numOfSec: number, desc: string, time: number, fileName?: string, fileData?: string ){
        this.descriptions = desc;
        this.time = time;
        this.numberOfSection = numOfSec;
        this.fileName = fileName;
        this.fileData = fileData;
    }
}

