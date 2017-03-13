import angular from 'angular';

import LikeController from './controllers/like';

angular
.module('LikeButton', [])
.controller('LikeController',LikeController);
