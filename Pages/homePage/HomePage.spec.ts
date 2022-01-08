import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { HomePage } from './HomePage';


    describe('Login supervisor', function() {
        let homePage = new HomePage();
        beforeAll(async () => {
            await homePage.get();
            await homePage.initData();
        })
        
        
        it('Should check the title', async() =>{
            let title = browser.getTitle();
            expect(title).toEqual('Supervisor');
        });
    });
