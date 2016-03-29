/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating Arduino for logic blocks.
 * @author hardikpatel2692@gmail.com (Hardik Patel)
 */
'use strict';

goog.provide('Blockly.Arduino.rf');

goog.require('Blockly.Arduino');

Blockly.Arduino.rf_transmit = function() {
    Blockly.Arduino.definitions_['define_rf'] = '#include <VirtualWire.h>\n';
    Blockly.Arduino.definitions_['var_rfMsg'] = 'char msg[1];\n';
    
    var argument0 = Blockly.Arduino.valueToCode(this, 'msg', Blockly.Arduino.ORDER_NONE) || '0';
    Blockly.Arduino.setups_["setup_rf_transmit"] = 'vw_setup(2000);\n';
    var code = 'msg[0] = ' + argument0 + '\n'+
        'vw_send((uint8_t *)msg, strlen(msg));\n'+
        'vw_wait_tx();\n';
        
    return code;
};

Blockly.Arduino.rf_rec = function() {
    Blockly.Arduino.definitions_['define_rf'] = '#include <VirtualWire.h>\n';
    Blockly.Arduino.setups_["setup_rf_rec"] = 'vw_setup(2000);\n'+
        '  vw_rx_start();\n';
    
    var argument0 = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_NONE) || '0';
   // Blockly.Arduino.definitions_['define_recVar'] = 'uint8_t '+argument0+ '[VW_MAX_MESSAGE_LEN];\n';
    var code = 'uint8_t buf[VW_MAX_MESSAGE_LEN];\n'+
        'uint8_t buflen = VW_MAX_MESSAGE_LEN;\n'+
        'if(vw_get_message(buf,&buflen)){\n' +
        '   '+argument0+' = buf[0];\n' +
        '   for(int i=0; i<buflen; i++){buf[i] = 0;}\n' +
        '}\n';
        
     return code;
};
