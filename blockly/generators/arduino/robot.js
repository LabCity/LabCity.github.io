//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * Visual Blocks Language
 *
 * Copyright 2016 Hardik Patel.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author hardikpatel2692@gmail.com (Hardik Patel)
 */

goog.provide('Blockly.Arduino.robot');

goog.require('Blockly.Arduino');

Blockly.Arduino.moveforward = function() {
    Blockly.Arduino.setups_["setup_motor"] = "pinMode(2,OUTPUT);//I1\n"+
    "  pinMode(3,OUTPUT);//I2\n"+
    "  pinMode(4,OUTPUT);//I3\n"+
    "  pinMode(5,OUTPUT);//I4\n"+
    "  pinMode(6,OUTPUT);//ENABLE\n"+
    "  pinMode(7, OUTPUT);//LASER\n"+
    "  digitalWrite(7, LOW); //LASER OFF\n"+
    "  digitalWrite(6, LOW);//DISABLE MOTOR\n";
    
    var code = "digitalWrite(6, HIGH);//ENABLE motor\n"+
        "digitalWrite(2, LOW);\n"+
        "digitalWrite(3, HIGH);\n"+
        "digitalWrite(4, LOW);\n"+
        "digitalWrite(5, HIGH);\n"+
        "digitalWrite(6, LOW);//DISABLE Motor\n";
            
    return code;
};

Blockly.Arduino.makeright = function() {
    var code = "digitalWrite(6, HIGH);//ENABLE motor\n"+
    "digitalWrite(2, LOW);\n"+
    "digitalWrite(3, HIGH);\n"+
    "digitalWrite(4, HIGH);\n"+
    "digitalWrite(5, LOW);\n"+
    "digitalWrite(6, LOW);//DISABLE Motor\n";
        
    return code;
};

Blockly.Arduino.makeleft = function() {
    var code = "digitalWrite(6, HIGH);//ENABLE motor\n"+
    "digitalWrite(2, HIGH);\n"+
    "digitalWrite(3, LOW);\n"+
    "digitalWrite(4, LOW);\n"+
    "digitalWrite(5, HIGH);\n"+
    "digitalWrite(6, LOW);//DISABLE Motor\n";
        
    return code;
};

Blockly.Arduino.movereverse = function() {
    var code = "digitalWrite(6, HIGH);//ENABLE motor\n"+
        "digitalWrite(2, HIGH);\n"+
        "digitalWrite(3, LOW);\n"+
        "digitalWrite(4, HIGH);\n"+
        "digitalWrite(5, LOW);\n"+
        "digitalWrite(6, LOW);//DISABLE Motor\n";
        
    return code;
};

Blockly.Arduino.shootlaser = function() {
    var code = "digitalWrite(7, HIGH);\n"+
        "delay(1000);\n"+
        "digitalWrite(7, LOW);\n";
        
    return code;
};



