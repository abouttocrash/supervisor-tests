import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import * as fs from 'fs'
import * as path from 'path'
export interface InputData{
    name:string;
    value:string
}
//TODO: 
export class HomePage{
    url = "https://prueba-sitio-59d91.web.app/"
    homePageInputData = {
        userName : "",
        password: ""
    }
    constructor(){

    }
    async clickLogin(){

    }
    async get(){
        await browser.get(this.url)
    }
    initData(){
        //TODO: maybe cambiarlo a un folder x page?
        let p = path.join(__dirname, "../../../config/input-data.json")
        let inputData = JSON.parse(fs.readFileSync(p,'utf-8')) as Array<InputData>
        inputData.forEach((data:InputData)=>{ this.homePageInputData[data.name] = data.value;})
    }


}