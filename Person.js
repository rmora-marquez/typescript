var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelft = function () {
        console.log("Hi, i am " + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Sally");
personA.introduceSelft();
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(name, years) {
        var _this = _super.call(this, name) || this;
        _this.yearsKnown = years;
        return _this;
    }
    Friend.prototype.timeKnown = function () {
        console.log("We have been friends for " + this.yearsKnown + "years");
    };
    return Friend;
}(Person));
var friendA = new Friend("Jacob", 6);
friendA.introduceSelft();
friendA.timeKnown();
