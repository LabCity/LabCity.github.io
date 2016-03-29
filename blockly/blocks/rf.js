/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author hardikpatel2692@gmail.com (Hardik Patel)
 */
'use strict';

goog.provide('Blockly.Blocks.rf');

goog.require('Blockly.Blocks');

Blockly.Blocks['rf_transmit'] = {
  init: function() {
    this.appendValueInput("msg")
        .setCheck(["Number", "String"])
        .appendField(new Blockly.FieldImage("https://cdn.sparkfun.com//assets/parts/5/1/0/3/10534-01a.jpg", 60, 60, "*"))
        .appendField(new Blockly.FieldTextInput("transmit:"), "TRANSMIT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rf_rec'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["Number", "String"])
        .appendField(new Blockly.FieldImage("https://cdn.sparkfun.com//assets/parts/5/1/0/1/10532-01.jpg", 60, 60, "*"))
        .appendField(new Blockly.FieldTextInput("Recieved"), "buf");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};