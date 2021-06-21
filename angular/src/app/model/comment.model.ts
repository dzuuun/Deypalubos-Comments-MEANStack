export class Comment {
    constructor(_id:'',name='',comment='') {
        this._id = _id;
        this.name = name;
        this.comment = comment;
    }
    _id: string;
    name: string;
    comment:string;
}

