// Copyright Edward McNamara 2022
// Created by: Edward McNamara
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area and perimeter of a trapezoid.
 */
function calcAreaClicked () {
  // get user input
  let side_a = parseFloat(document.getElementById('side-a').value)
  let side_b = parseFloat(document.getElementById('side-b').value)
let height = parseFloat(document.getElementById('height').value)
  // area formula
  let area = (side_a + side_b) / 2 * height
  // results
  document.getElementById('area').innerHTML = "The area is " + area.toFixed(2) + "cm<sup>2</sup>"
}
