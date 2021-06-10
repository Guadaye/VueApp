
 import Catagory from '@/model/Catagory.js'
export default class GameE{


    constructor(id, name = "new game" , questionNumber = "4",  ){
        this.gameId=id;
        this.gameName = name;
        this.questionNumber = questionNumber;
        this.catagoryList= [] ;

        
    }


}