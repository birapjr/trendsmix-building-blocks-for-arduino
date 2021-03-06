/**
 * @license
 * TrendsMix Building Blocks for Arduino 
 *
 * Copyright 2018 TrendsMix Technology
 * All rights reserved.
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
 * @fileoverview Arduino Blocks code
 * @author ubirajara.cortes@trendsmix.com <Ubirajara Cortes>
 */
'use strict';

goog.provide('Blockly.Blocks.arduinoToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
    '<category name="Events">' +
        '<block type="event_whenflagclicked"></block>' +
    '</category>' +
    '<category name="Control">' +
        '<block type="control_forever"></block>' +
        '<block type="control_repeat">' +
            '<value name="TIMES">' +
                '<shadow type="math_whole_number">' +
                    '<field name="NUM">4</field>' +
                '</shadow>' +
            '</value>' +
        '</block>' +
        '<block type="control_stop"></block>' +
        '<block type="control_wait">' +
            '<value name="DURATION">' +
                '<shadow type="math_positive_number">' +
                    '<field name="NUM">1</field>' +
                '</shadow>' +
            '</value>' +
        '</block>' +
    '</category>' +
    '<category name="Hardware">' +
        '<block type="arduino_setcolor">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_arduino_setcolor">' +
        '<field name="CHOICE">red</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '</xml>';
        
Blockly.Blocks.defaultToolboxSimple = '<xml id="toolbox-simple" style="display: none">' +
        '<block type="event_whenflagclicked"></block>' +
        '<block type="event_whenbroadcastreceived">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_whenbroadcast">' +
        '<field name="CHOICE">blue</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="event_broadcast">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_broadcast">' +
        '<field name="CHOICE">blue</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="control_forever"></block>' +
        '<block type="control_repeat">' +
        '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
        '<field name="NUM">4</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="control_stop"></block>' +
        '<block type="control_wait">' +
        '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
    '</xml>';
