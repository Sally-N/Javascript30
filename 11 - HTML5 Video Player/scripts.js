"use strict";

const screen = document.querySelector('.player');

const playerControls = screen.querySelector('.player_controls');
const progress = screen.querySelector('.progress')
const progressBar = screen.querySelector('.progress__filled')
const toggle = screen.querySelector('.toggle');
const skipButtons = screen.querySelectorAll('[data-skip]');
const ranges = screen.querySelectorAll('.player__slider');
const video = screen.querySelector('.viewer');


