/**
 * msngui
 * @version v0.0.3 - 2014-12-20
 * @link https://github.com/MentorSoftwareLtd/msNgUi
 * @author Miroslaw Dylag (miroslaw.dylag@mentorsoftwareltd.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';

// Source: tree.tpl.js
angular.module('ms.NgUi.tree').run(['$templateCache', function($templateCache) {

  $templateCache.put('tree/tree.tpl.html', '<li ng-class="classParent"><span ng-class="classLeaf" ng-click="nodeClicked($event,node);select(node);"><span ng-if="classExpanded" ng-class="classExpanded" ng-show="isFolder(node) && isExpanded(node) && hasChildren(node)"></span> <span ng-if="classCollapsed" ng-class="classCollapsed" ng-show="isFolder(node) && (!isExpanded(node) || !hasChildren(node))"></span> <span ng-if="classFile" ng-class="classFile" ng-show="isFile(node)"></span> <span>{{node.name}}</span></span></li>');

}]);


})(window, document);
