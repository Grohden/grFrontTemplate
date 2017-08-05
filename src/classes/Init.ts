import { Test } from './Test';

class Init {

    private constructor(){
    }

    static init(){
         let test: Test = new Test();

         test.setValue(10);
    }
}

Init.init();