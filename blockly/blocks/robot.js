/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author hardikpatel2692@gmail.com (Hardik Patel)
 */
'use strict';

goog.provide('Blockly.Blocks.robot');

goog.require('Blockly.Blocks');

Blockly.Blocks['moveforward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['makeright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make Right Turn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['makeleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make Left Turn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['movereverse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Backward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shootlaser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Shoot Laser");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


